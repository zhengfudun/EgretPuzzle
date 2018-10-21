class Gamebtn extends eui.Component{

	public btn_easy:eui.Button;
	public btn_normal:eui.Button;
	public btn_hard:eui.Button;

	public constructor() {
		super();
		this.skinName="gamebtn";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private onAddToStage(){
		this.btn_easy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onEasyClick,this);
		this.btn_normal.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNormalClick,this);
		this.btn_hard.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHardClick,this);
	}

	public onEasyClick(){this.dispatchEventWith("starteasy");}
	
	public onNormalClick(){this.dispatchEventWith("startnormal");}

	public onHardClick(){this.dispatchEventWith("starthard");}
}