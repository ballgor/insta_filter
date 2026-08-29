var capture;
function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  capture.size(400,300);
}

function draw() {
  background(220);
  capture.loadPixels();
  var stepSize = 4;
  for (var row = 0; row<capture.width; row = row+stepSize){
    for (var col = 0; col<capture.height; col = col+stepSize){
      var index = ((col*capture.width) + row)* 4;
      var redVal = capture.pixels[index];
      var greenVal = capture.pixels[index+1];
      var blueVal = capture.pixels[index+2];
      fill(redVal,greenVal,blueVal);
      ellipse(row,col,stepSize);
      
    }
  }
  
}