var fish;
var cat;
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
var mySound;

function preload() {
  mySound = loadSound('./doorbell-1.mp3');

  //fish = loadSound('./Fish Splashing-SoundBible.com-250179430 (1).mp3 ');
 // cat = loadSound('./Cat Meow-SoundBible.com-1977450526.mp3');
  //if (!fish.isLoaded()) {noLoop();};
}

function setup() {
    mySound.setVolume(1);
  mySound.play();
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
    fish.setVolume(0.1);
  	fish.play();
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
    fish.setVolume(0.1);
  	fish.play();
  } else if (key == 'D') {
    osc = oscD;
    fish.setVolume(0.1);
  	fish.play();
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
		triangle(135, 400, 180,280, 265, 400);
		triangle(245, 400, 320,280, 365, 400);
		fill(255, 204, 0);
    ellipse(250, 450,250, 250);
		fill(255, 133, 15);
    ellipse(250,470,50,50);
		fill(255, 204, 0);
		ellipse(mouseX,mouseY+740,85,1000);
		ellipse(mouseX+350,mouseY+700,80,1000);
		fill(100, 104, 0);
    ellipse(200,420,20,20);
	  ellipse(300,420,20,20);
		fill(255, 100, 20);
    rect(100, 465, 80, 5);
    rect(100, 485, 80, 5);
		rect(320, 465, 80, 5);
    rect(320, 485, 80, 5); 
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
