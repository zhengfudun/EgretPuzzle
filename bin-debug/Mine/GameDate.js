var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.LENGTH = 630;
    GameData.LEVEL_EASY = 3;
    GameData.LEVEL_NORMAL = 4;
    GameData.LEVEL_HARD = 5;
    GameData.step = 0;
    GameData.one = ["p0_01_png", "p0_02_png", "p0_03_png", "p0_04_png",
        "p0_05_png", "p0_06_png", "p0_07_png", "p0_08_png", "block_png"];
    GameData.onenor = ["p1_01_png", "p1_02_png", "p1_03_png", "p1_04_png",
        "p1_05_png", "p1_06_png", "p1_07_png", "p1_08_png", "p1_09_png",
        "p1_10_png", "p1_11_png", "p1_12_png", "p1_13_png", "p1_14_png",
        "p1_15_png", "blocknor_png"];
    GameData.onehar = ["p3_01_png", "p3_02_png", "p3_03_png", "p3_04_png",
        "p3_05_png", "p3_06_png", "p3_07_png", "p3_08_png", "p3_09_png", "p3_10_png",
        "p3_11_png", "p3_12_png", "p3_13_png", "p3_14_png", "p3_15_png", "p3_16_png",
        "p3_17_png", "p3_18_png", "p3_19_png", "p3_20_png", "p3_21_png", "p3_22_png",
        "p3_23_png", "p3_24_png", "blockhar_png"];
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameDate.js.map