import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
import GamePage from '../pages/gamePage/GamePage';
import ConfigGamePage from '../pages/configGamePage/ConfigGamePage';

const AppRouter = () => {

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

export default AppRouter;
