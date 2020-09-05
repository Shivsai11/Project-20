var wall, division1, division2, car1, car2, car3, speed1, weight1, weight2, weight3, speed2, speed3, deformation1, deformation2, deformation3;

function setup() {
  createCanvas(1200,600);
  division1 = createSprite(600, 200, 1200, 20);
  division1.shapeColor = "lightpurple";

  division2 = createSprite(600, 400, 1200, 20);
  division2.shapeColor = "lightpurple";

  wall = createSprite(1190, 300, 20, 600);
  wall.shapeColor = "orange";

  car1 = createSprite(50, 100, 40, 20);
  car1.shapeColor = "blue";

  car2 = createSprite(50, 300, 40, 20);
  car2.shapeColor = "yellow";

  car3 = createSprite(50, 500, 40, 20);
  car3.shapeColor = "green"; 

  speed1 = random(4, 60);
  speed2 = random(4, 60);
  speed3 = random(4, 60);
  weight1 = random(400, 1500);
  weight2 = random(400, 1500);
  weight3 = random(400, 1500);


  deformation1 = 0.5 * weight1 * speed1 * speed1 / 2250;
  deformation2 = 0.5 * weight2 * speed2 * speed2 / 2250;
  deformation3 = 0.5 * weight3 * speed3 * speed3 / 2250;
  
}

function draw() {
  background(200, 45, 30); 
  car1.velocityX = speed1; 
  car2.velocityX = speed2;
  car3.velocityX = speed3;

  textFont("Georgia");
  textSize(30);
  fill("lightgreen");
  text("GCSO", 530, 50);

  isTouching();
  drawSprites();
}
function isTouching(){
  if (wall.x - car1.x < car1.width/2 + wall.width/2
    && car1.x - wall.x < car1.width/2 + wall.width/2) {
     car1.velocityX = 0;
     car1.shapeColor = "black";
     if(deformation1>=180){
       textFont("Impact");
       textSize(30);
       fill("yellow");
       text("C-", 560, 100);
     }
     if(deformation1<=180){
      textFont("Impact");
      textSize(30);
      fill("yellow");
      text("B+", 560, 100);
    }
    if(deformation1<=160){
      textFont("Impact");
      textSize(30);
      fill("yellow");
      text("A+", 560, 100);
    }
  }
  if (wall.x - car2.x < car2.width/2 + wall.width/2
    && car2.x - wall.x < car2.width/2 + wall.width/2) {
      car2.velocityX = 0;
      car2.shapeColor = "black";
      if(deformation2>=180){
        textFont("Impact");
        textSize(30);
        fill("yellow");
        text("C-", 560, 300);
      }
      if(deformation2<=180){
       textFont("Impact");
       textSize(30);
       fill("yellow");
       text("B+", 560, 300);
     }
     if(deformation2<=160){
       textFont("Impact");
       textSize(30);
       fill("yellow");
       text("A+", 560, 300);
     }
  }
  if (wall.x - car3.x < car3.width/2 + wall.width/2
    && car3.x - wall.x < car3.width/2 + wall.width/2) {
      car3.velocityX = 0;
      car3.shapeColor = "black";
      if(deformation3>=180){
        textFont("Impact");
        textSize(30);
        fill("yellow");
        text("C-", 560, 500);
      }
      if(deformation3<=180){
       textFont("Impact");
       textSize(30);
       fill("yellow");
       text("B+", 560, 500);
     }
     if(deformation3<=160){
       textFont("Impact");
       textSize(30);
       fill("yellow");
       text("A+", 560, 500);
     }
  } 
}