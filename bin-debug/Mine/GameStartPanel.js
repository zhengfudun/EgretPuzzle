var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameStartPanel = (function (_super) {
    __extends(GameStartPanel, _super);
    function GameStartPanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameStartPanel.prototype.init = function () {
        this.startUI = new Gamebtn();
        this.startUI.addEventListener("starteasy", this.onClickEasy, this);
        this.startUI.addEventListener("startnormal", this.onClickNormal, this);
        this.startUI.addEventListener("starthard", this.onClickHard, this);
        this.addChild(this.startUI);
    };
    GameStartPanel.prototype.onClickEasy = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("starteasy");
    };
    GameStartPanel.prototype.onClickNormal = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("startnormal");
    };
    GameStartPanel.prototype.onClickHard = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("starthard");
    };
    return GameStartPanel;
}(egret.Sprite));
__reflect(GameStartPanel.prototype, "GameStartPanel");
//# sourceMappingURL=GameStartPanel.js.map