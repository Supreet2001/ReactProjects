import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" timer={1} />
        <TimerChallenge title="Medium" timer={5} />
        <TimerChallenge title="Hard" timer={10} />
        <TimerChallenge title="Expert" timer={15} />
      </div>
    </>
  );
}

export default App;
