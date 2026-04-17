export default function GameOver({ winner, onRematch }) {
    return <div id="game-over">
        {winner && <h2>{winner} won!</h2>}
        {!winner && <h2>It's a draw</h2>}
        <p><button onClick={onRematch}>Rematch</button></p>
    </div>
}