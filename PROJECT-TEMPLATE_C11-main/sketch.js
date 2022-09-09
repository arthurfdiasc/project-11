var seaImg, sea
var shipImg1, ship
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-2.png", "ship-3.png", "ship-1.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,150,20,20);
  sea.addImage("sea", seaImg);
  sea.scale = 0.3
  ship = createSprite(50,200,20,20);
  ship.addAnimation("ship", shipImg1);
  ship.scale = 0.1
  
}

function draw() {
  background("blue");
    drawSprites();
    sea.velocityX = -6;
    if (sea.x < -220) {
      sea.x = sea.width / 6.6;
    }
 
}
