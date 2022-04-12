
import { Container, Sprite } from "pixi.js";

export class Menu extends Container{

constructor(){
    super();
		const dialog = new Container();
		dialog.x = 100;
		dialog.y = 50;


        const gotitle: Sprite = Sprite.from("GameOver");
	    gotitle.position.set(450, 85);
		gotitle.scale.set(0.46,0.46);
	
		const background: Sprite = Sprite.from("Fondo");
		background.scale.set(0.1,0.12);
		background.position.set(450, 170);
	    
		const botonreset: Sprite = Sprite.from("Restart");
		botonreset.scale.set(0.1,0.12);
		botonreset.position.set(535, 225);
		botonreset.on("mousedown", this.onMouseDown, this)
		botonreset.on("mouseup", this.onMouseUp, this)
		botonreset.interactive = true;
		botonreset.on("touchstart", this.onTouchStart, this);
		botonreset.on("touchend", this.onTouchEnd, this);
		botonreset.interactive = true;
		dialog.addChild(botonreset);


		const botonvmenu: Sprite = Sprite.from("Menu");
		botonvmenu.scale.set(0.1,0.12);
		botonvmenu.position.set(535, 325);

		const botonface: Sprite = Sprite.from("Facebook");
		botonface.scale.set(0.135,0.155);
		botonface.position.set(535, 425);

		const botonexit: Sprite = Sprite.from("Exit");
		botonexit.scale.set(0.1,0.12);
		botonexit.position.set(535, 525);




		this.addChild(gotitle);
	    this.addChild(background);
		this.addChild(botonreset);
		this.addChild(botonvmenu);
		this.addChild(botonface);
		this.addChild(botonexit);
    }

	private onMouseDown():void{
		console.log("mouse down", this)
	}
	private onMouseUp():void{
		console.log("mouse up", this)
	}
	private onTouchStart():void{
		console.log("touch down", this)
	}
	private onTouchEnd():void{
		console.log("touch up", this)
	}



};
