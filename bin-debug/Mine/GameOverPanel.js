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
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        var _this = _super.call(this) || this;
        _this.ma = new Main();
        _this.init();
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.isClick, _this);
        return _this;
    }
    GameOverPanel.prototype.isClick = function () {
        console.log("gameover click");
        this.dispatchEventWith("restart");
        this.parent.removeChild(this);
    };
    GameOverPanel.prototype.init = function () {
        //this.filters = [new egret.DropShadowFilter()];
        this.graphics.lineStyle(3, 0xBBBBBB, 0.8);
        this.graphics.beginFill(0xe5dbd9);
        this.graphics.drawRoundRect(0, 0, this.ma.rootStagW - 20, this.ma.rootStagW / 3, 60, 60);
        this.graphics.endFill();
        this.alpha = 0.8;
        this.tittle = new egret.TextField();
        this.tittle.text = "Success !";
        this.tittle.size = 50;
        this.tittle.stroke = 3;
        this.tittle.strokeColor = 0x555555;
        this.tittle.textColor = 0xffffff;
        this.tittle.x = (this.width - this.tittle.width) / 2;
        this.tittle.y = 30;
        this.addChild(this.tittle);
        this.stepTxt = new egret.TextField();
        this.stepTxt.text = "你一共走了 " + GameData.step + " 步";
        this.stepTxt.size = 35;
        this.stepTxt.stroke = 3;
        this.stepTxt.strokeColor = 0x555555;
        this.stepTxt.textColor = 0xffffff;
        this.stepTxt.x = (this.width - this.stepTxt.width) / 2;
        this.stepTxt.y = 180;
        this.addChild(this.stepTxt);
        this.tipTxt = new egret.TextField();
        this.tipTxt.text = "- 点击这里返回选择界面 -";
        this.tipTxt.size = 40;
        this.tipTxt.stroke = 3;
        this.tipTxt.strokeColor = 0x555555;
        this.tipTxt.textColor = 0xffffff;
        this.tipTxt.x = (this.width - this.tipTxt.width) / 2;
        this.tipTxt.y = 330;
        this.addChild(this.tipTxt);
    };
    return GameOverPanel;
}(egret.Sprite));
__reflect(GameOverPanel.prototype, "GameOverPanel");
//# sourceMappingURL=GameOverPanel.js.map