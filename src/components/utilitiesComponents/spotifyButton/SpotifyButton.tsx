import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ApiSpotify from "../../../api/ApiSpotify";
import { IApiControllerCalls } from "../../../api/IApiSpotify";
import Global from "../../../Global/Global";
import style from "./SpotifyButton.module.css"

const apiSpotify: IApiControllerCalls = new ApiSpotify();
const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

interface SpotifyButtonProps {
    type: 'login' | 'game';
}

const SpotifyButton: React.FC<SpotifyButtonProps> = ({ type }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = () => {
        login();
        console.log('Es un tipo login');

    };

    const handleGameClick = () => {
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
            const accessToken = await apiSpotify.getAccessToken(spotyCode);
            if (accessToken) navigate("/configGame");
        } catch (error) {
            console.log('Error while authentication:', error);
        }
    };


    function login() {
        window.location.replace(spoty_url);
    };

    // return (
    //     <button className={style.btnLogin} onClick={login}>
    //         Start Guessing
    //     </button>
    // )
    return (
        <button className={style.btnLogin} onClick={type === 'login' ? handleLoginClick : handleGameClick}>
            {type === 'login' ? 'Start Guessing' : 'Start Game'}
        </button>
    );
}

export default SpotifyButton;