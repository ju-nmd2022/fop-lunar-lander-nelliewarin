function fire(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  //-------------------red-----------------------//
  noStroke();
  fill(255, 77, 31);

  push();
  translate(200, 200);

  push();
  rotate(0.8);
  arc(0, 0, 200, 150, 0, PI);
  pop();

  push();
  rotate(-0.8);
  arc(35, 35, 200, 150, 0, PI);
  pop();
  pop();

  triangle(120, 200, 225, 30, 330, 200);
  ellipse(220, 200, 60);

  //-------------------orange-----------------------//
  fill(255, 133, 31);

  push();
  translate(200, 200);

  push();
  rotate(0.8);
  arc(0, 20, 130, 80, 0, PI);
  pop();

  push();
  rotate(-0.8);
  arc(30, 50, 130, 80, 0, PI);
  pop();
  pop();

  triangle(160, 200, 225, 70, 290, 200);
  ellipse(220, 215, 110);

  //-------------------yellow-----------------------//

  fill(255, 195, 31);

  push();
  translate(200, 200);

  push();
  rotate(0.6);
  arc(5, 25, 80, 55, 0, PI);
  pop();

  push();
  rotate(-0.6);
  arc(30, 47, 80, 55, 0, PI);
  pop();
  pop();

  triangle(185, 230, 225, 120, 260, 230);
  ellipse(220, 237, 100, 40);
  pop();

}

fire(200, 300, 0.2);
