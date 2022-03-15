import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);
	
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);
	
	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginVertical + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
})
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./gollum.png", name: "Gollum"})
Loader.shared.add({url: "./santahat.png", name: "Hat"})
//Loader.shared.add({url: "./clampy.png", name: "Clampy"});

Loader.shared.onComplete.add(()=>{
	const gollum: Sprite = Sprite.from("Gollum");
	//console.log("Hola World!", clampy.width, clampy.height);

	//gollum.position.set(200 , 150);
	//gollum.scale.set(1 , 1)
	
	const hat: Sprite = Sprite.from("Hat");

	//hat.scale.set(0.5, 0.5);
	//hat.position.set(230, 145);

	const gollumWithHat: Container = new Container();

	gollumWithHat.addChild(gollum);
	gollumWithHat.addChild(hat);

	gollumWithHat.scale.set(1);

	gollumWithHat.x = 200;
	gollumWithHat.y = 150;

	app.stage.addChild(gollumWithHat);

	//gollum.x = gollum.x + 200;
	//hat.x = hat.x + 200;

})

Loader.shared.load();