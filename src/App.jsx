import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChanllange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange  title='Easy' targetTime={1}/>
        <TimerChallange  title='Not Easy' targetTime={5}/>
        <TimerChallange  title='GETTING TOUGH' targetTime={10}/>
        <TimerChallange  title='PROS ONLY' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
