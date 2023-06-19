import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
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
    checkWinner(updatedBoard);
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
      }
    }
  };

  return (
    <div className='App'>
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
};

export default App;
