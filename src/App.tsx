import AppRouter from "./router/AppRouter";
import ApiProvider from "./context/apiContext/ApiProvider";
import GameProvider from "./context/gameContext/GameProvider";
import PlayProvider from "./context/playContext/PlayProvider";

function App() {

  return (
    <ApiProvider>
      <GameProvider>
        <PlayProvider>
          <AppRouter />
        </PlayProvider>
      </GameProvider>
    </ApiProvider>
  )
}

export default App
