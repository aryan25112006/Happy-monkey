var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x);

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
   movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){

      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";

    }

    }
    else

    {
      movingrect.shapeColor="green";
     fixedrect.shapeColor="green";
    }
    
    {
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";
    }
   
    {
      movingrect.shapeColor="green";
      fixedrect.shapeColor="green";
    }
  drawSprites();
}