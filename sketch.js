var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;
  fixedRect.velocityY=5;

  movingRect = createSprite(400, 600, 80, 30);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;
  movingRect.velocityY=-5;

  object1 = createSprite(200,100,50,50);
  object1.shapeColor = "purple";
  object1.velocityX = 2;

  object2 = createSprite(900,100,50,50);
  object2.shapeColor = "pink";
  object2.velocityX = -2;
}

function draw() {
  background(0); 

  bounceOff(movingRect,fixedRect);
 bounceOff(object1,object2);
  drawSprites();
}

function bounceOff(ob1,ob2){
  if(ob1 .x-ob2 .x < ob2 .width/2+ob1 .width/2 &&
    ob2 .x-ob1 .x < ob2 .width/2+ob1 .width/2 ){
      ob2 .velocityX=ob2 .velocityX*(-1);
      ob1 .velocityX=ob1 .velocityX*(-1);
    }

    if(ob1 .y-ob2 .y<ob2 .height/2+ob1 .height/2 &&
    ob2 .y-ob1 .y<ob2 .height/2+ob1 .height/2){
      ob2 .velocityY=ob2 .velocityY*(-1);
      ob1 .velocityY=ob1 .velocityY*(-1);
     

  }
}