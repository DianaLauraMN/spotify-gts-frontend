import style from "./ConfigGamePage.module.css";
import { IRenderComponent } from "../../components/iRenderComponent/IRenderComponent";
import GuessFromComponent from "../../components/guessFromComponent/GuessFromComponent";
import LevelsComponent from "../../components/levelsComponent/LevelsComponent";
import LogosNamesComponent from "../../components/logosNamesComponent/LogosNamesComponent";
import SpotifyButton from "../../components/utilitiesComponents/spotifyButton/SpotifyButton";
import SearchGenreComponent from "../../components/searchGenreComponent/SearchGenreComponent";
import SearchArtistComponent from "../../components/searchArtistComponent/SearchArtistComponent";
import TimeConfigComponent from "../../components/timeConfigComponent/TimeConfigComponent";
import SongsNumberComponent from "../../components/songsNumberComponent/SongsNumberComponent";
import { useEffect, useState } from "react";
import { IApiUserControllerCalls } from "../../api/interfaces/IApiUser";
import ApiUser from "../../api/ApiUser";
import User from "../../entities/user/User";

const apiUser: IApiUserControllerCalls = new ApiUser();

const ConfigGamePage = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const user = await apiUser.getUserData();
      setUser(user);
    })();
  }, []);

  const Levels: IRenderComponent = new LevelsComponent();
  const SearchGenre: IRenderComponent = new SearchGenreComponent();
  const SearchArtist: IRenderComponent = new SearchArtistComponent();
  const GuessFrom: IRenderComponent = new GuessFromComponent();
  const TimeConfig: IRenderComponent = new TimeConfigComponent();
  const SongsNumber: IRenderComponent = new SongsNumberComponent();

  const configurationComponents = [Levels, SearchGenre, SearchArtist, GuessFrom, TimeConfig, SongsNumber];
  const cssStyle = [style.firstCard, style.secondCard, style.thirdCard, style.fourthCard, style.fifthCard, style.sixthCard];
  return (
    <div>
      {user && (<>
        <LogosNamesComponent />
        <h2>Welcome {user.name} </h2>
        <h3>Please select the options you would like to play with.</h3>
        <div className={style.container}>
          {
            configurationComponents.map((component, key) => (
              <div className={cssStyle[key]} key={key}>
                {component.render()}
              </div>
            ))
          }
        </div>
        <SpotifyButton type="game" />
      </>)}
    </div>
  )
}

export default ConfigGamePage