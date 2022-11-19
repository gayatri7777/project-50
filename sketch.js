var player,marksmanImg;
var bg,bgImg;
var bird,birdImg;


function preload(){
    
     bgImg = loadImage("./assets/bg.png");
     marksmanImg = loadImage("./assets/marksman_1.png");
     birdImg = loadImage("./assets/obsTop2.png");
}
function setup(){
    canvas = createCanvas(800,600);
   
  //  bg = createSprite(800,600,50,50);
  //  bg.addImage(bgImg);
  //  bg.scale = 1.1;

    player = createSprite(50,300,50,50);
    player.addImage(marksmanImg);
    player.scale = 0.2;
}
function draw(){
    background(bgImg)

   if (keyDown("up")){
    player.positionY = player.positionY-10;
   }
   if (keyDown("down")){
    player.positionY = player.positionY+10
   }

    drawSprites();
}
function spawnBirds(){
    if (frameCount % 60 === 0){
        bird = createSprite(380,200,40,10);
        bird.velocityX = -5;
        bird.addImage(birdImg);
    }
}