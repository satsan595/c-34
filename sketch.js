var dog, happyDog, database, foodS, foodStock
var database

function preload()
{
  //load images here
  happyDog=loadImage("happyDog.png");
  sadDog=loadImage("Dog.png");

}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200,20,20)
  
  dog.addImage(sadDog)
dog.scale= 0.6
  
  database=firebase.database();
  foodStock=database.ref('food');
foodStock.on("value", readStock);  
}


function draw() {  
  background(46,139,87);
  if(keyDown(UP_ARROW)){
    dog.addImage(happyDog);
    writeStock(foodS);
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(sadDog)
  }
  drawSprites();
 fill(0)
  textSize("18")
text("Food Stock: " + foodS, 20,30)
  

}
function readStock (data){
  foodS = data.val();
}

function writeStock(x){
if(x<= 0){
  x=0
}
else 
{
  x=x-1
}
  database.ref('/').update({
    food:x
  })
}



