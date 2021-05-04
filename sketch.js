var bgImg;
var cat;
var mouse;
var catImg1,catImg2, catImg3;
var mouseImg1,mouseImg2,mouseImg3;



function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png")
    catImg1 = loadImage("images/cat1.png")
    mouseImg1 = loadImage("images/mouse1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg3 = loadImage("images/cat4.png");
    mouseImg3 = loadImage("images/mouse4.png")
}


function setup(){
    createCanvas(1000,800);

   
    //create tom and jerry sprites here
    cat = createSprite(800,650,50,50);
    cat.addImage("catimage",catImg1);
    cat.scale = 0.2;


    mouse = createSprite(250,650,50,50);
    mouse.addImage("mouseimage",mouseImg1);
    mouse.scale = 0.2;
    
}

   


function draw() {

    background(bgImg);
    fill("black")
    text(mouseX+","+mouseY,mouseX,mouseY)
    
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    
        cat.velocityX = 0
       cat.changeImage("catimage3",catImg3);
       cat.changeImage("catimage3");
       mouse.changeImage("mouseimage3",mouseImg3);
       mouse.changeImage("mouseimage3");
       cat.x = 800;
    }

    


       

    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

 if(keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseteasing",mouseImg2);
   mouse.changeAnimation("mouseteasing");
   mouse.frameDelay = 25;

 }

 if(keyCode === RIGHT_ARROW){
    cat.addAnimation("catmoving",catImg2);
    cat.changeAnimation("catmoving");
    cat.frameDelay = 25;
    cat.velocityX = -3;
  }
}
