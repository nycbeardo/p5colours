function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(220);
}
function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0, 180, 252);
  }
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(300);
}