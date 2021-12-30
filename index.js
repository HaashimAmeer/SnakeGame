const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const score = document.querySelector("#score");
let squares = [];
let currSnake = [0, 1, 2];

function createGrid() {
  //create 100 blocks with for loop

  for (let i = 0; i < 100; i++) {
    //create block
    const square = document.createElement("div");

    //add styling to block
    square.classList.add("square");

    //add block to grid
    grid.appendChild(square);

    //push it into a new squares array
    squares.push(square);
  }
}

createGrid();

currSnake.forEach((index) => squares[index].classList.add("snake"));
