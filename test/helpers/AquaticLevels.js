module.exports = {
  aquatic02: {
    isAquaticLevel: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "planksOak", "water", "water", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "diamondMiniblock", "", "", "", "", "treeJungle", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    entities: [["boat", 8, 3, 2]],
    playerStartPosition: [4, 4],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 7]),
  },
  aquatic03: {
    isAquaticLevel: true,
    boat: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["stone", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "planksOak", "planksOak", "water", "water", "water", "water", "water", "sand", "sand", "sand", "water", "water", "water", "water", "water", "water", "water"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "treeJungle", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "treeJungle", "", "", "", "", "", "", "", "", ""],
    entities: [["dolphin", 5, 1, 0]],
    playerStartPosition: [5, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [5, 1]),
  },
  aquatic06: {
    isAquaticLevel: true,
    boat: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["snow", "snow", "snow", "snow", "snow", "water", "water", "water", "stoneBricks", "water", "snow", "snow", "snow", "snow", "snow", "ice", "water", "water", "water", "water", "snow", "snow", "snow", "snow", "ice", "ice", "water", "water", "stoneBricks", "stoneBricks", "snow", "snow", "snow", "water", "water", "water", "water", "water", "water", "water", "snow", "snow", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "ice", "ice", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "water", "water", "water", "water", "water", "water", "water", "ice", "ice", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "ice", "water", "ice", "water", "ice", "ice", "water", "ice", "ice", "ice", "ice", "water", "ice", "water", "water", "water", "water", "ice", "ice", "ice", "water", "water", "water"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["snow", "snow", "snow", "snow", "", "", "stoneBricks", "", "stoneBricks", "", "snow", "snow", "snow", "", "", "", "", "", "", "", "snow", "snow", "", "", "", "", "", "", "", "stoneBricks", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ice", "ice", "", "", "ice", "", "", "", "", "", "ice", "ice", "", "ice", "ice", "", "", "", "", "", "", "", "", "", "", "", "", "ice", "ice", "", "", "", "", "", "", "ice", "", "ice", "", "", "ice", "ice", "", "ice", "", "ice", "", "", "", "", "ice", "", "", "", "", ""],
    entities: [["seaTurtle", 6, 6, 3]],
    playerStartPosition: [0, 9],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [7, 2]),
  },
  aquatic08: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "redCoralBlock", "sand", "redCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "redCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "pinkCoralBlock", "sand", "sand", "blueCoralBlock", "sand", "sand", "sand", "magmaUnderwater", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "redCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "pinkCoralBlock", "sand", "sand", "pinkCoralBlock", "sand", "sand", "sand"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["magmaBlock", "", "", "", "", "", "", "", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "dirt", "dirt", "dirt", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "dirt", "magmaBlock", "magmaBlock", "dirt", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "dirt", "dirt", "dirt", "lava", "magmaBlock", "", "magmaBlock", "magmaBlock", "magmaBlock", "", "dirt", "magmaBlock", "magmaBlock", "dirt", "magmaBlock", "", "", "", "magmaBlock", "", "magmaBlock", "magmaBlock", "magmaBlock", "magmaBlock", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "", "", "magmaBlock", "", "magmaBlock", "", "bubbleColumn", "", "magmaBlock", "", "", "", "diamondMiniblock", "", "deadCoralBlock", "", "", "", "magmaBlock", "", "", "", "", "deadCoralBlock", "deadCoralBlock", "", "", "", "deadCoralBlock", "", "", "deadCoralBlock", "", "", "", ""],
    entities: [],
    playerStartPosition: [1, 4],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 7]),
  },
  aquatic08a: {
    isAquaticLevel: true,
    boat: true,
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["water", "water", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "dirt", "dirt", "water", "water", "water", "water", "water", "water", "water", "magmaUnderwater", "dirt", "dirt", "water", "water", "dirt", "water", "water", "dirt", "water", "magmaUnderwater", "magmaUnderwater", "dirt", "magmaUnderwater", "water", "water", "water", "water", "water", "water", "water", "water", "dirt", "magmaUnderwater", "water", "water", "water", "water", "water", "water", "blueDeadCoralBlock", "water", "dirt", "magmaUnderwater", "water", "dirt", "water", "water", "dirt", "water", "blueDeadCoralBlock", "water", "dirt", "magmaUnderwater", "water", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "magmaUnderwater", "water", "blueDeadCoralBlock", "water", "dirt", "magmaUnderwater", "water", "magmaUnderwater", "redCoralBlock", "water", "water", "water", "water", "water", "dirt", "water", "water", "magmaUnderwater", "water", "water", "water", "magentaCoralBlock", "dirt", "dirt", "dirt", "water", "water", "blueDeadCoralBlock", "water", "magentaCoralBlock", "dirt", "dirt", "dirt", "dirt", "dirt"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["dirt", "dirt", "", "", "", "", "", "", "magmaBlock", "lava", "dirt", "", "", "", "", "", "", "", "magmaBlock", "dirt", "magmaBlock", "", "dirt", "dirt", "dirt", "dirt", "", "", "", "magmaBlock", "", "", "dirt", "lava", "lava", "dirt", "", "", "", "dirt", "", "", "dirt", "lava", "lava", "dirt", "", "blueDeadCoralBlock", "", "dirt", "", "", "dirt", "magmaBlock", "magmaBlock", "dirt", "", "blueDeadCoralBlock", "turtleMiniblock", "dirt", "", "", "", "", "", "", "", "blueDeadCoralBlock", "", "dirt", "", "", "", "", "", "", "", "", "", "dirt", "", "", "", "", "", "", "", "dirt", "dirt", "dirt", "", "", "deadCoralBlock", "", "", "dirt", "dirt", "dirt", "magmaBlock", "magmaBlock"],
    entities: [["tropicalFish", 5, 7, 3]],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 7]),
  },
  aquatic09: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["yellowCoralBlock", "yellowCoralBlock", "sand", "sand", "pinkCoralBlock", "sand", "pinkCoralBlock", "sand", "yellowCoralBlock", "yellowCoralBlock", "yellowCoralBlock", "blueCoralBlock", "sand", "sand", "sand", "blueCoralBlock", "sand", "sand", "sand", "yellowCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "pinkCoralBlock", "sand", "sand", "sand", "sand", "magentaCoralBlock", "planksOak", "sand", "blueCoralBlock", "sand", "pinkCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "yellowCoralBlock", "magentaCoralBlock", "sand", "magentaCoralBlock", "sand", "sand", "redCoralBlock", "sand", "planksOak", "blueCoralBlock", "sand", "sand", "sand", "magentaCoralBlock", "sand", "magentaCoralBlock", "magentaCoralBlock", "sand", "magentaCoralBlock", "redCoralBlock", "blueCoralBlock", "pinkCoralBlock", "sand", "magentaCoralBlock", "sand", "sand", "sand", "yellowCoralBlock", "magentaCoralBlock", "magentaCoralBlock", "sand", "sand", "sand", "pinkCoralBlock", "blueCoralBlock", "sand", "sand", "sand", "sand", "sand", "blueCoralBlock", "sand", "pinkCoralBlock", "pinkCoralBlock", "sand", "sand", "yellowCoralBlock", "yellowCoralBlock", "sand", "sand", "sand"],
    groundDecorationPlane: ["", "", "kelp", "seaGrass", "", "coralPlantPink", "", "kelp", "", "", "", "", "", "", "", "", "", "seaGrass", "kelp", "", "", "", "coralPlantYellow", "coralPlantYellow", "kelp", "", "", "coralPlantPink", "seaGrass", "", "coralPlantYellow", "", "", "kelp", "", "", "", "", "", "", "kelp", "kelp", "", "seaGrass", "", "", "kelp", "seaPickles", "coralPlantYellow", "", "", "", "", "", "kelp", "", "", "", "", "coralPlantYellow", "coralPlantPink", "kelp", "", "", "", "", "kelp", "", "", "", "", "", "", "", "coralPlantPink", "kelp", "", "", "", "", "seaGrass", "", "", "", "", "", "kelp", "", "", "", "seaPickles", "", "", "kelp", "", "", "", "kelp", "coralPlantPink", ""],
    actionPlane: ["yellowCoralBlock", "yellowCoralBlock", "", "", "pinkCoralBlock", "", "pinkCoralBlock", "", "yellowCoralBlock", "yellowCoralBlock", "yellowCoralBlock", "", "", "", "", "", "seaPickles", "", "", "yellowCoralBlock", "", "", "", "", "", "", "", "", "", "pinkCoralBlock", "", "", "", "", "magentaCoralBlock", "", "", "diamondMiniblock", "pinkCoralBlock", "pinkCoralBlock", "", "", "", "", "", "", "", "", "", "yellowCoralBlock", "magentaCoralBlock", "", "magentaCoralBlock", "magentaCoralBlock", "", "", "", "", "", "", "", "", "magentaCoralBlock", "diamondChest", "magentaCoralBlock", "magentaCoralBlock", "", "magentaCoralBlock", "", "", "pinkCoralBlock", "", "magentaCoralBlock", "", "magentaCoralBlock", "", "yellowCoralBlock", "magentaCoralBlock", "magentaCoralBlock", "", "", "", "pinkCoralBlock", "", "", "", "", "", "", "", "", "pinkCoralBlock", "pinkCoralBlock", "", "", "yellowCoralBlock", "yellowCoralBlock", "", "", ""],
    entities: [],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [3, 7]),
  },
  aquatic10: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["sand", "sand", "prismarine", "darkPrismarine", "prismarine", "prismarine", "darkPrismarine", "prismarine", "sand", "sand", "sand", "seaLantern", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "seaLantern", "sand", "prismarine", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "seaLantern", "redCoralBlock", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "sand", "sand", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "sand", "prismarine", "prismarine", "seaLantern", "darkPrismarine", "darkPrismarine", "blueCoralBlock", "darkPrismarine", "seaLantern", "prismarine", "sand", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "darkPrismarine", "darkPrismarine", "darkPrismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "prismarine", "redCoralBlock", "sand", "redCoralBlock", "prismarine", "prismarine", "sand", "sand", "prismarine", "prismarine", "prismarine", "sand", "sand", "blueCoralBlock", "sand", "sand", "sand"],
    groundDecorationPlane: ["coralFanRedTop", "seaGrass", "", "", "", "", "", "", "coralPlantBlue", "coralFanBlueTop", "coralPlantRed", "", "", "", "", "", "", "", "", "coralFanBlueTop", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "coralPlantBlue", "", "", "", "", "", "", "", "", "", "coralFanBlueTop", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "kelp", "kelp", "", "", "", "coralPlantBlue", "", "", "", "coralPlantRed", ""],
    actionPlane: ["", "", "prismarineBricks", "darkPrismarine", "prismarineBricks", "prismarineBricks", "darkPrismarine", "prismarineBricks", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "prismarine", "", "", "prismarine", "prismarine", "prismarine", "", "", "", "", "prismarine", "", "", "", "diamondMiniblock", "prismarine", "", "", "", "", "prismarine", "", "", "prismarine", "prismarine", "prismarine", "", "darkPrismarine", "", "", "prismarine", "", "", "", "", "", "", "", "", "", "prismarine", "", "", "", "", "", "", "darkPrismarine", "", "", "prismarine", "", "", "prismarine", "", "prismarine", "prismarine", "prismarine", "", "", "prismarine", "", "", "", "", "prismarine", "prismarine", "prismarine", "", "", "prismarine", "", "", "prismarine", "", "", "", ""],
    entities: [['squid',6,3,3]],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 3]),
  },
};
