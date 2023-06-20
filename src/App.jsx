import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [tie, setTie] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxID) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxID) {
        return xIsPlaying ? "x" : "o";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);
    setXIsPlaying(!xIsPlaying);
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "x") {
        setXScore(xScore + 1);
        setGameOver(true);
      } else {
        setOScore(oScore + 1);
        setGameOver(true);
      }
    }

    let filled = true;
    updatedBoard.map((item) => {
      if (item === null) {
        filled = false;
      }
    });

    if (filled && winner !== "x" && winner !== "o") {
      filled = true;
      setTie(tie + 1);
    }
  };

  const checkWinner = (updatedBoard) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (
        updatedBoard[x] &&
        updatedBoard[x] === updatedBoard[y] &&
        updatedBoard[y] === updatedBoard[z]
      ) {
        console.log("winner");
        return updatedBoard[x];
      }
    }
  };

  const reset = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const restartGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setXScore(0);
    setOScore(0);
    setTie(0);
  };

  return (
    <div className='App'>
      <ScoreBoard xScore={xScore} oScore={oScore} playing={xIsPlaying} tie={tie} />
      <Board board={board} onClick={gameOver ? reset : handleBoxClick} />
      <button
        style={{
          padding: "5px 8px",
          margin: "10px auto",
          backgroundColor: "#c92a2a",
          color: "white",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px #888",
        }}
        onClick={reset}
      >
        Play Again
      </button>
      <button
        style={{
          padding: "5px 8px",
          margin: "10px auto",
          backgroundColor: "#c92a2a",
          color: "white",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px #888",
        }}
        onClick={restartGame}
      >
        Restart Game
      </button>
    </div>
  );
};

export default App;
