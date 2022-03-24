import { AnimatedSprite, Container, Text, Texture } from "pixi.js"
import { GollumHat } from "./GollumHat"
import { Menu } from "./Menu"

export class Scene extends Container{

    constructor()
    {
        super();

        const gollumWithHat: GollumHat = new GollumHat();
        gollumWithHat.scale.set(.9);
        gollumWithHat.x = 1000;
        gollumWithHat.y = 150;
        this.addChild(gollumWithHat);

        const zombieAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("ZRun1"),
                Texture.from("ZRun2"),
                Texture.from("ZRun3"),
                Texture.from("ZRun4"),
                Texture.from("ZRun5"),
                Texture.from("ZRun6"),
                Texture.from("ZRun7"),
                Texture.from("ZRun8"),
                Texture.from("ZRun9"),
                Texture.from("ZRun10")
            ],
            true

        );
        zombieAnimated.x = 100;
        zombieAnimated.y = 110;
        zombieAnimated.play();
        zombieAnimated.animationSpeed = 0.20;
        this.addChild(zombieAnimated);

        //Menu
        const menu1: Menu = new Menu();
        menu1.scale.set(1);
        this.addChild(menu1);
  
        //Text
        const myText: Text = new Text("Menu de Prueba", {fontSize: 52, fill: 0x37EEEB});
        myText.x = 450;
        this.addChild(myText);

        // Nine-Slice Plane

    };

};

