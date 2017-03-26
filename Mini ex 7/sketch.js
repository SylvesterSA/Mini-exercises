
//slider array
var sliders = [];  

var checkbox = []; 

var angle = 0; 

var img;
var img1; 

var imgx = 150; 
var imgy = 300; 

var imgx1 = 900; 
var imgy1 = 240; 

var buttonskate; 
var buttonsurf; 

var direction = 0;  
var direction1 = 0; 
var direction2 = 0; 

var billedvis = false; 
var billedvis1 = false; 

var start = false; 
var start1 = false; 

var pitted; 
var mask; 

function preload () {
    
    img = loadImage("assets/dog.jpg");
    img1 = loadImage("assets/dogskate.jpg"); 
    
    pitted = loadSound("assets/dudebreh.mp3"); 
    mask = loadSound("assets/mask.mp3"); 
}


function setup() {
     
    createCanvas(windowWidth, windowHeight); 
      
    //creates buttons 
    buttonsurf = createButton("Spawn SurfDog"); 
    buttonsurf.mousePressed(billed);
    buttonsurf.position(250, 50); 
    
    
    buttonskate = createButton("Spawn SkateDog");
    buttonskate.mousePressed(billed1); 
    buttonskate.position(900, 50); 
    
}

function draw () {
    
    
    background(255);
    
    
    //moves surfdog 
    
    if(billedvis) {

    image(img, imgx, imgy);
    
    imgy = imgy+direction; 
    }
    
    if(!start) {
    
    if (keyCode == UP_ARROW) {
        direction = -7; 
        start = true; 
    }
    }
        if(imgy<=200) {
            direction = 7; 
        }
     
        if(imgy>=301) {
            direction = -7;        
        }
   
    
    //moves skatedog
    
    if(billedvis1) {
        image(img1, imgx1, imgy1); 
    
        imgx1 = imgx1 + direction1; 
        imgy1 = imgy1 + direction2; 
    }
    
    if (!start1) {
        if (keyCode == LEFT_ARROW) {
            direction1 = -5; 
            direction2 = +5; 
            start1 = true; 
        }
    }
    if (imgx1 >=901) {
        direction1 = -5; 
        direction2 = 5; 
    }
    if(imgx1 <=730) {
        direction1 = 5; 
        direction2 = -5; 
    }
   
    
    
    //variable to make the sliders slightly askew from eachother 
    var offset =0; 
    
    //values are set to that of sin function. sliders.length refers to the number in the previous for loop  
     for(var i=0; i<sliders.length; i++){
    var x = map(sin(angle+offset), -1, 1, 0, 255); 
    sliders[i].value(x);  
    offset += 0.3; 
     }
    
    angle +=0.1;  
    
    
}


//surfdog 
function billed () {
   
    billedvis = true; 
    
    pitted.play(); 
    pitted.setVolume(1); 
    
    mask.play(); 
    mask.setVolume(0.4);

    
     //for loop to create sliders in array
    for(var i=0; i<40; i++){ 
    sliders[i] = createSlider(0, 555, 150); 
        //sliders[i].style("transform", "rotate(-90deg)"); 
        sliders[i].style("width", "200px"); 
        sliders[i].style('rotate', -90); 
        sliders[i].position(-140+i*18, 600);
        
    
    }
}
    
// skatedog
function billed1 () {

    billedvis1 = true; 
    
    // checkboxes array 
    
        for (var x=0; x < 13; x++) {
    for (var y=0; y<13; y++) {
        if (x+y >10) {
        checkbox[x] = createCheckbox("", false); 
        checkbox[x].position(900+x*25, (y*25)+405); 
    }

}
    
        
    } 
    
}