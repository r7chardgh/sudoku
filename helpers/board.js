export const board = (() => {
  let gameStatus = 0;
  const panel = document.querySelector(".panel");
  //draw panel
  function drawBoard() {
    const newBoard = document.createElement("div");
    newBoard.className = "board";
    let i = 0;
    while (i < 9) {
      let j = 0;
      const newRow = document.createElement("div");
      newRow.className = "row";
      while (j < 9) {
        const newNum = document.createElement("div");
        newNum.className = "num";
        newNum.id = `r${i}c${j}`;
        newRow.appendChild(newNum);
        j++;
      }
      newBoard.appendChild(newRow);
      i++;
    }
    panel.appendChild(newBoard);
  }
  //draw button
  function drawButton() {
    if (gameStatus === 0) {
     
    
    }
  }
  function init() {
    drawBoard();
  }
  return { init };
})();
