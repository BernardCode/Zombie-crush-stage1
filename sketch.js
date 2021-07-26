const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1, base2, base3;
var bridge;
var jointPoint,jointLink;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base1 = new Base(width/2, height - 40, width, 20);
  base2 = new Base(width-50,height/2+30,100,75);
  base3 = new Base(50,height/2+20,100,75);
  jointPoint = new Base(width-110,height/2+8);

  bridge = new Bridge(14,{x:50,y:height/2-8});
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    var stone = new Stone(x,y,30);
    stones.push(stone);
  }

}

function draw() {
  background(112,217,255);
  Engine.update(engine);

  for(var i=0;i<stones.length;i++) {
      stones[i].display();
  }

  base1.display();
  base2.display();
  base3.display();

  bridge.show();
}
