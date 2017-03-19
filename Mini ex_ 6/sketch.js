var modifier = 499;

var tileCount = 30;
var circleAlpha = 180;
var randomcircles = 0;
 
function setup(){
  createCanvas(windowWidth, windowHeight);
    background(255);
    translate(100, 100);
       
}

function draw() {
 
        
  randomSeed(randomcircles);
    
  stroke(0, circleAlpha);
  strokeWeight(mouseY/200);

  mouseX = mouseX*1.01;
  mouseY = mouseY*1.01;
    
    // creates the circles on the x and y axis 
    
  for (var gridY=0; gridY<tileCount; gridY++) {
    for (var gridX=0; gridX<tileCount; gridX++) {
        
    // positions the circles 
      var posX = width/tileCount * gridX;
      var posY = height/tileCount * gridY;
        
    // when moving mouseX, randomizes positions of circles     
     var shiftX = random(-mouseX, mouseX)/2;
      var shiftY = random(-mouseX, mouseX)/2;
        
        
    // changes colour halfway 
        if (mouseY > 500) {
            stroke(random(255), random(255), random(255), circleAlpha); 
            } else {
               stroke(0, circleAlpha); 
            }
        
        
    // the circles' size is determinded by the mouseY (moving your mouse down)
      ellipse(posX+shiftX, posY+shiftY, mouseY/25, mouseY/25);
    
   
    }
  }
  
}
// when the mouse is pressed, randomizes the positions of the circles 
function mousePressed() {
    
  randomcircles = random(100000);
}
translate(0, 0); 
// when spacebar is pressed, clears the canvas 
function keyPressed() {
    if (keyCode == 32)
        fill(255); 
    noStroke(); 
        rect(0, 0, width, height); 
    
}

