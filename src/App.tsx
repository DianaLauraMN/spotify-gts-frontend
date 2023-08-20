import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import GamePage from './pages/GamePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
