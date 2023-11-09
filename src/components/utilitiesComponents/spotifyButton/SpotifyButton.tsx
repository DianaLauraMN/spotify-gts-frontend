import style from "./SpotifyButton.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Global from "../../../Global/Global";
import useGame from "../../../hooks/useGame";
import useAuth from "../../../hooks/useAuth";

const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

interface SpotifyButtonProps {
    type: 'login' | 'game';
}

const SpotifyButton: React.FC<SpotifyButtonProps> = ({ type }) => {

    const { handleOnSubmitConfigGame, configurationGame } = useGame();
    const { isLoggedIn, apiAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = async () => {
        isLoggedIn ? navigate('/configGame') : window.location.replace(spoty_url);
    };

    const handleGameClick = () => {
        startGame();
    };

    useEffect(() => {
        const authenticateUser = async () => {
            if (type === 'login') {
                const urlParams = new URLSearchParams(location.search);
                const spotifyCode = urlParams.get('code');
                if (spotifyCode) {
                    await apiAuth.getCredentials(spotifyCode);
                    navigate('/configGame');
                }
            }
        };

        authenticateUser();
    }, [location.search]);

    const startGame = async () => {
        await handleOnSubmitConfigGame(configurationGame);
        navigate("/game")
    }

    return (
        <button className={style.btnLogin} onClick={type === 'login' ? handleLoginClick : handleGameClick}>
            {type === 'login' ? 'Start Guessing' : 'Start Game'}
        </button>
    );
}



export default SpotifyButton;