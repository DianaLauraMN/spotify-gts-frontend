import style from './LoginPage.module.css';
import SpotifyButton from '../../components/utilitiesComponents/spotifyButton/SpotifyButton';
import LogosNamesComponent from '../../components/logosNamesComponent/LogosNamesComponent';

const LoginPage = () => {

    return (
        <div className={style.bodyHomePage}>
            <div className={style.textContainerWrapper}>
                <div className={style.textContainer}>
                    <LogosNamesComponent />
                    <SpotifyButton type='login' />
                </div>
            </div>
            <div className={style.wave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 254" fill="none" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 37.6296C120 75.2593 240 150.519 360 178.741C480 206.963 600 188.148 720 150.519C840 112.889 960 56.4444 1080 37.6296C1200 18.8148 1320 37.6296 1380 47.037L1440 56.4444V254H1380C1320 254 1200 254 1080 254C960 254 840 254 720 254C600 254 480 254 360 254C240 254 120 254 60 254H0V0Z" fill="#1ED760" />
                </svg>
            </div>
        </div>
    );
}

export default LoginPage