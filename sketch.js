var ellipseX, ellipseY, xSpeed;

var ySpeed = 5;

var paddleWidth = 80;
var paddleHeight = 15;
var bottomGap = 40;


function setup() {
  createCanvas(400, 600);
  ellipseX = width/2;
  ellipseY = height/2;
  xSpeed = random(-5, 5);
}

function hitPaddle(){
    if(
    ellipseX > mouseX &&
    ellipseX < mouseX + paddleWidth &&
    ellipseY > height-bottomGap-paddleHeight &&
    ellipseY < height-bottomGap
    ) {
        ySpeed = ySpeed *-1
    }
    
}
function draw() {
  background(250);

  fill(0);
  ellipse(ellipseX, ellipseY, 30, 30);

  rect(width/2 - paddleWidth/2, height - bottomGap - paddleHeight, paddleWidth, paddleHeight);

  ellipseX += xSpeed;
  ellipseY += ySpeed;
}