export const solveSudoku = (mt) => {
  //check if input is valid on specific pos
  function isValid(board, row, col, num) {
    let isOnRow = board[row].indexOf(num);
    let isOnCol = -1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === num) {
        isOnCol = i;
        break;
      }
    }
    let isOnSubM = -1;
    for (
      let i = Math.floor(row / 3) * 3;
      i < Math.floor(row / 3) * 3 + 3;
      i++
    ) {
      for (
        let j = Math.floor(col / 3) * 3;
        j < Math.floor(col / 3) * 3 + 3;
        j++
      ) {
        if (board[i][j] === num) {
          isOnSubM = 9;
          break;
        }
      }
    }
    return isOnRow + isOnCol + isOnSubM;
  }

  //backtracking
  function solve(board, row = 0, col = 0) {
    if (row === 9) {
      return true;
    } else if (col === 9) {
      return solve(board, row + 1, 0);
    } else if (board[row][col] !== 0) {
      return solve(board, row, col + 1);
    } else {
      const target = document.querySelector(`#r${row}c${col}`);
      for (let i = 1; i < 10; i++) {
        if (isValid(board, row, col, i) === -3) {
          board[row][col] = i;
          target.innerHTML = i;
          if (solve(board, row, col + 1)) {
            return true;
          }
          board[row][col] = 0;
        }
      }
      return false;
    }
  }
  async function init() {
    solve(mt);
    return mt;
  }
  return { init };
};
