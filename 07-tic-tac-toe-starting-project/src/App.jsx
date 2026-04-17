import { useState } from "react"
import Log from "./components/Log"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
function App() {

  const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurns, setGameTurns] = useState([])

  function handleSelect(rowIndex, colIndex) {
    setActivePlayer((activeSymbol) => {activeSymbol === "X" ? "O" : "X"})
    //the value depends on previous state, so update by passing function

    // the state here manages the X and O so pass this to gameboard
    // when two components needs to act on single event nearest closest ancestor should be choosen to implement functionality

    // let currentplayer = activePlayer;// this can not be used as state is not updated

    setGameTurns((prevTurns) => {
      let currentPlayer = "X"
      if (prevTurns.length > 0 && prevTurns[0].player === "X")
        currentPlayer = "O"
      let updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex
          },
          player: currentPlayer
        },
        ...prevTurns,]
      return updatedTurns
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player player="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player player="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelect={handleSelect} turns={gameTurns} />
      </div>
      <Log />
    </main>
  )
}

export default App
