var mini
var loose



function preload(){

  mini=loadSound("COFFIN DANCE MEME SONGTony Igy - ASTRONOMIA (Remix).mp3")

  loose=loadSound("ON MY WAY x FADED [Mashup] - Alan Walker, Farruko, Sabrina Carpenter.mp3")
  
  
}

function setup() {
 
  createCanvas(windowWidth,windowHeight)
  
  
}

function draw() {
 background("white")
  coffin=createSprite(250,windowHeight-500,250,40);
  
  if(mousePressedOver(coffin)){
    mini.play();}
    
    MYWAY=createSprite(250,windowHeight-300,250,40);
  
  if(mousePressedOver(MYWAY)){
    loose.play();
    
    
  }
  
  
  drawSprites();
}