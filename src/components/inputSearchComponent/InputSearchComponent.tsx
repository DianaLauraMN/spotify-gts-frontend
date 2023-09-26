import React, { useState } from 'react'
import usePlay from '../../hooks/usePlay';
import searchIcon from "./../../img/search-icon.svg";
import style from "./InputSearchComponent.module.css"

const InputSearchComponent = () => {
    const { playState, loadtracksItemsSearchResults } = usePlay();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);

    }
    const handleOnClickSearch = () => {
        loadtracksItemsSearchResults(searchTerm);
        console.log(playState.tracksItemsSearchResults); //ya carga desde el state lo que se busca falta ponerlo en la pantalla en lugar de<RecentlyPlayedComponent /> en el componente cardSelectSongComponent 

    }

    return (
        <div className={style.searchContainer}>
            <button onClick={handleOnClickSearch}>
                <img src={searchIcon} alt="" />
            </button>
            <input className={style.inputContainer}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>


    )
}

export default InputSearchComponent