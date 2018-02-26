var x = [];
var y = [];
var ySpeed = []
var size = []

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
    for (var i = 0; i < 20; i++) {
    x[i] = 225;
    y[i] = 220;
    ySpeed[i] = random(1, 5);
    size[i] = random(1, 5);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
	rect(215, 220, 15, 20);
  
  // draw drip
  for (var i = 0; i < 50; i++) {
    ellipse(x[i], y[i], size[i]);
    y[i] = y[i] + ySpeed[i];

//if invisible for a full “height” amount…
    if (y[i] > height * 1.5) {
      // reset
      y[i] = 220;
    }
}
}
