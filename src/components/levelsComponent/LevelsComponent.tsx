import style from "./LevelsComponent.module.css";
import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";

export default class LevelsComponent implements IRenderComponent {
    cssClassName: string;
    title: string;
    constructor() {
        this.title = "Level";
        this.cssClassName = "first";
    }
    render(): JSX.Element {
        return (
            <div className={style.levelContainer}>
                <div className={style.centerContainer}>
                    <div className={style.labelContainer_title}>
                        <h3>{this.title}</h3>
                    </div>
                    <div className={style.btnsContainer}>
                        <GenericButtonComponent text="Easy" onClick={() => { }} />
                        <GenericButtonComponent text="Normal" onClick={() => { }} />
                        <GenericButtonComponent text="Hard" onClick={() => { }} />
                    </div>
                </div>
            </div>
        )
    }
}


