import style from "./ConfigGamePage.module.css";
import GuessFromComponent from "../../components/guessFromComponent/GuessFromComponent";
import LevelsComponent from "../../components/levelsComponent/LevelsComponent";
import LogosNamesComponent from "../../components/logosNamesComponent/LogosNamesComponent";
import SpotifyButton from "../../components/utilitiesComponents/spotifyButton/SpotifyButton";
import SearchGenreComponent from "../../components/searchGenreComponent/SearchGenreComponent";
import SearchArtistComponent from "../../components/searchArtistComponent/SearchArtistComponent";
import TimeConfigComponent from "../../components/timeConfigComponent/TimeConfigComponent";
import SongsNumberComponent from "../../components/songsNumberComponent/SongsNumberComponent";
import { useEffect } from "react";
import useGTS from "../../hooks/useGTS";


const ConfigGamePage = () => {
  const { apiState: { user }, loadUserProfile } = useGTS();
  
  useEffect(() => {
    loadUserProfile();
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
            <SearchGenreComponent
              title="Search Genre"
            />
          </div>

          <div className={style.thirdCard}>
            <SearchArtistComponent
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
        <SpotifyButton type="game" />
      </>)}
    </div>
  )
}

export default ConfigGamePage