const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var  pig
var wooooooooooood
var reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
var wood1
var wood2
var wood3
var wood4
var box3
var box4
var sadpig
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig=new pg(200,300);
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(600,height,1200,20)
    wooooooooooood = new log(200,100,200,PI/2);
    reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee = new angerissuebird(200,200)
    box3 = new Box(800,50,50,50);
    box4 = new Box(950,50,50,50);
    sadpig = new pg(900,50,40,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    wooooooooooood.display();
    reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.display();
    box3.display();
    box4.display();
    sadpig.display();
}