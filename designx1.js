let img;
var bg;

function preload() {
    img = loadImage("./images/crystals.jpg"); // loading images in this function, best practice
    bg = loadImage("https://raw.githubusercontent.com/Rabbid76/graphics-snippets/master/resource/texture/background.jpg");
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    let img = createImage(100, 100); // same as new p5.Image(100, 100);
  img.loadPixels();
  background(0);


}



function draw() {
    background(0); // canvas background
    rotateZ(frameCount * 0.03); // rotates on z-axis
    rotateX(frameCount * 0.00); // rotates on x axis
    rotateY(frameCount * 0.01); // rotates on y axis
    box(100);
    translate(150, 150, -150);
    texture(img); // pass image as texture
    ellipsoid(75);
    translate(200, 200, -200);
    ellipsoid(50);
    translate(250, 250, -250);
    ellipsoid(25);
}

