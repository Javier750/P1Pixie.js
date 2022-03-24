
import { Container, Sprite } from "pixi.js";

export class Menu extends Container{

constructor(){
    super();

        const gotitle: Sprite = Sprite.from("GameOver");
	    gotitle.position.set(450, 85);
		gotitle.scale.set(0.46,0.46);
	
		const uifondo: Sprite = Sprite.from("Fondo");
		uifondo.scale.set(0.1,0.12);
		uifondo.position.set(450, 170);
	    
		const reset: Sprite = Sprite.from("Restart");
		reset.scale.set(0.1,0.12);
		reset.position.set(535, 225);

		const vmenu: Sprite = Sprite.from("Menu");
		vmenu.scale.set(0.1,0.12);
		vmenu.position.set(535, 325);

		const face: Sprite = Sprite.from("Facebook");
		face.scale.set(0.135,0.155);
		face.position.set(535, 425);

		const exit: Sprite = Sprite.from("Exit");
		exit.scale.set(0.1,0.12);
		exit.position.set(535, 525);


		this.addChild(gotitle);
	    this.addChild(uifondo);
		this.addChild(reset);
		this.addChild(vmenu);
		this.addChild(face);
		this.addChild(exit);
    }
};
