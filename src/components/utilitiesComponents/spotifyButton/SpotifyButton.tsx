import style from "./SpotifyButton.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Global from "../../../Global/Global";
import useGame from "../../../hooks/useGame";
import useAuth from "../../../hooks/useAuth";
import LocalStorageManager from "../../../api/LocalStorageManager";
import useGTS from "../../../hooks/useGTS";
const localStorageManager = new LocalStorageManager()

const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

interface SpotifyButtonProps {
    type: 'login' | 'game' | 'reestart';
}

const SpotifyButton: React.FC<SpotifyButtonProps> = ({ type }) => {
    const { handleOnSubmitConfigGame, configurationGame } = useGame();
    const [code, setCode] = useState('');

    const { isLoggedIn, apiAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = async () => {
        isLoggedIn ? navigate('/configGame') : window.location.replace(spoty_url);
    };

    const handleGameClick = () => {
        startGame();
    };

    const handleReestart = () => {
        localStorageManager.resetLocalStorage();
        navigate('/')
    }

    useEffect(() => {
        const authenticateUser = async () => {
            if (type === 'login' && (!code)) {
                const urlParams = new URLSearchParams(location.search);
                const spotifyCode = urlParams.get('code');
                if (!code && spotifyCode) {
                    if (!apiAuth.isTokenValid()) {
                        setCode(spotifyCode);
                        await apiAuth.getCredentials(spotifyCode);
                        navigate('/configGame');
                    }
                }
            }

        }
        authenticateUser();
    }, []);

    const startGame = async () => {
        await handleOnSubmitConfigGame(configurationGame);
        navigate("/game")
    }

    return (
        <div>
            <button className={style.btnLogin} onClick={type === 'login' ? handleLoginClick : handleGameClick}>
                {type === 'login' ? 'Start Guessing' : 'Start Game'}
            </button>
            <button className={style.btnLogin} onClick={handleReestart}>
                Reestart
            </button>
        </div>

    );
}



export default SpotifyButton;