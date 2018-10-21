class GameOverPanel extends egret.Sprite
{
    public tittle:egret.TextField;
    public stepTxt:egret.TextField;
    public tipTxt:egret.TextField;

	private ma=new Main();

    public constructor(){
        super();
        this.init();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.isClick,this);
        
    }

    public isClick(){
        console.log("gameover click");
        this.dispatchEventWith("restart");
        this.parent.removeChild(this);
    }

    public init(){
        
        //this.filters = [new egret.DropShadowFilter()];
        this.graphics.lineStyle(3,0xBBBBBB,0.8);
        this.graphics.beginFill(0xe5dbd9);
        this.graphics.drawRoundRect(0,0,this.ma.rootStagW-20,this.ma.rootStagW/3,60,60);
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
        this.stepTxt.text = "你一共走了 "+GameData.step+" 步";
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
    }
}