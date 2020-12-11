var b ,wall,t;
var s,w;

function setup() {
  createCanvas(400,400);
  s = random(223,321);
  w = random(30,52);
  t = random(22,83);
  b = createSprite(30, 200, 30, 8);
  b.velocityX = s;
  b.shapeColor = "white";

  wall = createSprite(350, 200, t, height/2);
  wall.shapeColor = "white";
  
}

function draw() {
  background(0);  
if(hascollided(b,wall)){

b.velocityX = 0;
var d = 0.5*w*s*s/(t*t*t);
if(d<10){
wall.shapeColour = color(255,0,0);
}
if(d>10){
wall.shapeColour = color(0,255,0);
}
}

drawSprites();
}
function hascollided(lb, lwall){
bRightEdge = lb.x + lb.width;
wallLeftEdge = wall.x;
if(bRightEdge>=wallLeftEdge){
return true;
}
return false;
}