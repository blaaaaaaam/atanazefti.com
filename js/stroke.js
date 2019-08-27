function setup() {
    var myCanvas = createCanvas(window.innerWidth,window.innerHeight);
    myCanvas.parent('container');
    
    background(255);
    smooth();
    strokeCap(2);
}

function draw() {
   frameRate();
    
    var redColour = random(255);
    var greenColour = random(255);
    var blueColour = random(255);
    
    var value = (redColour + greenColour + blueColour)/3;
    var newValue = value + 2*random(100);
    var valueRatio = (newValue/value);
    var newRed = redColour * valueRatio;
    var newGreen = greenColour * valueRatio;
    var newBlue = blueColour * valueRatio;
    
    strokeWeight(abs((pmouseX-mouseX)));
    stroke(newRed, newGreen, newBlue);
    line(mouseX,mouseY, pmouseX,pmouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}