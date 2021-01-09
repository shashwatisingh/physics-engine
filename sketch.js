//namespacing or nicknaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declaring variables for the angry bird game
var engine, world, object , ball;

function setup() {
  createCanvas(800,400);

  //create angry bird engine from the main Engine class
  engine = Engine.create();

  //world of my angry  bird is same as engine's world
  world = engine.world;

  //changed the property to stop the ground from falling down
  Options = {
    isStatic:true
  }

  //created ground from the main Bodies class
  ground = Bodies.rectangle(400,350,800,10,Options);
  //Added ground to the main World
  World.add(world,ground);

  options = {
    restitution:0.8
  }
  
  //created ball from the main Bodies class
  ball = Bodies.circle(400,10,10,options);
  //Added ball to the main World
  World.add(world,ball);
  
  console.log(object);
  
}

function draw() {
  background("powderblue"); 
  //to keep udating the game engine
  Engine.update(engine); 

  fill("darkgreen");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10); 
 
}