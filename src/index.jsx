import React from "react";
import ReactDOM from "react-dom/client";
import Panel from "./components/Panel";
import ButtonArea from "./components/ButtonArea";

function App() {
  const [gameStatus, setGameStatus] = React.useState(1);
  const [currNum, setCurrNum] = React.useState(null);
  React.useEffect(() => {
    console.log("current num selected", currNum);
  }, [currNum]);

  function getStart() {
    setGameStatus(1);
  }
  function getSolve() {
    setGameStatus(9);
  }
  function selectCurrentNumber(num) {
    setCurrNum(num);
  }
  return (
    <main className="container">
      <Panel gameStatus={gameStatus} currNum={currNum} />
      <ButtonArea
        getStart={getStart}
        getSolve={getSolve}
        gameStatus={gameStatus}
        currNum={currNum}
        selectCurrentNumber={selectCurrentNumber}
      />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
