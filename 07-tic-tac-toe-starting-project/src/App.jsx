import { useState } from "react";
import Log from "./components/Log";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function getActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
}
function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [player, setPlayer] = useState({
    X: "Player 1",
    O: "Player 2"
  })
  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = [...initialGameBoard.map((inner) => [...inner])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for(const combinations of WINNING_COMBINATIONS){
    const firstSquare = gameBoard[combinations[0].row][combinations[0].column]
    const secondSquare = gameBoard[combinations[1].row][combinations[1].column]
    const thirdSquare = gameBoard[combinations[2].row][combinations[2].column]

    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = player[firstSquare]
      break
    };
    
  }

  const hasdraw = gameTurns.length === 9 && !winner

  
  function handleSelect(rowIndex, colIndex) {
    // setActivePlayer((activeSymbol) => (activeSymbol === "X" ? "O" : "X"));
    //the value depends on previous state, so update by passing function

    // the state here manages the X and O so pass this to gameboard
    // when two components needs to act on single event nearest closest ancestor should be choosen to implement functionality

    // let currentplayer = activePlayer;// this can not be used as state is not updated

    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X")
      //   currentPlayer = "O";
      let currentPlayer = getActivePlayer(prevTurns);
      let updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function rematch(){
    setGameTurns([])
  }

  function handlePlayerName(symbol, newName){
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      [symbol]: newName
    }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            player="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onPlayerNameChange={handlePlayerName}
          />
          <Player
            player="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onPlayerNameChange={handlePlayerName}
          />
        </ol>
        {(winner || hasdraw) && <GameOver winner={winner} onRematch={rematch}/>}
        <GameBoard onSelect={handleSelect} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
