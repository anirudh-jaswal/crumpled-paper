const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject
var launcher1

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
    
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    launcher1=new Launcher(paperObject.body,{x:300,y:300})
	

	

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  launcher1.display(); 

  
 
}



function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher1.fly()
}



