//colors to be used in the resulted output
var listOfColors = ["#00bfb2", "#1a5e63", "#028090", "#f0f3bd", "#c64191", "#d81159", "#8f2d56", "#fbb13c", "#230903", "#d3b88c"];

//declares square class
class Square {
    constructor(px, py, s) {
        this.positionx = px; //x position
        this.positiony = py; //y position
        this.size = s; //size of square
        this.c = listOfColors[int(random(0, listOfColors.length))] // calls color array
    }
    display() {

        fill(this.c)
        rect(this.positionx - this.size / 2, this.positiony - this.size / 2, this.size, this.size) // for displaying the grid


    }



}


//centers, arranages and creates square grid for html canvas
class SquareGrid{
    constructor(){
      this.squares = []
      this.gridSize = 32
      this.squareSize = 16
      this.spacing = 18
      this.positionX = width/2 - ((this.gridSize-1) * (this.spacing))/2
      console.log(this.positionX)
      this.positionY = height/2 - ((this.gridSize-1) * (this.spacing))/2
  
      for(let i=0; i<this.gridSize; i++){
        let row = []
        for(let j=0; j<this.gridSize; j++){
          row.push(
            new Square((this.positionX + this.spacing * i),(this.positionY + this.spacing * j ),this.squareSize)
          )
        }
        this.squares.push(row)
      }
    }
  
    display(){
      for(let i=0; i<this.gridSize; i++){
        for(let j=0; j<this.gridSize; j++){
          this.squares[i][j].display()
        }
      }
      this.squares[int(random(this.gridSize))][int(random(this.gridSize))].c = listOfColors[int(random(0, listOfColors.length))]
    }
  }

function setup() {
    createCanvas(800, 800);
    grid = new SquareGrid()
}

function draw() {
    background(230);
    grid.display()
}