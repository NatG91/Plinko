const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var score = 0


function setup() {
  createCanvas(800,800);

  engine = Engine.create() 
  world = engine.world;

  ground = new Ground(400,780,800,20);

  for(var k =0; k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j =40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  
  }
  for(var j =15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  
  }

  for(var j =15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  
  }
  
}

function draw() {
  background(0);  
  drawSprites();

  text("Score:" +score,40,40)

  Engine.update(engine)

  for (var j =0; j<particles.length;j++){
  
    particles[j].display();
  }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for (var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    score=score+1
  }

  ground.display();
}
