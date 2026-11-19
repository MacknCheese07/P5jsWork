
// Defines all the nesecary terms
let circleX;
let circleY;
let circleColor;
let mySound;

async function setup() {
  mySound = await loadSound('/assets/ClubHits.ogg');
  createCanvas(800, 500);
  // Slows the framerate so it's not a strobe light
  frameRate(5)
}

function draw() {
  // Randomizes da position
  circleX = random(0, width);
  circleY = random(0, height);
  // Randomizes da color
  circleColor = color(random(100, 256), random(100, 256), random(100, 256));
  
  background(71, 25, 105);
  //Makes random spot lights
  strokeWeight(0);
  fill(circleColor);
  circle(circleX, circleY, 700);
  //Makes a little guy
  strokeWeight(10);
  stroke(255);
  fill(255);
  ellipse(mouseX,mouseY-45,20,20);
  ellipse(mouseX, mouseY, 40, 40);
  line(mouseX-60,mouseY-60,mouseX+60,mouseY+60);
  line(mouseX+60,mouseY-60,mouseX-60,mouseY+60);
  //Makes background dancers
  ellipse(mouseX+150,mouseY-45,20,20);
  ellipse(mouseX+150, mouseY, 40, 60);

  ellipse(mouseX-150,mouseY-45,20,20);
  ellipse(mouseX-150, mouseY, 40, 60);
}

function mousePressed() {
  // playing a sound file on a user gesture is equivalent to `userStartAudio()`
  mySound.play();
}