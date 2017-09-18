const LevelBlock = require("./LevelBlock.js");

const North = 1;
const South = 2;
const East = 4;
const West = 8;

const connectionName = function (connection) {
  switch (connection) {
    case 1: return 'North';
    case 2: return 'South';
    case 4: return 'East';
    case 8: return 'West';
    default: return '';
  }
};

const RedstoneCircuitConnections = [
  "", "Vertical", "Vertical", "Vertical",
  "Horizontal", "UpRight", "DownRight", "TRight",
  "Horizontal", "UpLeft", "DownLeft", "TLeft",
  "Horizontal", "TUp", "TDown", "Cross",
];

const RailConnectionPriority = [
  [], [North], [South], [North, South],
  [East], [North, East], [South, East], [South, East],
  [West], [North, West], [South, West], [South, West],
  [East, West], [North, East], [South, East], [North, East],
];

const PoweredRailConnectionPriority = [
  [], [North], [South], [North, South],
  [East], [East, West], [East, West], [East, West],
  [West], [East, West], [East, West], [East, West],
  [East, West], [East, West], [East, West], [East, West],
];

module.exports = class LevelPlane {
  constructor(planeData, width, height, isActionPlane = false, LevelModel = null) {
    this._data = [];
    this.width = width;
    this.height = height;
    this.levelModel = LevelModel;
    this.redstoneList = [];
    this.redstoneListON = [];

    for (let index = 0; index < planeData.length; ++index) {
      let block = new LevelBlock(planeData[index]);
      // TODO(bjordan): put this truth in constructor like other attrs
      block.isWalkable = block.isWalkable || !isActionPlane;
      this._data.push(block);
    }
  }

  /**
  * Determines whether the position in question is within the bounds of the plane.
  */
  inBounds(position) {
    const [x, y] = position;
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  /**
  * Converts coordinates to a index
  */
  coordinatesToIndex(position) {
    return position[1] * this.width + position[0];
  }

  /**
  * Determines the positional coordinates given a specific index.
  */
  indexToCoordinates(index) {
    let y = Math.floor(index / this.width);
    let x = index - (y * this.width);
    return [x, y];
  }

  /**
  * Gets the block at the desired index within the plane.
  */
  getBlockAt(position, offsetX = 0, offsetY = 0) {
    const [x, y] = position;
    const target = [x + offsetX, y + offsetY];

    if (this.inBounds(target)) {
      return this._data[this.coordinatesToIndex(target)];
    }
  }

  /**
  * Changes the block at a desired position to the desired block.
  * Important note: This is the cornerstone of block placing/destroying.
  */
  setBlockAt(position, block, offsetX = 0, offsetY = 0) {
    this._data[this.coordinatesToIndex(position)] = block;
    let offset = [offsetX,offsetY];

    let positionInQuestion = [0,0];
    // This will either be the pos the player is leaving or entering, depending on situation
    if (this.levelModel) {
      positionInQuestion = [this.levelModel.player.position[0] + offset[0], this.levelModel.player.position[1] + offset[1]];
    }
    let wasOnADoor = false;
    // If the questionable position was a door, we want to do a few things differently.
    if (this.inBounds(positionInQuestion) && this.getBlockAt(positionInQuestion).blockType === "doorIron") {
      wasOnADoor = true;
    }

    let redstoneToRefresh = [];
    if (block.isRedstone || block.blockType === '' || block.isConnectedToRedstone) {
      redstoneToRefresh = this.getRedstone();
      // Once we're done updating redstoneWire states, check to see if doors should open/close.
      if (wasOnADoor) {
        this.findDoorToAnimate(positionInQuestion);
      } else {
        this.findDoorToAnimate([-1,-1]);
      }
    }

    this.determineRailType(position, true);

    if (this.levelModel) {
      let positionAndTouching = this.getOrthogonalPositions(position).concat([position]);
      this.levelModel.controller.levelView.refreshActionPlane(positionAndTouching);
      this.levelModel.controller.levelView.refreshActionPlane(redstoneToRefresh);
    }

    return block;
  }

  /**
  * Gets the orthogonal positions around a given position.
  * Important note: This isn't doing bounds checking.
  */
  getOrthogonalPositions(position) {
    const [x, y] = position;
    return [
      [x, y - 1],
      [x, y + 1],
      [x + 1, y],
      [x - 1, y],
    ];
  }

  /**
  * Gets the blocks within orthogonal positions around a given position.
  * Important note: This DOES to bounds checking. Will be undefined if OOB.
  */
  getOrthogonalBlocks(position) {
    return {
      north: {block: this.getBlockAt(position, 0, -1), relative: South},
      south: {block: this.getBlockAt(position, 0, 1), relative: North},
      east: {block: this.getBlockAt(position, 1, 0), relative: West},
      west: {block: this.getBlockAt(position, -1, 0), relative: East},
    };
  }

  /**
  * Gets the mask of the orthogonal indices around the given position.
  */
  getOrthogonalMask(position, comparator) {
    const orthogonal = this.getOrthogonalBlocks(position);
    return (
      (comparator(orthogonal.north) << 0) +
      (comparator(orthogonal.south) << 1) +
      (comparator(orthogonal.east) << 2) +
      (comparator(orthogonal.west) << 3)
    );
  }

  /**
  * Determines which rail object should be placed given the context of surrounding
  * indices.
  */
  determineRailType(position, updateTouching = false) {
    const block = this.getBlockAt(position);

    if (!block || !block.isRail) {
      return;
    }

    if (block.connectionA && block.connectionB) {
      return;
    }

    const mask = this.getOrthogonalMask(position, ({block, relative}) => {
      if (!block || !block.isRail) {
        return false;
      }
      const a = !block.connectionA || block.connectionA === relative;
      const b = !block.connectionB || block.connectionB === relative;

      return a || b;
    });

    let powerState = '';
    let priority = RailConnectionPriority;
    if (block.isConnectedToRedstone) {
      powerState = 'Unpowered';
      priority = PoweredRailConnectionPriority;
    }

    // Look up what type of connection to create, based on the surrounding tracks.
    [block.connectionA, block.connectionB] = priority[mask];
    const variant = connectionName(block.connectionA) + connectionName(block.connectionB);

    block.blockType = `rails${powerState}${variant}`;

    if (updateTouching) {
      this.getOrthogonalPositions(position).forEach(orthogonalPosition => {
        this.determineRailType(orthogonalPosition);
      });
    }
  }

  /**
  * Determines which redstoneWire variant should be placed given the context of
  * surrounding indices and Powered state.
  */
  determineRedstoneSprite(position) {
    const block = this.getBlockAt(position);

    if (!block || !block.isRedstone) {
      return;
    }

    const mask = this.getOrthogonalMask(position, ({block}) => {
      return block && (block.isRedstone || block.isConnectedToRedstone);
    });

    const variant = RedstoneCircuitConnections[mask];
    const powerState = block.isPowered ? 'On' : '';
    block.blockType = `redstoneWire${variant}${powerState}`;

    return `redstoneWire${variant}`;
  }

  /**
  * Updates the state and sprites of all redstoneWire on the plane.
  * Important note: This is what kicks off redstone charge propagation and is called
  * on place/destroy/run/load.... wherever updating charge is important.
  */
  getRedstone() {
    this.redstoneList = [];
    this.redstoneListON = [];
    for (let i = 0; i < this._data.length; ++i) {
      if (this._data[i].isRedstone) {
        this._data[i].isPowered = false;
        let position = this.indexToCoordinates(i);
        this.redstoneList.push(position);
      }
    }
    for (let i = 0; i < this._data.length; ++i) {
      if (this._data[i].isRedstoneBattery) {
        let position = this.indexToCoordinates(i);
        this.redstonePropagation(position);
      }
    }

    let posToRefresh = [];
    for (let i = 0; i < this.redstoneList.length; ++i) {
      this.determineRedstoneSprite(this.redstoneList[i]);
      posToRefresh.push(this.redstoneList[i]);
    }
    for (let i = 0; i < this.redstoneListON.length; ++i) {
      this.determineRedstoneSprite(this.redstoneListON[i]);
      posToRefresh.push(this.redstoneListON[i]);
    }

    return posToRefresh;
  }

  /**
  * Find all iron doors in a level and evaluate if they need to be animated based on state
  */
  findDoorToAnimate(positionInQuestion) {
    let notOffendingIndex = this.coordinatesToIndex(positionInQuestion);
    for (let i = 0; i < this._data.length; ++i) {
      if (this._data[i].blockType === "doorIron" && notOffendingIndex !== i) {
        this._data[i].isPowered = this.powerCheck(this.indexToCoordinates(i));
        if (this._data[i].isPowered && !this._data[i].isOpen) {
          this._data[i].isOpen = true;
          if (this.levelModel) {
            this.levelModel.controller.levelView.animateDoor(i, true);
          }
        } else if (!this._data[i].isPowered && this._data[i].isOpen) {
          this._data[i].isOpen = false;
          if (this.levelModel) {
            this.levelModel.controller.levelView.animateDoor(i, false);
          }
        }
      }
    }
  }

  /**
  * Silly helper to get the index of a specific position in an array of positions.
  */
  findPositionInArray(position, array) {
    for (let i = 0; array.length; ++i) {
      if (position[0] === array[i][0]) {
        if (position[1] === array[i][1]) {
          return i;
        }
      }
    }
  }

  /**
  * If the block at the given position is redstone, this tracks the position, and
  * propagates power to the surrounding indices.
  */
  redstonePropagation(position) {
    let block = this._data[this.coordinatesToIndex(position)];
    if (block.isRedstone) {
      let indexToRemove = this.findPositionInArray(position, this.redstoneList);
      this.redstoneList.splice(indexToRemove,1);
      this.redstoneListON.push(position);
      this._data[this.coordinatesToIndex(position)].isPowered = true;
    }

    this.getOrthogonalPositions(position).forEach(orthogonalPosition => {
      this.blockPropagation(orthogonalPosition);
    });
  }

  /**
  * The actual recursive propagation functionality for updating Powered state and sending
  * the propagation call to surrounding indices.
  */
  blockPropagation(position) {
    let adjacentBlock = this._data[position[1] * this.width + position[0]];
    if (this.inBounds(position) &&
      adjacentBlock.isPowered === false &&
      adjacentBlock.isRedstone) {
      adjacentBlock.isPowered = true;
      this.redstonePropagation([position[0],position[1]]);
    }
  }

  /**
  * Checking power state for objects that are powered by redstone.
  */
  powerCheck(position) {
    return this.getOrthogonalPositions(position).some(orthogonalPosition => {
      const block = this._data[this.coordinatesToIndex(orthogonalPosition)];
      if (block) {
        return (block.isRedstone && block.isPowered) || block.isRedstoneBattery;
      }
    });
  }

};
