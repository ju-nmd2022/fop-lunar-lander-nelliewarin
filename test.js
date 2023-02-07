background(10, 57, 84);
noStroke();

const x = 350;
const y = 450;


// Wings
push();
translate(x, y - 85);
rotate(2.1);
fill(159, 0, 0);
arc(x - 251, y - 440, 310, 180, 0, PI);
fill(255, 0, 0);
arc(x - 250, y - 450, 310, 180, 0, PI);
pop();

push();
translate(250, y - 85);
rotate(-2.1);
fill(159, 0, 0);
arc(x - 249, y -440, 310, 180, 0, PI);
fill(255, 0, 0);
arc(x - 250, y - 450, 310, 180, 0, PI);
pop();

//Bottom of rocket
fill(255, 0, 0);
triangle(x - 49, y + 15, x, y - 100, x + 49, y + 15);
fill(159, 0, 0);
triangle(x - 45, y + 5, x, y - 100, x + 45, y + 5);

// Body of rocketship
push();
fill(245, 245, 245);
translate(x, y);
beginShape();
vertex(x - 300, y - 450);
bezierVertex(x - 350, y - 550, x - 350, y - 670, x - 300, y - 750);
line(x - 300, y - 750, x - 200, y - 750);
vertex(x - 200, y - 750);
bezierVertex(x - 150, y - 670, x - 150, y - 550, x - 200, y - 450);
line(x - 200, y - 450, x - 300, y - 450);

endShape();

pop();
beginShape();
fill(255, 0, 0);
vertex(x - 50, y - 300);
bezierVertex(x - 5, y - 370, x, y - 370, x + 50, y - 300);
endShape();

push();
translate(x, y);
beginShape();
stroke(200, 200, 200, 100);
strokeWeight(15);
noFill();
vertex(x - 250, y - 795);
bezierVertex(x - 150, y - 720, x - 150, y - 550, x - 205, y - 458);
endShape();
pop();


// Window
fill(210, 210, 210);
ellipse(x + 3, y - 195, 90);
fill(255, 0, 0);
ellipse(x, y - 200, 90);
fill(183, 233, 245);
ellipse(x, y - 200, 70);
fill(255);
ellipse(x - 3, y - 203, 50);
fill(183, 233, 245);
ellipse(x, y - 200, 52);



//Middle wing
fill(159, 0, 0);
ellipse(x + 3, y - 20, 26, 170);
fill(255, 0, 0);
ellipse(x, y - 20, 20, 170);



