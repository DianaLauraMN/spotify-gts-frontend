import AppRouter from "./router/AppRouter";
import GTSProvider from "./context/gtsContext/GTSProvider";
import GameProvider from "./context/gameContext/GameProvider";
import PlayProvider from "./context/playContext/PlayProvider";

function App() {

  return (
    <GTSProvider>
      <GameProvider>
        <PlayProvider>
          <AppRouter />
        </PlayProvider>
      </GameProvider>
    </GTSProvider>
  )
}

export default App
