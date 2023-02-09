background(25, 52, 65);
noStroke();

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 20; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

console.log(starX);

// ground
fill(253, 234, 201);
rect(0, 530, width, 200);


// landing goal
function landingGoal(x, y, s) {
  push();
  scale(s);
  translate(x, y);
  fill(253, 234, 201);
  triangle(245, 510, 210, 530, 245, 530);
  triangle(435, 510, 435, 530, 465, 530);
  push();
  fill(190, 175, 151);
  ellipse(340, 522, 210, 60);
  pop();
  ellipse(340, 520, 200, 50);
  pop();
}

//flag
stroke(0);
strokeWeight(5);
line(50, 500, 50, 600);

noStroke();
fill(255, 0, 0);
triangle(50, 500, 110, 515, 50, 550);

landingGoal(0, 0, 1);
