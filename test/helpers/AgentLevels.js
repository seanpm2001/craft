module.exports = {
  agent01: {
    specialLevelType: 'agentSpawn',
    isAgentLevel: true,
    groundPlane: ["grass", "grass", "grass", "oreDiamond", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirt", "dirt", "dirt", "dirt", "dirt", "grass", "grass", "dirt", "grass", "grass", "dirt", "dirt", "dirt", "dirt", "dirt", "grass", "grass", "grass", "grass", "grass", "wool", "dirt", "wool_orange", "dirt", "dirt", "grass", "grass", "grass", "grass", "grass", "dirt", "dirt", "dirt", "dirt", "dirt", "grass", "grass", "grass", "grass", "bricks", "dirt", "dirt", "wool", "dirt", "dirt", "bricks", "bricks", "grass", "bricks", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "dirtCoarse", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "tallGrass", "", "tallGrass", "", "", "", "", "", "", "", "", "", "tallGrass", "tallGrass", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", "", "", "tallGrass", "flowerRose", "flowerDandelion", "", "flowerDandelion", "flowerDandelion", "tallGrass", "", "", "tallGrass", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", "", "tallGrass", "tallGrass", "", "", "", "", "", "tallGrass", "", "tallGrass"],
    actionPlane: ["", "", "", "diamondMiniblock", "", "", "", "", "", "", "", "planksSpruce", "planksSpruce", "glass", "planksSpruce", "planksSpruce", "", "", "treeSpruce", "", "", "planksSpruce", "", "", "", "planksSpruce", "", "", "", "", "", "glass", "", "torch", "", "glass", "", "", "", "", "", "planksSpruce", "", "pressurePlateUp", "", "planksSpruce", "", "", "", "", "bricks", "planksSpruce", "planksSpruce", "doorIron", "planksSpruce", "planksSpruce", "bricks", "bricks", "", "bricks", "", "", "", "pressurePlateUp", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    playerStartPosition: [8, 8],
    playerStartDirection: 2,
    verificationFunction: verificationAPI => verificationAPI.isPlayerAt([3, 3]),
  },
  agent05: {
    isAgentLevel: true,
    useAgent: true,
    groundPlane: ["sand", "sand", "sand", "sand", "sand", "grass", "grass", "grass", "grass", "grass", "sand", "sand", "sand", "wool_orange", "sand", "sand", "grass", "grass", "grass", "grass", "water", "sand", "sand", "sand", "sand", "sand", "sand", "grass", "oreDiamond", "grass", "water", "water", "water", "water", "water", "water", "sand", "sand", "sand", "sand", "dirt", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "sand", "water", "water", "water", "water", "water", "dirt", "water", "water", "planksOak", "planksOak", "sand", "sand", "sand", "sand", "water", "water", "water", "water", "planksOak", "planksOak", "grass", "grass", "grass", "sand", "sand", "sand", "sand", "sand", "planksOak", "planksOak", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "planksOak", "planksOak", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    groundDecorationPlane: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "tallGrass", "", "", "", "", "", "", "", "tallGrass", "", "flowerOxeeye", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "tallGrass", "", "flowerOxeeye", "", "", "", "", "tallGrass", "", "", "", "", "tallGrass"],
    actionPlane: ["sand", "sand", "sand", "", "sand", "grass", "grass", "", "", "", "", "", "sand", "torch", "sand", "sand", "", "", "treeSpruce", "", "", "sand", "", "", "", "sand", "sand", "", "diamondMiniblock", "", "", "", "", "", "", "", "sand", "", "", "", "sand", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "sand", "", "", "planksOak", "planksOak", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "planksOak", "planksOak", "", "", "", "", "", "", "", ""],
    playerStartPosition: [1, 8],
    playerStartDirection: 1,
    agentStartPosition: [3, 6],
    agentStartDirection: 0,
    verificationFunction: verificationAPI => verificationAPI.isPlayerAt([3, 1]),
  },
};
