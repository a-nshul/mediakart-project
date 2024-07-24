"use client"
import { useState } from "react";
import { message, Button } from "antd";
import Square from "./Square";

const Board: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || newSquares[index]) return;

    newSquares[index] = isXNext ? "cat" : "dog";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      message.success(`Winner: ${winner === 'cat' ? 'Cat' : 'Dog'}`);
    } else if (!newSquares.includes(null)) {
      message.info("No winner, it's a draw!");
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index: number) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner === "cat" ? "Cat" : "Dog"}`
    : squares.includes(null)
    ? `Next player: ${isXNext ? "Cat" : "Dog"}`
    : "Game over: It's a draw!";

  return (
    <div className="bg-sky-600">
      <div className="flex flex-col items-center">
        <div className="mb-6 text-2xl font-bold">{status}</div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
        </div>
        <Button type="primary" onClick={resetGame} className="mt-6 text-lg px-6 py-3">
          Reset and play again
        </Button>
      </div>
    </div>
  );
};

const calculateWinner = (squares: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
