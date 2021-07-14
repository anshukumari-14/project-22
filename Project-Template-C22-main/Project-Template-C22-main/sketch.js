const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rop3,rope4,rope5;
var con1,con2,con3,con4,con5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		restitution:0.8,
		//isStatic:true
	}

	roof = Bodies.rectangle(390,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Matter.Bodies.circle(290,350,20,ball_options);
    World.add(world,bob1);
   bob2 = Matter.Bodies.circle(340,350,20,ball_options);
    World.add(world,bob2);
	bob3 = Matter.Bodies.circle(390,350,20,ball_options);
    World.add(world,bob3);
	bob4 = Matter.Bodies.circle(440,350,20,ball_options);
    World.add(world,bob4);
    bob5 = Matter.Bodies.circle(490,350,20,ball_options);
    World.add(world,bob5);
    
    

    
    con1 =({
        bodyA:roof,
        pointA:{x:0,y:0},
        bodyB:bob1,
        pointB:{x:0,y:0},
        length:100,
        stifness:0.1
    });
    World.add(world,con1)
    con2 =({
        bodyA:roof,
        pointA:{x:0,y:0},
        bodyB:bob2,
        pointB:{x:0,y:0},
        length:100,
        stifness:0.1
    });
    World.add(world,con2)
    con3 =({
        bodyA:roof,
        pointA:{x:0,y:0},
        bodyB:bob3,
        pointB:{x:0,y:0},
        length:100,
        stifness:0.1
    });
    World.add(world,con3)
    con4 =({
        bodyA:roof,
        pointA:{x:0,y:0},
        bodyB:bob4,
        pointB:{x:0,y:0},
        length:100,
        stifness:0.1
    });
    World.add(world,con4)
    con5 =({
        bodyA:roof,
        pointA:{x:0,y:0},
        bodyB:bob5,
        pointB:{x:0,y:0},
        length:100,
        stifness:0.1
    });
    World.add(world,con5)

	//World.add(world,rope1)

	//Engine.run(engine);
	//rectMode(CENTER);
  //ellipseMode(RADIUS);
  
}

function draw() {
 // rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);
 
  //call display() to show ropes here

  //rope1.display();
  //create ellipse shape for multiple bobs here

  ellipse(bob1.position.x,bob1.position.y,20);
 ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);
  
  //rect(rope1.position.x,rope1.position.y,80,70);
  //rope1.display();
  push();
  strokeWeight(2);
  stroke(255);
line(290,110,bob1.position.x,bob1.position.y);
line(340,110,bob2.position.x,bob2.position.y);
line(390,110,bob3.position.x,bob3.position.y);
line(440,110,bob4.position.x,bob4.position.y);
line(490,110,bob5.position.x,bob5.position.y);
pop();
  
}
function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        body.applyForce(bob1,{x:0,y:0},{x:9,y:0});
    }
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
