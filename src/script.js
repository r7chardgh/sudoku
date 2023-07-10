import { solveSudoku } from "./helpers/solveSudoku";
import { board } from "./helpers/board";
//TODO - add more quiz
const mt = [
  [0, 7, 0, 0, 0, 1, 5, 0, 3],
  [5, 0, 6, 8, 0, 0, 0, 0, 0],
  [8, 0, 1, 0, 0, 0, 7, 0, 6],
  [0, 0, 2, 6, 0, 0, 9, 0, 8],
  [0, 0, 9, 1, 8, 0, 0, 0, 0],
  [6, 0, 8, 0, 0, 7, 0, 0, 1],
  [0, 6, 5, 0, 0, 8, 0, 7, 0],
  [1, 9, 3, 7, 0, 0, 0, 0, 5],
  [2, 0, 0, 3, 5, 0, 6, 0, 0],
];

board.init();

//add quiz to existing board
mt.forEach((row, i) => {
  row.forEach((num, j) => {
    const target = document.querySelector(`#r${i}c${j}`);
    if (num > 0) {
      target.classList.add("quiz");
      const newContent = document.createTextNode(num);
      target.appendChild(newContent);
    }
  });
});

// solveSudoku(mt).init();
