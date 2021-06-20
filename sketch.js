var iss;
var spacecraft;
var hasDocked = false;



function preload() {
  bg = loadImage("spacebg.jpg");

  issimage = loadImage("iss.png");

  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");

 }

function setup() {
  createCanvas(displayWidth,displayHeight);

  iss = createSprite(500, 500, 50, 50);
  iss.addImage(issimage);
  iss.scale = 1.5;

  //600
  spacecraft = createSprite(600, 500, 50, 50);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.3

}

function draw() {
  background(bg);  

  

if (!hasDocked) {
  
  //wait random x position or just this weird wiggle thing?
  spacecraft.x = spacecraft.x + random(-1,1);

  if (keyDown("LEFT")) {
    spacecraft.x = spacecraft.x - 10;;
    spacecraft.addImage(spacecraft3);
  }

  if (keyDown("RIGHT")) {
    spacecraft.x = spacecraft.x + 10;
    spacecraft.addImage(spacecraft4);
  }

  if (keyDown("UP")) {
    spacecraft.y = spacecraft.y - 10
    
  }

  if (keyDown("DOWN")) {
    spacecraft.y = spacecraft.y + 10
    spacecraft.addImage(spacecraft2);
  }

  if (spacecraft.y <= (iss.y+-125) && spacecraft.x <= (iss.x-30)) {
    hasDocked = true;
    console.log("DOCKING SUCCESSFUL!")
  }

}

  drawSprites();
}