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
    entities: [["dolphin",5,1,2]],
    playerStartPosition: [5, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [5, 1]),
  },
  aquatic08: {
    isAquaticLevel: true,
    ocean: "warm",
    playerName: "SteveAquatic",
    assetPacks: {
      beforeLoad: ['allAssetsMinusPlayer', 'playerSteveAquatic'],
      afterLoad: [],
    },
    groundPlane: ["sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "redCoralBlock", "sand", "redCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "redCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "pinkCoralBlock", "sand", "sand", "blueCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "redCoralBlock", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "pinkCoralBlock", "sand", "sand", "pinkCoralBlock", "sand", "sand", "sand"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["magmaBlock", "", "", "", "", "", "", "", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "dirt", "dirt", "dirt", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "dirt", "magmaBlock", "magmaBlock", "dirt", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "dirt", "dirt", "dirt", "lava", "magmaBlock", "", "magmaBlock", "magmaBlock", "magmaBlock", "", "dirt", "magmaBlock", "magmaBlock", "dirt", "magmaBlock", "", "", "", "magmaBlock", "", "magmaBlock", "magmaBlock", "magmaBlock", "magmaBlock", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "", "", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "magmaBlock", "", "", "", "diamondMiniblock", "", "deadCoralBlock", "", "", "", "magmaBlock", "", "", "", "", "deadCoralBlock", "deadCoralBlock", "", "", "", "deadCoralBlock", "", "", "deadCoralBlock", "", "", "", ""],
    entities: [],
    playerStartPosition: [1, 4],
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
    groundDecorationPlane: ["", "", "kelp", "seaGrass", "", "pinkCoralFan", "", "kelp", "", "", "", "", "", "", "", "", "seaPickles", "seaGrass", "kelp", "", "", "", "yellowCoralFan", "yellowCoralFan", "kelp", "", "", "pinkCoralFan", "seaGrass", "", "yellowCoralFan", "", "", "kelp", "", "", "", "", "", "", "kelp", "kelp", "", "seaGrass", "", "", "kelp", "seaPickles", "yellowCoralFan", "", "", "", "", "", "kelp", "", "", "", "", "yellowCoralFan", "pinkCoralFan", "kelp", "", "", "", "", "kelp", "", "", "blueCoralFan", "", "", "", "", "pinkCoralFan", "kelp", "", "", "", "", "seaGrass", "", "", "blueCoralFan", "", "", "kelp", "", "", "blueCoralFan", "seaPickles", "", "", "kelp", "", "", "", "kelp", "pinkCoralFan", ""],
    actionPlane: ["yellowCoralBlock", "yellowCoralBlock", "", "", "pinkCoralBlock", "", "pinkCoralBlock", "", "blueCoralBlock", "blueCoralBlock", "yellowCoralBlock", "", "", "", "", "", "", "", "", "blueCoralBlock", "", "", "", "", "", "", "", "", "", "pinkCoralBlock", "", "", "", "", "magentaCoralBlock", "", "", "", "pinkCoralBlock", "pinkCoralBlock", "", "", "", "", "", "", "", "", "", "yellowCoralBlock", "magentaCoralBlock", "", "magentaCoralBlock", "magentaCoralBlock", "", "", "", "", "", "", "", "", "magentaCoralBlock", "chest", "magentaCoralBlock", "magentaCoralBlock", "", "magentaCoralBlock", "", "", "pinkCoralBlock", "", "magentaCoralBlock", "diamondMiniblock", "magentaCoralBlock", "", "yellowCoralBlock", "magentaCoralBlock", "magentaCoralBlock", "", "", "", "pinkCoralBlock", "", "", "", "", "", "", "", "", "pinkCoralBlock", "pinkCoralBlock", "", "", "yellowCoralBlock", "yellowCoralBlock", "", "", ""],
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
    groundDecorationPlane: ["", "blueCoralFan", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    actionPlane: ["", "", "prismarine", "darkPrismarine", "prismarine", "prismarine", "darkPrismarine", "prismarine", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "prismarine", "", "", "prismarine", "prismarine", "prismarine", "", "", "", "", "prismarine", "", "", "", "diamondMiniblock", "prismarine", "", "", "", "", "prismarine", "", "", "prismarine", "prismarine", "prismarine", "", "darkPrismarine", "", "", "prismarine", "", "", "", "", "", "", "", "", "", "prismarine", "", "", "", "", "", "", "darkPrismarine", "", "", "prismarine", "", "", "prismarine", "", "prismarine", "prismarine", "prismarine", "", "", "prismarine", "", "", "", "", "prismarine", "prismarine", "prismarine", "", "", "prismarine", "", "", "prismarine", "", "", "", ""],
    entities: [],
    playerStartPosition: [1, 8],
    playerStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isEntityAt("Player", [6, 3]),
  },
};
