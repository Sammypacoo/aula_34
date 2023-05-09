
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var animationheli=[];
var heliSpritedata,heliSpritesheet
var heli
var speed=0.05


function preload(){
  heliSpritedata = loadJSON("spritesheet.json");
  heliSpritesheet = loadImage("spritesheet.png");
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
  var heliFrames = heliSpritedata.frames;
  for (var i = 0; i < heliFrames.length; i++) {
    var pos = heliFrames[i].position;
    var img = heliSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animationheli.push(img);
  }

  heli = new  heli_class
    ( 50,
    50,
    170,
    170,
    animationheli)
 


}


function draw() 
{
  background(51)
  Engine.update(engine)
  heli.display_heli()
  heli.animate() 
  
}


class heli_class {
  constructor(x, y, width, height, animationheli) {
  
    this.animation = animationheli;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  animate() {
    this.speed += 0.05;
  }


  display_heli() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);
    console.log(this.speed % this.animation.length)
    console.log(index)

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, 0, this.width, this.height);
    pop();
  }
}