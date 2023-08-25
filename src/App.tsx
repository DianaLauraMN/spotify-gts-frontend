import LoginPage from './pages/loginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import GamePage from './pages/gamePage/GamePage';
import ConfigGamePage from './pages/configGamePage/ConfigGamePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/configGame' element={<ConfigGamePage />} />
      </Routes>
    </Router>
  )
}

export default App
