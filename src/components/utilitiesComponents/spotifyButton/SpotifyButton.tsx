import style from "./SpotifyButton.module.css"
import { json, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Global from "../../../Global/Global";
import ApiAuth from "../../../api/ApiAuth";
import useGame from "../../../hooks/useGame";

const apiAuth = new ApiAuth();
const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

interface SpotifyButtonProps {
    type: 'login' | 'game';
}

const SpotifyButton: React.FC<SpotifyButtonProps> = ({ type }) => {
    const { handleOnSubmitConfigGame, configurationGame } = useGame();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = () => {
        const authenticated: boolean = isAuthenticated();
        if (authenticated) {
            // console.log(JSON.parse(localStorage.getItem("access_token")));

            // console.log(localStorage.access_token);
            // console.log(localStorage.refresh_token);

            login(); //no hace que se autentique de nuevo pero refresca el token al parecer
        } else {
            login();
        }
    };

    const handleGameClick = () => {
        startGame();
    };

    useEffect(() => {
        if (type === 'login') {
            const timer = setTimeout(() => {
                const urlParams = new URLSearchParams(location.search);
                const spotyCode = urlParams.get("code");
                if (spotyCode) authenticateUser(spotyCode);
            }, 500); // 0.5 segundos
            return () => clearTimeout(timer);// Limpieza del useEffect si es necesario (cancelar el timer)
        }
    }, [])

    const authenticateUser = async (spotyCode: string) => {
        try {
            const accessToken = await apiAuth.getAccessToken(spotyCode);
            if (accessToken) navigate("/configGame");
        } catch (error) {
            console.log('Error while authentication:', error);
        }
    };

    const isAuthenticated = () => {
        return localStorage.access_token ? true : false;
    }

    const startGame = async () => {
        await handleOnSubmitConfigGame(configurationGame);
        navigate("/game")
    }


    function login() {
        window.location.replace(spoty_url);
    };

    return (
        <button className={style.btnLogin} onClick={type === 'login' ? handleLoginClick : handleGameClick}>
            {type === 'login' ? 'Start Guessing' : 'Start Game'}
        </button>
    );
}

export default SpotifyButton;