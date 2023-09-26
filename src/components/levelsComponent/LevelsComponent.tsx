import style from "./LevelsComponent.module.css";
import useGameConfig from "../../hooks/useGameConfig";
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

const LevelsComponent: React.FC<levelsComponentProps> = ({ contEasy, contHard, contNormal, easySelected, hardSelected, normalSelected, title }) => {
    const { handleOnChangeLevel } = useGameConfig();
    return (
        <div className={style.levelContainer}>
            <div className={style.centerContainer}>
                <div className={style.labelContainer_title}>
                    <h3>{title}</h3>
                </div>
                <div className={style.btnsContainer}>
                    <div onClick={() => {

                        console.log("EASY ");
                    }}>
                        <GenericButtonComponent isLevel={true} text="Easy" onClick={() => handleOnChangeLevel('EASY')} />
                    </div>

                    <div onClick={() => {

                        console.log("NORMAL ");
                    }}>
                        <GenericButtonComponent isLevel={true} text="Normal" onClick={() => handleOnChangeLevel('NORMAL')} />
                    </div>

                    <div onClick={() => {

                        console.log("HARD ");

                    }}>
                        <GenericButtonComponent isLevel={true} text="Hard" onClick={() => handleOnChangeLevel('HARD')} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LevelsComponent;