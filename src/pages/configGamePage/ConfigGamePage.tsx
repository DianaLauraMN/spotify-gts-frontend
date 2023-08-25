import { IRenderComponent } from "../../components/iRenderComponent/IRenderComponent";
import GuessFromComponent from "../../components/guessFromComponent/GuessFromComponent";
import LevelsComponent from "../../components/levelsComponent/LevelsComponent";
import LogosNamesComponent from "../../components/logosNamesComponent/LogosNamesComponent";
import SpotifyButton from "../../components/utilitiesComponents/spotifyButton/SpotifyButton";
import style from "./ConfigGamePage.module.css";
import SearchGenreComponent from "../../components/searchGenreComponent/SearchGenreComponent";
import SearchArtistComponent from "../../components/searchArtistComponent/SearchArtistComponent";
import TimeConfigComponent from "../../components/timeConfigComponent/TimeConfigComponent";
import SongsNumberComponent from "../../components/songsNumberComponent/SongsNumberComponent";
import { IApiControllerCalls } from "../../api/IApiSpotify";
import ApiSpotify from "../../api/ApiSpotify";
import { useEffect } from "react";
import User from "../../entities/user/User";

let currentUser: User;
const apiSpotify: IApiControllerCalls = new ApiSpotify();

const ConfigGamePage = () => {

  useEffect(() => {
    (async () => {
      currentUser = await apiSpotify.getUserData();
      console.log(currentUser);

    });
  });

  const Levels: IRenderComponent = new LevelsComponent();
  const SearchGenre: IRenderComponent = new SearchGenreComponent();
  const SearchArtist: IRenderComponent = new SearchArtistComponent();
  const GuessFrom: IRenderComponent = new GuessFromComponent();
  const TimeConfig: IRenderComponent = new TimeConfigComponent();
  const SongsNumber: IRenderComponent = new SongsNumberComponent();

  const configurationComponents = [Levels, SearchGenre, SearchArtist, GuessFrom, TimeConfig, SongsNumber];
  const cssStyle = [style.firstCard, style.secondCard, style.thirdCard, style.fourthCard, style.fifthCard, style.sixthCard];
  return (
    <div className={style.configsContainer}>
      <LogosNamesComponent />
      {currentUser && <h2>Welcome {currentUser.name} </h2>}
      <h3>Please select the options you would like to play with.</h3>
      <div className={style.contenedor}>
        {
          configurationComponents.map((component, key) => (
            <div className={cssStyle[key]} key={key}>
              {component.render()}
            </div>
          ))
        }
      </div>
      <SpotifyButton type="game" />
    </div>
  )
}

export default ConfigGamePage