const height = 720;
const width = 512;


function setup() { 
       
    // Create Canvas of given size 
    createCanvas(height, width); 
   
} 
   
function draw() { 
       
    background(220);

    // Use color() function
    let c = color('red');
   
    // Use fill() function to fill color
    fill(c);
    // Draw a square
    square(200, 100, 300);

    // Draw a triangle
    let x = color('blue');
    fill(x);
  
    //functions for each triangle in canvas
    newTriangle1();
    function newTriangle1() {
        triangle(200, 200, 200, 300, 200, 200); // triangle at (300, 200), (200, 300) and (300, 400)
        stroke('black');
        strokeWeight(10);
    }

    newTriangle2();
    function newTriangle2() {
        triangle(400, 300, 200, 300, 300, 400); // triangle at (300, 200), (200, 300) and (300, 400)
        stroke('black');
        strokeWeight(10);
    }

    newTriangle3();
    function newTriangle3() {
        triangle(100, 250, 250, 170, 330, 300); // triangle at (300, 200), (200, 300) and (300, 400)
        stroke('black');
        strokeWeight(10);
    }

   // let y = color('green');
   // fill(y);

  //  newArc();
    //function newArc(){
      //  arc(479, 300, 280, 280, PI, TWO_PI);
        //stroke('black');
        //strokeWeight(10);
    //}





} 