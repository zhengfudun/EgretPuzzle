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
var Puzpart = (function (_super) {
    __extends(Puzpart, _super);
    function Puzpart() {
        var _this = _super.call(this) || this;
        _this.img = null;
        _this.border = null; //用于添加边框
        _this.imgNumber = 0;
        _this.Loc_x = 0;
        _this.Loc_y = 0;
        _this.touchEnabled = true;
        return _this;
    }
    Puzpart.prototype.createImg = function (name, level) {
        this.img = new egret.Bitmap();
        var texture = RES.getRes(name);
        this.img.texture = texture;
        this.img.width = 630 / level;
        this.img.height = 630 / level;
        this.img.x = 0;
        this.img.y = 0;
    };
    Puzpart.prototype.show = function () {
        if (!this.border) {
            this.border = new egret.Sprite();
        }
        this.border.graphics.lineStyle(1, 0xcccccc);
        this.border.graphics.drawRect(0, 0, this.img.width, this.img.width);
        this.addChild(this.img);
        this.addChild(this.border);
    };
    Puzpart.prototype.setimgNumber = function (val) {
        this.imgNumber = val;
    };
    Puzpart.prototype.getimgNumber = function () {
        return this.imgNumber;
    };
    Puzpart.getWidth = function () {
        return this.getWidth;
    };
    return Puzpart;
}(egret.Sprite));
__reflect(Puzpart.prototype, "Puzpart");
//# sourceMappingURL=puzzlepart.js.map