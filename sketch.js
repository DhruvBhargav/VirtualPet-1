//Create variables here
var dogImage 
var happyDogImage
var pet
var database
var foodS
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
 pet = createSprite(250,300);
 pet.addImage(dogImage)
 pet.scale = 0.3
}


function draw() {  
 //add styles here
background(46,139,87);
foodStock = database.ref('Food');
foodStock.on("value",readStock)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    pet.addImage(happyDogImage)
    
  }
  if(keyWentUp(UP_ARROW)){
    pet.addImage(dogImage)
    
  }
  drawSprites();
  fill ("red")
  textSize(20)
  text("NOTE:Press UP_ARROW to feed your pet",100,50)
  text("Food remaining: " + foodS,100,150)

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



