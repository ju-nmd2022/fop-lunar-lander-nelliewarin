background(25, 52, 65 );
noStroke();

// ground
fill(253, 234, 201);
rect(0, 530, 700, 200);

// landing goal
triangle(245, 510, 210, 530, 245, 530);
triangle(435, 510, 435, 530, 465, 530);
push();
fill(190, 175, 151);
ellipse(width/2, 522, 210, 60);
pop();
ellipse(width/2, 520, 200, 50);

//flag
stroke(0);
strokeWeight(5);
line(50, 500, 50, 600);
noStroke();
fill(255, 0, 0);
triangle(50, 500, 110, 515, 50, 550);
