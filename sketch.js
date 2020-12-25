var playerA,playerB;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg,ribbon;
var gameState="start";

function preload()
{
	plA=loadImage("player1.png")
	plB=loadImage("player2.png")
	bg=loadImage("backgroundImage.jpg");
	ribbon=loadImage("ribbon1.png");
}

function setup() {
	createCanvas(900, 500);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	
	
	
//	groundSprite=createSprite(width/2-100, height-35, width+300,10);
//	groundSprite.shapeColor=color(255)
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 420, width+300, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	playerA= new Player(width-800, 250, 150,150);
	
	playerB= new Player(width-100, 250, 150,150);
	rope=new Rope(playerA.body,playerB.body);
	

}


function draw() {
  background(bg);
  Engine.update(engine);
	
  for(var i = 300;i<500;i=i+20){
		line(420,i,420,i+10);
  }
  if(gameState==="start")
  {
	  fill("Red");
	textSize(30);
	text("Press Space To Start",300,50);


  }

  if(keyDown("space") && gameState==="start"){
	gameState = "Play";

  }
  if(gameState === "Play"){

	console.log("arrow movement");
	if (keyDown("LEFT_ARROW")){
		playerA.body.position.x = playerA.body.position.x - 1;
	
	   } else if(keyDown("RIGHT_ARROW")){
		playerA.body.position.x = playerA.body.position.x + 1;
	   }
	
	   if (keyDown("A")){
		playerB.body.position.x = playerB.body.position.x - 1;
	   }
	   if (keyDown("D")){
		playerB.body.position.x = playerB.body.position.x + 1;
	   }
	  
	if(playerA.body.position.x > 420 || playerB.body.position.x < 420){
		if(playerA.body.position.x > 420){
			fill("blue");
			textSize(30);
			text("Player A is the Winner", 350,300);
		}
		if(playerB.body.position.x < 420){
			textSize(30);
			text("Player B is the Winner", 350,300);
		}
		
		text("Press R to restart the Game", 350,330);
		//gameState="end";
	}
  }
  if (keyDown("R") ){
	playerA.body.position.x =200;
	playerA.body.position.y =250;
	playerB.body.position.x =800;
	playerB.body.position.y =250;
	gameState="start";
}
 
  
rope.display();
playerA.display();
playerB.display();

image(plA,playerA.body.position.x,playerA.body.position.y);
image(plB,playerB.body.position.x,playerB.body.position.y);


  drawSprites();

 
}


  






































