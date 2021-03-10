
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
const Render = Matter.Render;
var building1
var building2
var building3
var building4
var building5
var world;
var ball;
var slingshot
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	building1= new Building(300,600,300,100)
	building2= new Building(300,500,300,100)
	building3= new Building(300,400,300,100)
	building4= new Building(300,300,300,100)
	building5= new Building(300,200,200,100)
	ground= new Ground(width/2,height,width,40)
	ball= new Ball(700,600,20,20)
	slingshot= new Slingshot(ball.body,{x:700, y:400})
	
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(205);
  ball.display()
 building1.display()
 building2.display()
 building3.display()
 building4.display()
 building5.display()
 
 
  ground.display()
  slingshot.show()
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

