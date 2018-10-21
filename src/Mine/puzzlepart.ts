class Puzpart extends egret.Sprite
{
    public img:egret.Bitmap = null;
    public border:egret.Sprite = null;//用于添加边框
    private imgNumber:number = 0;
    public Loc_x:number = 0;
    public Loc_y:number = 0;

    public constructor(){
        super();
        this.touchEnabled = true;
    }

    public createImg(name:string,level:number){
        this.img = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        this.img.texture = texture;
        this.img.width = 630/level;
        this.img.height = 630/level;
        this.img.x = 0;
        this.img.y = 0;
    }

    public show(){
        if(!this.border)
        {
            this.border = new egret.Sprite();
        }
        this.border.graphics.lineStyle(1,0xcccccc);
        this.border.graphics.drawRect(0,0,this.img.width,this.img.width);
        this.addChild(this.img);
        this.addChild(this.border);        
    }

    public setimgNumber(val:number){
        this.imgNumber = val;
    }

    public getimgNumber(){
        return this.imgNumber;
    }

    public static getWidth(){
        return this.getWidth;
    }
    
    
}