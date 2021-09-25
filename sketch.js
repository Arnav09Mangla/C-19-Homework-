var towerImg, tower;
var BasketballbucketImg, Basketballbucket, BasketballbucketGroup;
var climberImg, climber, climbersGroup;
var ball, ballImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "PLAY"



function preload(){
  towerImg = loadImage("tower.png");
  BasketballbucketImg= loadImage("Basketballbucket.png");
  climberImg = loadImage("climber.png");
  ballImg = loadImage("Ball.png");
 

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  BasketballbucketGroup=new Group();
climbersGroup= new Group();
invisibleBlockGroup=new Group()
ball=createSprite(200,200)
ball.scale=0.1;
ball.addImage("ball",ballImg)

}

function draw() {
  background(200);
  if (gameState==="PLAY") {
  
  if(tower.y > 400){
      tower.y = 300
    }
    spawnBasketballbucket()
    if (keyDown("left_arrow")){
ball.x= ball.x=-3
}

if (keyDown("right_arrow")){
  ball.x= ball.x=+3
  }
  

  if (keyDown("space")){
    ball.velocityY= -10

    }
  ball.velocityY=ball.velocityY+0.8
   

  if (climbersGroup.isTouching(ball)){
ball.velocityY=0;

  }

  if(ball.y>600){
ball.destroy()
gameState="END";

  }
}
if (gameState==="END"){

  textSize(30);
  fill("yellow");
  text("Game Over, sorry the ball needs to be placed properly",230,250)

}
drawSprites();
}


function spawnBasketballbucket(){
  console.log("hi");
if (frameCount%240===0){
var Basketballbucket = createSprite(200,-50)
Basketballbucket.addImage(BasketballbucketImg);
Basketballbucket.x=random(120,400);
Basketballbucket.velocityY=1;
Basketballbucket.lifetime=800;
BasketballbucketGroup.add(Basketballbucket);


var climber = createSprite(200,10)
climber.addImage(climberImg)
climber.x=Basketballbucket.x
climber.velocityY=Basketballbucket.velocityY
climber.lifetime=800;
climbersGroup.add(climber);
ball.depth=Basketballbucket.depth
ball.depth+1

var invisibleBlock = createSprite(200,15)
invisibleBlock.width=climber.width
invisibleBlock.height=2;
invisibleBlock.x=Basketballbucket.x
invisibleBlock.velocityY=1;
invisibleBlock.lifetime=800;
invisibleBlockGroup.add(invisibleBlock)

}


}
