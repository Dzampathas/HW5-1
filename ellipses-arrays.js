var x = [];
var y = [];
var d = [];
var color = [];


function setup() {
  createCanvas(600, 600);
  colorMode(HSB)
  for (var i = 0; i < 50; i++){   
    x[i] = random(0, 600);
    y[i] = random(0, 600);
    d[i] = random(0, 600);
    color[i] = color(200, random(255), 200);
  }
}

function draw() {
  background(0);
  noStroke();
  
  // draw ellipses
  for (var i = 0; i < 50; i++) {
    fill(color[i]);
    ellipse(x[i], y[i], d[i]);

		  if (random() < 1) {
      d[i] = random(0, 200);
    }
  }
}
