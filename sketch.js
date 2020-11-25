const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sling,ball,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  block1 = new Block(300,275,30,40,"purple");
  block2 = new Block(330,275,30,40,"purple");
  block3 = new Block(360,275,30,40,"purple");
  block4 = new Block(390,275,30,40,"purple");
  block5 = new Block(420,275,30,40,"purple");
  block6 = new Block(450,275,30,40,"purple");
  block7 = new Block(480,275,30,40,"purple");

  block8 =  new Block(330,235,30,40,"darkblue");
  block9 =  new Block(360,235,30,40,"darkblue");
  block10 = new Block(390,235,30,40,"darkblue");
  block11 = new Block(420,235,30,40,"darkblue");
  block12 = new Block(450,235,30,40,"darkblue");

  block13 = new Block(360,195,30,40,"blue");
  block14 = new Block(390,195,30,40,"blue");
  block15 = new Block(420,195,30,40,"blue");

  block16 = new Block(390,155,30,40,"lightblue");

  blocks1 = new Block(640,175,30,40,"red");
  blocks2 = new Block(670,175,30,40,"red");
  blocks3 = new Block(700,175,30,40,"red");
  blocks4 = new Block(730,175,30,40,"red");
  blocks5 = new Block(760,175,30,40,"red");

  blocks6 = new Block(670,135,30,40,"orange");
  blocks7 = new Block(700,135,30,40,"orange");
  blocks8 = new Block(730,135,30,40,"orange");

  blocks9 = new Block(700,95,30,40,"yellow");


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background("black"); 


  textSize(20);
  fill("lime");
  text("Drag the Polygon to Shoot it",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("purple");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("darkblue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("blue");
  block13.display();
  block14.display();
  block15.display();
  fill("lightblue");
  block16.display();
  fill("red");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("orange");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("yellow")
  blocks9.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}