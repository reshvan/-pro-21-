var rocket,rocketImg
var star,starImg,starGroup
var meteor,meteorImg,meteorGroup
var spaceImg
var stars=0

//Game States
var PLAY=1;
var END=0;
var gameState=1;



function preload(){
    rocketImg=loadImage("rocket.png")
    starImg=loadImage("star.jpg")
    meteorImg=loadImage("meteor.jpg")
    spaceImg=loadImage("background.jpg")
  
}

function setup() {
    createCanvas(400,600)
   createCanvas(windowWidth,windowHeight)
    rocket=createSprite(20,580,400,20);
    rocket.addImage(rocketImg);
    rocket.scale=0.2222
    
    space=createSprite(200,200)
    space.addImage(spaceImg)
       
     starGroup=new Group()
     meteorGroup=new Group()
     
    }
    
    function draw() {
        if(gameState===PLAY){
            background(0);
            rocket.x = World.mouseX;
            
            edges= createEdgeSprites();
            rocket.collide(edges);
            
         //code to reset background
            if(space.x<0 ){
             space.x = space.width/2;
            }
     
              createstar();
              createmeteor();
           
              if (starGroup.isTouching(rocket)) {
                starGroup.destroyEach();
               stars=stars+1
              }
              else if (meteorGroup.isTouching(rocket)) {
               gameState=END
              
              }
  
               if (gameState===END){
                rocket.x=width/2;
               rocket.y=height/2;
                rocket.scale=0.8;
                 
                starGroup.destroyEach();
                meteorGroup.destroyEach();
                 
               starGroup.setVelocityYEach(0);
                meteorGroup.setVelocityYEach(0);
               
               }

          drawSprites();
          textSize(20);
          fill(255);
          text("stars: "+ stars,35,30);
          }
    }
        
        
        function createstar() {
          if (World.frameCount % 200 == 0) {
           
           
    var star = createSprite(Math.round(random(50,width-50),40, 10, 10));
           
    star.addImage(starImg);
          star.scale=0.22;
          star.velocityY = 5;
          star.lifetime = 200;
          starGroup.add(star);
          }
        }
        
        function createmeteor() {
          if (World.frameCount % 320 == 0) {

    var meteor = createSprite(Math.round(random(50, width-50),40, 10, 10));
        meteor.addImage(meteorImg);
         meteor.scale=0.23;
         meteor.velocityY = 5;
        meteor.lifetime = 200;
        meteorGroup.add(meteor);
          
        }

      }
        
       
    
       
        
    