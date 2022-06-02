var ship, shipimg
var sea, seaimg
function preload(){
shipimg = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimg = loadImage ("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite (200,200,10,10);
  ship.addAnimation ("ship",shipimg)
  ship.scale = 0.3
  
}

function draw() {
  background("blue");
 drawSprites();
 
}