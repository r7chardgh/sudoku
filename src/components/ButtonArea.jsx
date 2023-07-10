import React from "react";

function ButtonArea({
  getStart,
  gameStatus,
  getSolve,
  currNum,
  selectCurrentNumber,
}) {
  function GSOne() {
    function handleClickNum(num) {
      if (currNum === num) {
        console.log("same!");
        selectCurrentNumber(null);
      } else {
        selectCurrentNumber(num);
      }
    }
    return (
      <>
        <div className="numBtnList">
          <button onClick={() => handleClickNum(1)}>1</button>
          <button onClick={() => handleClickNum(2)}>2</button>
          <button onClick={() => handleClickNum(3)}>3</button>
          <button onClick={() => handleClickNum(1)}>4</button>
          <button onClick={() => handleClickNum(1)}>5</button>
          <button onClick={() => handleClickNum(1)}>6</button>
          <button onClick={() => handleClickNum(1)}>7</button>
          <button onClick={() => handleClickNum(1)}>8</button>
          <button onClick={() => handleClickNum(1)}>9</button>
        </div>
        <button onClick={getSolve}>solve</button>
      </>
    );
  }
  switch (gameStatus) {
    case 0:
      return (
        <button className="btn" onClick={getStart}>
          start
        </button>
      );
    case 1:
      return <GSOne />;

    default:
      return null;
  }
}

export default ButtonArea;
