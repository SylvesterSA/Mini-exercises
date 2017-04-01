//based on coding challenge Phyllotaxis 

var n = 0; 
var c = 4; 

var degree = 137.5; 

var colourset = false; 

function setup () {
    createCanvas (windowWidth, windowHeight); 
    angleMode(DEGREES);
    colorMode(HSB); 
    background(0); 
    
}

function draw () {
  
    var a = n*degree; 
    var r = c * sqrt(n); 
    
    var x = r*cos(a) + width/2; 
    var y = r*sin(a) + height/2; 
    
    
    
 
    
    push();
     if (colourset == false) {
        fill(255, 0, 100); 
    fill((a % 256), 255, 255);
     }
    if (colourset) {
        fill(255, 0, 100);  
        //fill((n % 256), 255, 255); 
    }   
    
    noStroke(); 
    ellipse(x, y, 4, 4); 
     pop(); 
    n++; 
    
    
    if (keyCode == LEFT_ARROW) {
       colourset = true;  
       degree = degree -0.01; 
    }
    
    if (keyCode == RIGHT_ARROW) {
        colourset = false; 
        degree = degree + 1; 
    }
}