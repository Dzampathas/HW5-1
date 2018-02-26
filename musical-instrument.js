var freqA = 100;
var freqS = 200;
var freqD = 300;
var freqF = 400;
var freqG = 500;


var oscA, oscS, oscD, oscF, oscG;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;
var playingG = false;

function setup() {
  createCanvas (500, 500);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
}

function draw() {
  if (playingA, playingS, playingD, playingF, playingG) {
    background(0, 255, 255);
  } else {
    background(255, 0, 255);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'G') {
    osc = oscG;
    playingG = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
  }
}

function draw() {
  background(255);
  fill(100,0,50);
  if (playingA) {
		fill(0,150,250);
    noStroke();
    ellipse(300, 150, 80, 30);
		triangle(300, 150, 350, 130, 350, 170);
		fill(255);
		ellipse(280, 150, 5, 5);
    
  }
  if (playingS) {
     fill(0,100,200);
     noStroke();
     ellipse(200, 50, 80, 30);
		triangle(200, 50, 250, 30, 250, 70);
		fill(255);
		ellipse(180, 50, 5, 5);
  }
  if (playingD) {
    fill(255,50,100);
    noStroke();
    ellipse(400, 350, 80, 30);
		triangle(400, 350, 450, 330, 450, 370);
		fill(255);
		ellipse(380, 350, 5, 5);
    
  }
  if (playingF) {
		fill(150,100,50);
    noStroke();
    ellipse(100, 250, 80, 30);
		triangle(100, 250, 150, 230, 150, 270);
		fill(255);
		ellipse(80, 250, 5, 5);
	}
    
  if (playingG) {
    noStroke();
		fill(255, 204, 0);
		triangle(135, 200, 180,80, 265, 200);
		triangle(245, 200, 320,80, 365, 200);
		fill(255, 204, 0);
    ellipse(250, 250,250, 250);
		fill(180, 233, 15);
    ellipse(250,270,50,50);
		fill(167, 189, 20);
    rect(100, 265, 80, 5);
    rect(100, 295, 80, 5);
		rect(320, 265, 80, 5);
    rect(320, 295, 80, 5);
		fill(100, 104, 0);
    ellipse(200,220,20,20);
	  ellipse(300,220,20,20);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}
