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
var Gamebtn = (function (_super) {
    __extends(Gamebtn, _super);
    function Gamebtn() {
        var _this = _super.call(this) || this;
        _this.skinName = "gamebtn";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Gamebtn.prototype.onAddToStage = function () {
        this.btn_easy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEasyClick, this);
        this.btn_normal.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNormalClick, this);
        this.btn_hard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHardClick, this);
    };
    Gamebtn.prototype.onEasyClick = function () { this.dispatchEventWith("starteasy"); };
    Gamebtn.prototype.onNormalClick = function () { this.dispatchEventWith("startnormal"); };
    Gamebtn.prototype.onHardClick = function () { this.dispatchEventWith("starthard"); };
    return Gamebtn;
}(eui.Component));
__reflect(Gamebtn.prototype, "Gamebtn");
//# sourceMappingURL=gamebtn.js.map