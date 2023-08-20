import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Global from "../Global/Global";
import ApiSpotify from "../api/ApiSpotify";
import { IApiControllerCalls } from "../api/IApiSpotify";

const apiSpotify: IApiControllerCalls = new ApiSpotify();
const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            const urlParams = new URLSearchParams(location.search);
            const spotyCode = urlParams.get("code");
            if (spotyCode) authenticateUser(spotyCode);
        }, 500); // 0.5 segundos
        return () => clearTimeout(timer);// Limpieza del useEffect si es necesario (cancelar el timer)
    })

    const authenticateUser = async (spotyCode: string) => {
        try {
            const accessToken = await apiSpotify.getAccessToken(spotyCode);
            if (accessToken) navigate("/game");
        } catch (error) {
            console.log('Error while authentication:', error);
        }
    };


    function login() {
        window.location.replace(spoty_url);
    };


    return (
        <div className="general" >
            <div id="login">
                {/* <img src={imgLogin} id="imgLogo" alt="" /> */}
                <h3 className="subtitle">
                    Visualiza toda la información de tu perfil de Spotify
                </h3>
                <button onClick={login} id="btnLogin" className="btnLogin">
                    INICIAR SESION
                </button>
            </div>
        </div>
    );
}

export default LoginPage