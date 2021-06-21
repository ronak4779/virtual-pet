var dog1Image , dog2Image , database, foodS, foodStock;

function preload()
{
   dog1Image = loadImage("images/dog1.png");
   dog2Image = loadImage("images/dog2.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  
  dog1 = createSprite(250,250,10,50);
  dog1.addImage(dog1Image);
  dog1.scale = 0.2;




  
 foodStock = database.ref('Food');
 foodStock.on("value",readStock);
  


}


function draw() {  
background(46, 139, 87);

  drawSprites();


}



