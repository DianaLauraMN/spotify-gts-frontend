import style from "./LevelsComponent.module.css";
import useGame from "../../hooks/useGame";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";

interface levelsComponentProps {
    contEasy?: number;
    easySelected?: boolean;
    contNormal?: number;
    normalSelected?: boolean;
    contHard?: number;
    hardSelected?: boolean;
    title: string;
}

const LevelsComponent: React.FC<levelsComponentProps> = ({ title }) => {
    const { handleOnChangeLevel } = useGame();
    return (
        <div className={style.levelContainer}>
            <div className={style.centerContainer}>
                <div className={style.labelContainer_title}>
                    <h3>{title}</h3>
                </div>
                <div className={style.btnsContainer}>
                    <div>
                        <GenericButtonComponent isLevel={true} text="Easy" onClick={() => handleOnChangeLevel('EASY')} />
                    </div>
                    <div>
                        <GenericButtonComponent isLevel={true} text="Normal" onClick={() => handleOnChangeLevel('NORMAL')} />
                    </div>
                    <div>
                        <GenericButtonComponent isLevel={true} text="Hard" onClick={() => handleOnChangeLevel('HARD')} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LevelsComponent;