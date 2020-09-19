
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bin=new dustbin(630,495,10,100);
bin2=new dustbin(545,545,180,10);
bin3=new dustbin(460,495,10,100);


gr= new ground(400,790,800,10);

Paper=new paper(150,590);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bin.display();
bin2.display();
bin3.display();

gr.display();


  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyforce(paper.body,paper.body.position,{x:85,y:-85}); 
}

}



