import React, { useState } from 'react'
import style from "./InputSearchComponent.module.css"
import searchIcon from "./../../img/search-icon.svg";
import useGTS from '../../hooks/useGTS';

const InputSearchComponent = () => {
    const { gtsState, loadtracksItemsSearchResults } = useGTS();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);

    }
    const handleOnClickSearch = () => {
        loadtracksItemsSearchResults(searchTerm);
        console.log(gtsState.tracksItemsSearchResults); //ya carga desde el state lo que se busca falta ponerlo en la pantalla en lugar de<RecentlyPlayedComponent /> en el componente cardSelectSongComponent 

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