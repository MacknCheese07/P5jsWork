


function setup() {
  createCanvas(1300, 600);
  ovalY = 20;
  ovalX = 20;
  ovalMove = 3;
}

function draw() {
  noStroke();
  background(76,201,240);
  // Bottom rays
  fill(84,55,201);
  rect (0,height*.4, width, height*0.4, 60, width,70);
  // First two Rays of light blue light
  fill(72,149,239);
  triangle (width*0.375,0, 0,0,mouseX,height*.5);
  triangle (width*0.6875,0, width,0,mouseX,height*.5);
  // Rays of blue light
  fill(67,97,238);
  triangle (0,0, 0,height*0.33, mouseX,height*.5);
  triangle (width,0, width,height*0.33, mouseX,height*.5);
  //Rays of dark blue light
  fill(63,55,201);
  triangle (0,height*0.33, 0,height*0.88,mouseX,height*.5);
  triangle (width,height*.33, width,height*0.88, mouseX,height*.5);
  // Draws Sun that moves with the x position
  fill(230, 188, 89);
  ellipse(mouseX, height/2, 350, 350);
  //Draws Mountains
  // First Mountain (darkest)
  fill(114,96,145);
  triangle (1200,200, 1400,450, 1000,450);
  triangle (100,200,-100,450,300,450);
  // Second Mountain (Medium)
  fill(72, 77, 142);
  triangle (1000,175, 1200,450, 860,450);
  triangle (300,175,100,450,440,450);
 // Third Mountain (Lightest)
  fill(82,106,168);
  triangle (830,260, 1100,460, 700,460);
  triangle  (410,260,200,460,600,460);
  //Back hill shape (darkest)
  fill(33,96,76)
  quad(0, 440, 0,600, width, 600, width, 430)
  // Back hill shape (medium)
  fill(33, 128, 96)
  quad(0, 500, 0,600, width, 600, width, 500)
  // Back hill shape (lightest)
  fill(33, 160, 116)
  quad(0, 530, 0, 600, width, 600, width, 570)

  //Clouds that loop across the screen
  fill(242, 237, 255);
  ellipse(ovalX, 245, 100, 50);
  ellipse(ovalX, 220, 60, 35);

  ellipse(ovalX, 175, 100, 50);
  ellipse(ovalX, 195, 60, 35);
  ellipse(ovalX, 150, 60, 35);

  ellipse(ovalX, 100, 150, 60);
  ellipse(ovalX, 60, 60, 35);

  //  Bounce animation
  ovalX = ovalX +1
  if (ovalX > width+30) {
    ovalX=-30
  }
}