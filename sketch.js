var balloon,background;
var backgroundImg,balloonImage;
// create database and position variable here

function preload(){
   backgroundImg =loadImage("images/1.png");
   balloonImage=loadAnimation("images/2.png","images/3.png","images/4.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  console.log(database);
  createCanvas(500,500);

  balloon=createSprite(100,400,20,20);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale=0.4;
}

// function to display UI
function draw() {
  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

  drawSprites();
  fill("black");
  stroke("red");
  strokeWeight(3);
  textSize(25);
  text("Use arrow keys to move Hot Air Balloon!",40,40);
}
