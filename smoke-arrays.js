var x = [];
var y = [];
var r = [];
var smoke= 100

function setup() {
  createCanvas(400, 400);
    for (var i = 0; i < smoke; i++) {
      
    x[i] = random(200, 210);
		y[i] = random(0, 300);
    r[i] = random(1,180);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  for (var i = 0; i < smoke; i++) {
  push();
  fill(y[i]);
  translate(x[i], y[i]);
  rotate(r[i]);
  rect(-10,-10,10,10);
  pop();
  
    
  // up 
  y[i] -= 2;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[i] += 0.1
  
  // if reach past the top a bunch
  if (y[i] < 0) {
    y[i] = height-100;
  }
}
}
