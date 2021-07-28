
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var right;
var left;
var ball;


function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,670,800,20);
	left = new Ground(500,600,20,120);
	right = new Ground(600,600,20,120);

	var ball_options={
		isStatic:false,
	    restitution:0.3,
        friction:0,
		density:1.9
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  background(51);
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
    
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

