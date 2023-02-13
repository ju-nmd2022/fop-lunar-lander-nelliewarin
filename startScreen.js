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

function draw() {
  background(25, 52, 65);
  noStroke();
  rocketship(250, 100, 0.8);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.05;
  }
}
