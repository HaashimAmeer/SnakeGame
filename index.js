const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const score = document.querySelector("#score");
let squares = [];

function createGrid() {
  //create 100 blocks with a for loop
  for (let i = 0; i < 100; i++) {
    //create block
    const square = document.createElement("div");

    //add styling to the element
    square.classList.add("square");

    //put the element into our grid
    grid.appendChild(square);

    //push it into a new squares array
    squares.push(square);
  }
}

createGrid();
// console.log(squares);
