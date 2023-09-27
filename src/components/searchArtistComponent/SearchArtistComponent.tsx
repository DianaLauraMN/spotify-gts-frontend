import style from "./SearchArtistComponent.module.css";
import useGame from "../../hooks/useGame";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";
import { useEffect } from "react";
import useGTS from "../../hooks/useGTS";

interface searchArtistComponentProps {
  title: string;
}

const SearchArtistComponent: React.FC<searchArtistComponentProps> = ({ title }) => {
  const { handleOnChangeArtists } = useGame();
  const { gtsState: { userTopArtists }, loadUserTop6Artists } = useGTS();

  useEffect(() => {
    loadUserTop6Artists();
  }, []);

  return (
    <div className={style.searchArtistContainer}>
      <div className={style.centerContainer}>
        <div className={style.inputContainer}>
          <input type="text" placeholder={title} />
        </div>
        <div>
          <div className={style.artistsBtnOptions}>
            {
              userTopArtists?.map((artist, key) => (
                <div key={key}>
                  <GenericButtonComponent text={artist.name} onClick={() => handleOnChangeArtists(artist)} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchArtistComponent
