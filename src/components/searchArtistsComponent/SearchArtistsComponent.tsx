import { useState, useEffect } from 'react';
import style from "./SearchArtistsComponent.module.css"
import useGTS from '../../hooks/useGTS';
import useGame from '../../hooks/useGame';
import Artist from '../../entities/artist/Artist';

interface SearchArtistsProps {
  title: string;
}
const SearchArtistsComponent: React.FC<SearchArtistsProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultsList, setResultsList] = useState<Artist[]>([]);
  const { gtsState: { searchResultsArtists }, loadSearchResultsArtists } = useGTS();
  const { configurationGame: { isNewArtistsSearch }, handleOnSelectArtist, handleIsCustomArtistsConfig, handleIsNewArtistsSearch } = useGame();

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const { value } = event.target;
    setSearchTerm(value); //Validar que value no sean espacios 

    if (value) {
      loadSearchResultsArtists(value);
      handleIsNewArtistsSearch(false);
    } else {
      handleIsNewArtistsSearch(true);
    }
  };

  const handleArtistSelected = (artist: Artist) => {
    handleOnSelectArtist(artist);
    handleIsCustomArtistsConfig(true);
    setSearchTerm('');
    handleIsNewArtistsSearch(true);
  }

  useEffect(() => {
    if (isNewArtistsSearch) setResultsList([]);
    else searchResultsArtists ? setResultsList(searchResultsArtists) : setResultsList([]);

    return () => {
      setResultsList([]);
    }
  }, [searchResultsArtists, isNewArtistsSearch]);

  return (
    <div className={style.autocompleteContainer}>
      <input
        type="text"
        placeholder={title}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className={style.resultsContainer}>
        <ul className={style.ulResults}>
          {resultsList?.map((artistResult) => (
            <div onClick={() => { handleArtistSelected(artistResult) }} key={artistResult.id}>
              <li className={style.resultOption}>{artistResult.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default SearchArtistsComponent