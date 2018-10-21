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
var puzzle = (function (_super) {
    __extends(puzzle, _super);
    function puzzle() {
        var _this = _super.call(this) || this;
        _this.Block_v = 8; //拼图复原后空白块的位置
        _this.addGameStartPanel();
        return _this;
    }
    puzzle.prototype.addGameStartPanel = function () {
        this.gameStartPanel = new GameStartPanel();
        this.gameStartPanel.y = -65;
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.addEventListener("starteasy", this.gameStartOfEasy, this);
        this.gameStartPanel.addEventListener("startnormal", this.gameStartOfNormal, this);
        this.gameStartPanel.addEventListener("starthard", this.gameStartOfHard, this);
    };
    puzzle.prototype.gameStartOfEasy = function () {
        //console.log("easy");
        this.currentLevel = GameData.LEVEL_EASY;
        this.Block_v = this.currentLevel * this.currentLevel - 1;
        this.partsNum = this.Block_v + 1;
        this.partLen = GameData.LENGTH / GameData.LEVEL_EASY;
        this.init(GameData.one);
        this.gameStart();
    };
    puzzle.prototype.gameStartOfNormal = function () {
        //console.log("normal");
        this.currentLevel = GameData.LEVEL_NORMAL;
        this.Block_v = this.currentLevel * this.currentLevel - 1;
        this.partsNum = this.Block_v + 1;
        this.partLen = GameData.LENGTH / GameData.LEVEL_NORMAL;
        this.init(GameData.onenor);
        this.gameStart();
    };
    puzzle.prototype.gameStartOfHard = function () {
        //console.log("hard");
        this.currentLevel = GameData.LEVEL_HARD;
        this.Block_v = this.currentLevel * this.currentLevel - 1;
        this.partsNum = this.Block_v + 1;
        this.partLen = GameData.LENGTH / GameData.LEVEL_HARD;
        this.init(GameData.onehar);
        this.gameStart();
    };
    puzzle.prototype.gameStart = function () {
        this.upset();
        this.show();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPuzzleClick, this);
    };
    puzzle.prototype.upset = function () {
        this.currentOrder.sort(function () {
            return 0.5 - Math.random();
        });
        var r = 0;
        var cur_index = 0;
        for (var i = 0; i < this.partsNum; i++) {
            if (this.currentOrder[i] == this.Block_v) {
                cur_index = i;
            }
            for (var j = 0; j < i; j++) {
                if (this.currentOrder[j] > this.currentOrder[i]) {
                    r++;
                }
            }
        }
        var temp_j = cur_index % this.currentLevel;
        var temp_i = (cur_index - temp_j) / this.currentLevel;
        r += ((this.currentLevel - 1 - temp_i) + (this.currentLevel - 1 - temp_j));
        if (r % 2) {
            this.upset();
        }
    };
    puzzle.prototype.init = function (arrs) {
        this.parts = [];
        this.currentOrder = [];
        for (var i = 0; i < this.partsNum; i++) {
            this.currentOrder.push(i);
        }
        var k = 0;
        for (var i = 0; i < this.currentLevel; i++) {
            for (var j = 0; j < this.currentLevel; j++) {
                var temp = new Puzpart();
                temp.createImg(arrs[k], this.currentLevel);
                temp.setimgNumber(k++);
                temp.Loc_x = i;
                temp.Loc_y = j;
                this.parts.push(temp);
            }
        }
    };
    puzzle.prototype.show = function () {
        var n = this.currentLevel;
        var index = 0;
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                this.parts[this.currentOrder[index]].Loc_x = i;
                this.parts[this.currentOrder[index]].Loc_y = j;
                this.parts[this.currentOrder[index]].x = 5 + (this.partLen) * j;
                this.parts[this.currentOrder[index]].y = 5 + (this.partLen) * i;
                if (this.currentOrder[index] == this.Block_v) {
                    this.currentBlock_x = i;
                    this.currentBlock_y = j;
                }
                this.addChild(this.parts[this.currentOrder[index]]);
                this.parts[this.currentOrder[index++]].show();
            }
        }
    };
    //拼图块移动的方法，就是点击某个拼图块，判断它周边是否有空白块，有则交换
    puzzle.prototype.onPuzzleClick = function (evt) {
        //console.log(evt.target.Loc_x+","+evt.target.Loc_y);
        var tempX = evt.target.Loc_x;
        var tempY = evt.target.Loc_y;
        if (tempX == this.currentBlock_x && Math.abs(tempY - this.currentBlock_y) == 1) {
            var temp = tempY;
            tempY = this.currentBlock_y;
            this.currentBlock_y = temp;
            this.changeBlock(tempX, tempY);
            GameData.step++;
            this.show();
        }
        else if (tempY == this.currentBlock_y && Math.abs(tempX - this.currentBlock_x) == 1) {
            var temp = tempX;
            tempX = this.currentBlock_x;
            this.currentBlock_x = temp;
            this.changeBlock(tempX, tempY);
            GameData.step++;
            this.show();
        }
        this.judge();
    };
    puzzle.prototype.changeBlock = function (x, y) {
        var index1 = x * this.currentLevel + y;
        var index2 = this.currentBlock_x * this.currentLevel + this.currentBlock_y;
        var v = this.currentOrder[index1];
        this.currentOrder[index1] = this.currentOrder[index2];
        this.currentOrder[index2] = v;
    };
    //判断完成
    puzzle.prototype.judge = function () {
        var t = 0;
        var i = 0;
        for (i = 0; i < this.partsNum; i++, t++) {
            if (this.currentOrder[i] != t) {
                break;
            }
        }
        if (i == this.partsNum) {
            //console.log("Game Success !");
            this.addGameOverPanel();
        }
    };
    puzzle.prototype.addGameOverPanel = function () {
        this.gameOverPanel = new GameOverPanel();
        this.gameOverPanel.x = 15;
        this.gameOverPanel.y = (GameData.LENGTH - this.gameOverPanel.height) / 2;
        this.addChild(this.gameOverPanel);
        this.gameOverPanel.addEventListener("restart", this.restart, this);
    };
    puzzle.prototype.restart = function () {
        this.removeChildren();
        this.addGameStartPanel();
    };
    return puzzle;
}(egret.Sprite));
__reflect(puzzle.prototype, "puzzle");
//# sourceMappingURL=puzzle.js.map