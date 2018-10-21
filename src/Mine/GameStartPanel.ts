class GameStartPanel extends egret.Sprite{

    public startUI:Gamebtn;

    public constructor(){
        super();
        this.init();
    }

    public init(){
        this.startUI = new Gamebtn();
        this.startUI.addEventListener("starteasy",this.onClickEasy,this);
        this.startUI.addEventListener("startnormal",this.onClickNormal,this);
        this.startUI.addEventListener("starthard",this.onClickHard,this);
        
        this.addChild(this.startUI);   
    }

    public onClickEasy(){
        this.parent.removeChild(this);
        this.dispatchEventWith("starteasy");
    }

    public onClickNormal(){
        this.parent.removeChild(this);
        this.dispatchEventWith("startnormal");
    }

    public onClickHard(){
        this.parent.removeChild(this);
        this.dispatchEventWith("starthard");
    }  
}