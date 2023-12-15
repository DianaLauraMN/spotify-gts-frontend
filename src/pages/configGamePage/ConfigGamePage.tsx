import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ConfigGamePage.module.css";
import useGTS from "../../hooks/useGTS";
import useGame from "../../hooks/useGame";
import GuessFromComponent from "../../components/guessFromComponent/GuessFromComponent";
import LevelsComponent from "../../components/levelsComponent/LevelsComponent";
import LogosNamesComponent from "../../components/logosNamesComponent/LogosNamesComponent";
import SpotifyButton from "../../components/utilitiesComponents/spotifyButton/SpotifyButton";
import ConfigGenreComponent from "../../components/configGenreComponent/ConfigGenreComponent";
import ConfigArtistComponent from "../../components/configArtistComponent/ConfigArtistComponent";
import TimeConfigComponent from "../../components/timeConfigComponent/TimeConfigComponent";
import SongsNumberComponent from "../../components/songsNumberComponent/SongsNumberComponent";
import useAuth from "../../hooks/useAuth";

const ConfigGamePage = () => {
  const { gtsState: { user }, loadUserProfile } = useGTS();
  const [userLoaded, setUserLoaded] = useState(false);
  const { resetGameState, handleOnSubmitConfigGame, configurationGame } = useGame();
  //const { isLoggedIn, apiAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    resetGameState();
    //resetear tambien el state de play context
    if (!userLoaded) {
      loadUserProfile();
      setUserLoaded(true);
    }
  }, []);

  return (
    <div>
      {user && (<>
        <LogosNamesComponent />
        <h2>Welcome {user.name} </h2>
        <h3>Please select the options you would like to play with.</h3>


        <div className={style.container}>

          <div className={style.firstCard}>
            <LevelsComponent
              title="Levels"
            />
          </div>

          <div className={style.secondCard}>
            <ConfigGenreComponent
              title="Search Genre"
            />
          </div>

          <div className={style.thirdCard}>
            <ConfigArtistComponent
              title="Search Artist"
            />
          </div>

          <div className={style.fourthCard}>
            <GuessFromComponent
              title="Guess From"
            />
          </div>

          <div className={style.fifthCard}>
            <TimeConfigComponent
              title="In how many seconds do you guess the song?"
            />
          </div>

          <div className={style.sixthCard}>
            <SongsNumberComponent
              title="How many songs do you want to guess?"
            />
          </div>

        </div>
        <SpotifyButton
          title="Start Game"
          type="game"
          onClick={() => {
            handleOnSubmitConfigGame(configurationGame);
            navigate("/game");
          }}
        />
      </>)}
    </div>
  )
}

export default ConfigGamePage