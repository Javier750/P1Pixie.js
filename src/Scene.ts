import { AnimatedSprite, Container, Texture } from "pixi.js";
import { GollumHat } from "./GollumHat";

export class Scene extends Container{

    constructor()
    {
        super();

        const gollumWithHat: GollumHat = new GollumHat();
        gollumWithHat.scale.set(.9);
        gollumWithHat.x = 600;
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
        zombieAnimated.y = 120;
        zombieAnimated.play();
        zombieAnimated.animationSpeed = 0.25;
        this.addChild(zombieAnimated);

    };

};

