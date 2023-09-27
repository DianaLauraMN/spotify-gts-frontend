import style from "./SearchGenreComponent.module.css";
import useGame from "../../hooks/useGame";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";
import { useEffect } from "react";
import useGTS from "../../hooks/useGTS";

interface searchGenreComponentProps {
    title: string;
}

const SearchGenreComponent: React.FC<searchGenreComponentProps> = ({ title }) => {
    const { handleOnChangeGenres } = useGame();
    const { apiState: { userTopGenresSeeds }, loadUserTop6GenresSeeds } = useGTS();

    useEffect(() => {
        loadUserTop6GenresSeeds();
    }, []);

    return (
        <div className={style.searchGenreContainer}>
            <div className={style.centerContainer}>
                <div className={style.inputContainer}>
                    <input type="text" placeholder={title} />
                </div>
                <div className={style.genresBtnsContainer}>
                    {
                        userTopGenresSeeds.map((genre, key) => (
                            <div key={key}>
                                <GenericButtonComponent text={genre} onClick={() => handleOnChangeGenres(genre)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchGenreComponent;

