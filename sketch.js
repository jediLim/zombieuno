const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var leftwall,rightwall;
var rock;
var rocks = []
var bridge
var link
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground = new Base(0,650,windowWidth,20)
leftwall = new Base(width - 200,390,200,200);
rightwall = new Base(0,390,200,200);
for(i = 0;i<10;i++){
  var x = random(200,400);
  var y = random(1,25);
  rock = new Stone(x,y,100,100);
  rocks.push(rock)
  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
   jointPoint = new Base(width - 600, height / 2 + 10, 40, 20);
   Matter.Composite.add(bridge.body, jointPoint); jointLink = new Link(bridge,leftwall);
}
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  console.log(mouseX,mouseY);
  leftwall.show();
rightwall.show();
for(rock of rocks){
  rock.show();
  bridge.show();
}
}
