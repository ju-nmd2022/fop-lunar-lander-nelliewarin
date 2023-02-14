// landing goal
function landingGoal(x, y, s) {
  push();
  scale(s);
  translate(x, y);
  fill(254, 140, 49);
  triangle(245, 510, 210, 530, 245, 530);
  triangle(435, 510, 435, 530, 465, 530);
  fill(191, 105, 37);
  ellipse(340, 522, 210, 60);
  fill(255, 212, 178);
  ellipse(340, 520, 200, 50);
  pop();
}

// rocket ship
function rocketship(x, y, s) {
  push();
  noStroke();
  translate(x, y);
  scale(s);
  // Wings

  push();
  translate(250, 365);
  rotate(2.1);
  fill(159, 0, 0);
  arc(-1, 10, 310, 180, 0, PI);
  fill(255, 0, 0);
  arc(0, 0, 310, 180, 0, PI);
  pop();

  push();
  translate(250, 365);
  rotate(-2.1);
  fill(159, 0, 0);
  arc(1, 10, 310, 180, 0, PI);
  fill(255, 0, 0);
  arc(0, 0, 310, 180, 0, PI);
  pop();

  //Bottom of rocket
  fill(255, 0, 0);
  triangle(201, 465, 250, 350, 299, 465);
  fill(159, 0, 0);
  triangle(205, 455, 250, 350, 295, 455);

  // Body of rocketship
  push();
  fill(245, 245, 245);
  translate(250, 450);

  beginShape();
  vertex(-50, 0);
  bezierVertex(-100, -100, -100, -220, -50, -300);
  line(-50, -300, 50, -300);
  vertex(50, -300);
  bezierVertex(100, -220, 100, -100, 50, 0);
  line(50, 0, -50, 0);
  endShape();

  pop();
  beginShape();
  fill(255, 0, 0);
  vertex(200, 150);
  bezierVertex(245, 80, 250, 80, 300, 150);
  endShape();

  push();
  translate(250, 450);
  beginShape();
  stroke(200, 200, 200, 100);
  strokeWeight(15);
  noFill();
  vertex(0, -345);
  bezierVertex(100, -270, 100, -100, 45, -8);
  endShape();
  pop();

  // Window
  fill(210, 210, 210);
  ellipse(253, 255, 90);
  fill(255, 0, 0);
  ellipse(250, 250, 90);
  fill(183, 233, 245);
  ellipse(250, 250, 70);
  fill(255);
  ellipse(247, 247, 50);
  fill(183, 233, 245);
  ellipse(250, 250, 52);

  //Middle wing
  fill(159, 0, 0);
  ellipse(253, 430, 26, 170);
  fill(255, 0, 0);
  ellipse(250, 430, 20, 170);
  pop();
}

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 500; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function startButton(x, y, w, h) {
  fill(0, 0, 0);
  rect(x, y, w, h);

  fill(255, 255, 255);
  textSize(25);
  text("Start Game", 135, 206);
}

function playAgainButton(x, y, w, h) {
  fill(0, 0, 0);
  rect(x, y, w, h);

  fill(255, 255, 255);
  textSize(25);
  text("Play Again", 135, 206);
}

//-------------------------------------------------------//
//-------------------------------------------------------//
//-------------------------------------------------------//

function startScreen() {
  background(25, 52, 65);
  noStroke();

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.05;
  }
  startButton(100, 170, 200, 60);
}

function gameScreen() {
  background(25, 52, 65);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.05;
  }

  // ground
  fill(254, 140, 49);
  ellipse(350, 620, 1100, 190);
  fill(254, 154, 75);
  ellipse(350, 635, 1100, 190);
  fill(254, 169, 101);
  ellipse(350, 650, 1100, 190);
  fill(254, 183, 126);
  ellipse(350, 665, 1100, 190);
  fill(255, 198, 152);
  ellipse(350, 680, 1100, 190);
  fill(255, 212, 178);
  ellipse(350, 695, 1100, 190);
  fill(255, 226, 203);
  ellipse(350, 710, 1100, 190);
  fill(255, 230, 210);
  ellipse(350, 725, 1100, 190);
  fill(255, 233, 216);
  ellipse(350, 740, 1100, 190);
  fill(255, 237, 223);
  ellipse(350, 755, 1100, 190);
  fill(255, 240, 229);
  ellipse(350, 770, 1100, 190);

  //flag
  stroke(0);
  strokeWeight(5);
  line(50, 500, 50, 620);

  strokeWeight(1);
  fill(126, 183, 126);
  triangle(50, 500, 110, 515, 50, 550);
  noStroke();

  x = x + speed;

  if (isGameActive) {
    y = y + velocity;
    velocity = velocity + acceleration;

    if (keyIsDown(39)) {
      speed = 3;
    } else if (keyIsDown(37)) {
      speed = -3;
    } else {
      speed = 0;

      if (keyIsDown(38)) {
        velocity = velocity - 0.5;
      }
    }
  }

  if (y >= 390 && x > 230 && x < 380 && velocity <= 5) {
    isGameActive = false;
    speed = 0;
    timer = timer + 1;
    if (timer >= 30) {
      timer = 0;
      state = "win";
    }
  } else if (y > 390) {
    isGameActive = false;

    speed = 0;
    timer = timer + 1;
  }
  if (timer >= 30) {
    timer = 0;
    state = "loose";
  }
}

function looseResultScreen() {
  background(255, 0, 0);
  playAgainButton(100, 170, 200, 60);
}

function winResultScreen() {
  background(0, 255, 0);
  playAgainButton(100, 170, 200, 60);
}

let isGameActive = true;
let x = 50;
let y = -160;
let speed = 0;
let velocity = 1;
let acceleration = 0.2;

let startButtonIsClicked = false;
let playAgainButtonIsClicked = false;
let state = "start";

let timer = 0;

function mousePressed() {
  if (mouseX > 100 && mouseX < 100 + 200 && mouseY > 170 && mouseY < 170 + 60) {
    startButtonIsClicked = true;
    state = "game";
  }
}

function mousePressed() {
  if (mouseX > 100 && mouseX < 100 + 200 && mouseY > 170 && mouseY < 170 + 60) {
    startButtonIsClicked = true;
    isGameActive = true;
    x = 50;
    y = -160;
    speed = 0;
    velocity = 1;
    acceleration = 0.2;
    state = "game";
  }
}

//-------------------------------------------------------//
//-------------------------------------------------------//
//-------------------------------------------------------//

function draw() {
  if (state === "start") {
    startScreen();
    rocketship(250, 100, 0.8);
  } else if (state === "game") {
    gameScreen();
    landingGoal(250, 350, 0.6);
    rocketship(x, y, 0.3);
  } else if (state === "loose") {
    looseResultScreen();
  } else if (state === "win") {
    winResultScreen();
  }
}
