import React from "react";
import { getQuiz } from "../helpers/getQuiz";
import { solveSudoku } from "../helpers/solveSudoku";
function Board({ board,currNum }) {
  const [currBox, setCurrBox] = React.useState(null);
  
  function handleBoxClick(id) {
    if (currBox === id) {
      setCurrBox(null);
    }
    setCurrBox(id);
  }

  return (
    <div className="board">
      {board.length > 0
        ? board.map((r, i) => {
            return (
              <div key={i} className="row">
                {r.map((c, j) => {
                  return (
                    <button
                      key={`r${i}c${j}`}
                      id={`r${i}c${j}`}
                      className={c === 0 ? "num" : "num quiz"}
                      onClick={() => handleBoxClick(`r${i}c${j}`)}
                    >
                      <span>{c || null}</span>
                    </button>
                  );
                })}
              </div>
            );
          })
        : null}
      {}
    </div>
  );
}

function Panel({ gameStatus, currNum }) {
  const [board, setBoard] = React.useState([]);
  React.useEffect(() => {
    const mt = getQuiz(40).mat;
    setBoard(mt);
  }, []);

  switch (gameStatus) {
    case 1:
      return (
        <div className="panel">
          1
          <Board board={board} currNum={currNum}/>
        </div>
      );

    case 9:
      return (
        <div className="panel">
          9
          <Board board={solveSudoku(board).init()} currNum={currNum} />
        </div>
      );

    default:
      return null;
  }
}

export default Panel;
