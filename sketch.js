var emojis;










var capture;
function setup() {
  createCanvas(500, 400);
  emojis = createGraphics(400,300);
  capture = createCapture(VIDEO)
  capture.size(400,300)
  noStroke();
  capture.hide();
}

function draw() {
  emojis.textSize(50);
  emojis.text("😛",100,50)
  background(220,44,34);
  capture.loadPixels();
  var stepSize = 3;

  for (var x = 0; x < capture.width; x += stepSize){
    for (var y = 0; y < capture.height; y += stepSize){
      var index = ((y*capture.width)+x)*4
      var redval = capture.pixels[index];
      var greenval = capture.pixels[index +1];
      var blueval = capture.pixels[index +2];
      fill(redval +67,greenval,blueval+39); 
      rect(x,y,stepSize);
    
    }
    
  }
  image(emojis,0,0);


}
