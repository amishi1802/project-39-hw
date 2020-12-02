var dog,dogImage,background1,backgroundImage,dogboneImage,dogboneGroup,treeImage,treeGroup, dogB, trees;
 var PLAY=1;
var END=0;
var gameStates=PLAY;

function preload(){
dogImage=loadImage("dog.jpg");
  backgroundImage=loadImage("GROUND.jpg");
  dogboneImage=loadImage("dog bone (2).jpg");
  treeImage=loadImage("tree.jpg");
}
  
function setup() {
  createCanvas(600, 600);
  dog=createSprite(300,170);
  dog.addImage(dogImage);
  dog.scale=0.1;
  
  background1=createSprite(0,0);
  background1.addImage(backgroundImage);
  background1.velocityY=8;
  background1.scale=10;
  
  dogboneGroup=new Group();
  treeGroup=new Group();
}

function draw() {
  background(0);
  
  dog.depth=background1.depth;
  dog.depth=dog.depth+1;
   
   
  if(gameStates === PLAY){
  if(background1.y>600){
    background1.y=300;
  }
  if(keyDown("space")){
    dog.velocityY=5;
  }
  dog.velocityY=dog.velocityY-1;
  
  if(keyDown("right")){
     dog.x=dog.x+9;
     }
  
  if(keyDown("left")){
    dog.x=dog.x-9;
  }
  
    if(dogboneGroup.isTouching(dog)){
       dogboneGroup.destroyEach();
    }
  dogBone()
  Tree()
    
     if(treeGroup.isTouching(dog)||dog.y<0){
    dog.destroy();
    gameStates=END;
  }
  }
    if(gameStates === END){
    stroke("black");
    fill("red");
    textSize(40);
    text("GAME OVER", 200,300); 
    }
  
  drawSprites()
}

function dogBone(){
  if(World.frameCount % 50 === 0){
    dogB=createSprite(50,550);
    dogB.addImage(dogboneImage);
    dogB.x=Math.round(random(60,540));
    dogB.scale=0.2;
    dogB.velocityY=-7;
    dogB.lifetime=300;
    dogB.depth=dog.depth;
    dogB.depth=dogB.depth-1;
    dogboneGroup.add(dogB);
  }
}

function Tree(){
  if(World.frameCount % 60 === 0){
    trees=createSprite(50,550);
    trees.addImage(treeImage);
    trees.x=Math.round(random(60,540));
    trees.scale=0.2;
    trees.velocityY=-7;
    trees.lifetime=300;
    trees.depth=background1.depth;
    trees.depth=background1.depth+2;
    treeGroup.add(trees);
  }
}