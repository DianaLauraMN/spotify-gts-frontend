import useGame from "../../hooks/useGame";
import style from "./SongsNumberComponent.module.css";

interface searchGenreComponentProps {
    title: string;
}

const SongsNumberComponent: React.FC<searchGenreComponentProps> = ({ title }) => {
    const { handleOnChangeHowManySongs } = useGame();
    return (
        <div className={style.songsNumberContainer}>
            <div className={style.centerContainer}>
                <div className={style.labelContainer}>
                    <h3>{title}</h3>
                </div>
                <div className={style.inputContainer}>
                    <input type="number" placeholder="15" onChange={(event) => handleOnChangeHowManySongs(parseInt(event.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default SongsNumberComponent;