import style from "./LevelsComponent.module.css";
import { useState } from 'react'
import useGame from "../../hooks/useGame";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";

interface levelsComponentProps {
    title: string;
}

const LevelsComponent: React.FC<levelsComponentProps> = ({ title }) => {
    const { handleOnChangeLevel } = useGame();
    const [levelSelected, setLevelSelected] = useState<string>('');

    const handleOnClick = (level: string) => {
        handleOnChangeLevel(level);
        setLevelSelected(level);
    }

    return (
        <div className={style.levelContainer}>
            <div className={style.centerContainer}>
                <div className={style.labelContainer_title}>
                    <h3>{title}</h3>
                </div>
                <div className={style.btnsContainer}>
                    <div>
                        <GenericButtonComponent text="Easy" onClick={() => handleOnClick('EASY')} isSelected={levelSelected === 'EASY'} />
                    </div>
                    <div>
                        <GenericButtonComponent text="Normal" onClick={() => handleOnClick('NORMAL')} isSelected={levelSelected === 'NORMAL'} />
                    </div>
                    <div>
                        <GenericButtonComponent text="Hard" onClick={() => handleOnClick('HARD')} isSelected={levelSelected === 'HARD'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelsComponent;
