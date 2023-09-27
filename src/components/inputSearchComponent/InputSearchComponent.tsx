import React, { useState, useEffect } from 'react'
import style from "./InputSearchComponent.module.css"
import searchIcon from "./../../img/search-icon.svg";
import useGTS from '../../hooks/useGTS';

const InputSearchComponent = () => {
    const { gtsState: { isNewSearch }, handleIsNewSearch, loadSearchResultsTracks } = useGTS();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
    }

    const handleOnClickSearch = () => {
        loadSearchResultsTracks(searchTerm);
        handleIsNewSearch(false);
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleOnClickSearch();
        }
    }

    useEffect(() => {
        if (isNewSearch) {
            setSearchTerm('');
        }
    }, [isNewSearch])

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
                onKeyUp={handleKeyUp}
            />
        </div>


    )
}

export default InputSearchComponent