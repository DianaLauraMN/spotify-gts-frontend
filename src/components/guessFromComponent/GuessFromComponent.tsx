import useGame from "../../hooks/useGame";
import style from "./GuessFromComponent.module.css";

interface searchGenreComponentProps {
    title: string;
}
const GuessFromComponent: React.FC<searchGenreComponentProps> = ({ title }) => {
    const { handleOnChangeGuessFrom } = useGame();
    return (
        <div className={style.GuessFromContainer}>
            <div className={style.centerContainer}>
                <h3>{title}</h3>
                <div className={style.formRadioBtnOptions}>
                    <div className={style.option}>
                        <input type="radio" name="begginingOption" id="beggining" onClick={() => handleOnChangeGuessFrom(true)} />
                        <label htmlFor="beggining">Beggining of the song</label>
                    </div>
                    <div className={style.option}>
                        <input type="radio" name="randomPartOption" id="randomPart" onClick={() => handleOnChangeGuessFrom(false)} />
                        <label htmlFor="randomPart">Random part of the song</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuessFromComponent;