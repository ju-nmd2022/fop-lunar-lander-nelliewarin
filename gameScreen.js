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

function draw() {
  background(25, 52, 65);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;

    // ground
    fill(254, 140, 49);
    ellipse(350, 620, 1100, 190);
    fill(254, 154, 75);
    ellipse(350, 630, 1100, 190);
    fill(254, 169, 101);
    ellipse(350, 640, 1100, 190);
    fill(254, 183, 126);
    ellipse(350, 650, 1100, 190);
    fill(255, 198, 152);
    ellipse(350, 660, 1100, 190);
    fill(255, 212, 178);
    ellipse(350, 670, 1100, 190);
    fill(255, 226, 203);
    ellipse(350, 680, 1100, 190);
   

    //flag
    stroke(0);
    strokeWeight(5);
    line(50, 500, 50, 630);

    strokeWeight(1);
    fill(126, 183, 126);
    triangle(50, 500, 110, 515, 50, 550);
    noStroke();

    landingGoal(0, 0, 1);
  }
}

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
