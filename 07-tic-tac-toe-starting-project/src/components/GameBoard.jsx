import { useState } from "react";
// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
export default function GameBoard({ onSelect, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // function handleSelectSquare(rowIndex, colIndex){
  //     setGameBoard(prevGameBoard => {
  //             //use immutable way always copy and again reassign
  //             const updatedBoard = [...prevGameBoard.map(inner=>[...inner])]
  //             updatedBoard[rowIndex][colIndex] = activeSymbol
  //             return updatedBoard
  //         }
  //     )
  //     onSelect()
  // }
//   let gameBoard = initialGameBoard;
//   for (const turn of turns) {
//     const { square, player } = turn;
//     const { row, col } = square;
//     gameBoard[row][col] = player;
//     // console.log(row+"-"+col+"---"+player+":"+gameBoard[row][col])
//   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((colPlayerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={colPlayerSymbol !== null}
                >
                  {colPlayerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
