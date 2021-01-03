
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = matter.Renden;

var roof,rope3,ball1;
var rope1,rope4,ball2,ball5; 
var rope2,rope5,ball3,ball4;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new roof(350,100,300,30);
	World .add (world,roof);

	ball1= new Ball(250,300);
	ball2= new Ball(300,300);
	ball3= new Ball(350,300);
	ball4= new Ball(400,300);
	ball5= new Ball(450,300);
	 
	rope1= new rope1(ball1.body,roof.body,-100,0); 
      World .add(world,rope1);
	rope2= new rope2( ball2 .body,roof .body,-50,0);
	  World.add(world,rope2);
	rope3=new rope3(ball3.body,roof.body,0,0)
	 World.add(world,rope3);
	 rope4=new rope4(ball4.body,roof.body,50,0 )
	 World.add(world,rope4); 
	rope5= new rope5(ball5.body,roof.body,100,0);
     World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);

  roof.display()
 

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball4.display();
ball5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

}


function keypressed(){
	if (keycode===32){
		matter.Body.applyforce(ball1.body,ball1.body.position,{x:-730,y:0});
	}

}
