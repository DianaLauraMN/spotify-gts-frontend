import style from "./SpotifyButton.module.css"
import { json, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Global from "../../../Global/Global";
import ApiAuth from "../../../api/ApiAuth";
import { ConfigurationGame } from "../../../api/interfaces/ConfigurationGame";
import Artist from "../../../entities/artist/Artist";
import ApiLevels from "../../../api/levels/ApiLevels";

const apiLevels = new ApiLevels();
const apiAuth = new ApiAuth();
const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

interface SpotifyButtonProps {
    type: 'login' | 'game';
}
const configurationGame: ConfigurationGame = {
    level: "EASY",
    genres: ['J-pop', 'k-pop'],
    artists: [new Artist("5t5FqBwTcgKTaWmfEbwQY9", "ENHYPEN", [
        {
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            "height": 300,
            "width": 300
        }
    ], 'htppppp', 97, 'Artist', ['pop', 'kpop','anime']), new Artist("0ghlgldX5Dd6720Q3qFyQB", "TOMORROW X TOGETHER", [
        {
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            "height": 300,
            "width": 300
        }
    ], 'httpsssdasdasd', 98, 'Artist', ['pop', 'kpop'])],
    guessFromBeggining: true,
    durationMs: 2,
    tracksQuantity: 10
}

const SpotifyButton: React.FC<SpotifyButtonProps> = ({ type }) => {
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
        console.log('Es un tipo login');
    };

    const handleGameClick = () => {
        startGame();
        console.log('Es un tipo game');
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
    })

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
        const levelTracks = await apiLevels.getTracksByLevel(configurationGame);
        console.log(levelTracks);

        //  navigate("/game")
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