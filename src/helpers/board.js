export const board = (() => {
  let gameStatus = 0;
  const panel = document.querySelector(".panel");
  console.log(panel);
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
        const newNum = document.createElement("button");
        newNum.className = "num";
        newNum.id = `r${i}c${j}`;
        newRow.appendChild(newNum);
        j++;
      }
      newBoard.appendChild(newRow);
      i++;
    }
    if (!!panel) panel.appendChild(newBoard);
  }
  //draw button
  function drawButton() {
    if (gameStatus === 0) {
      const newBtnArea = document.createElement("div");
      newBtnArea.classList.add("button-container");
      const playBtn = document.createElement("button");
      const solveBtn = document.createElement("button");
      playBtn.className = "btn btn-play";
      solveBtn.className = "btn btn-solve";
      playBtn.innerHTML = "play";
      solveBtn.innerHTML = "solve";
      newBtnArea.appendChild(playBtn);
      newBtnArea.appendChild(solveBtn);
      panel.appendChild(newBtnArea);
    }
  }
  function init() {
    drawBoard();
    drawButton();
  }
  return { init };
})();
