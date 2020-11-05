var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plat1,plat2,plat3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
  

	packageSprite=createSprite(width/2, 100, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	plat1Sprite=createSprite(400,630,120,20);
	plat1Sprite.shapeColor="red";

	plat2Sprite=createSprite(340,600,15,80);
	plat2Sprite.shapeColor="red";

	plat3Sprite=createSprite(455,600,15,80);
	plat3Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 plat1 = Bodies.rectangle(400,630,120,20, {isStatic:true} );
	 World.add(world, plat1);
 
	 plat2 = Bodies.rectangle(340,600,15,80, {isStatic:true} );
	 World.add(world, plat2);
	 
	 plat3 = Bodies.rectangle(455,600,15,80, {isStatic:true} );
	 World.add(world, plat3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
Matter.Body.setStatic(packageBody,false);

	
	}
     
  }



