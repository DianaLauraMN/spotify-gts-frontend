import style from "./LevelsComponent.module.css";
import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";

export default class LevelsComponent implements IRenderComponent {
    contEasy = 0;
    easySelected: boolean = false;
    contNormal = 0;
    normalSelected = false;
    contHard = 0;
    hardSelected = false;
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
                        <div onClick={() => {
                            const easeLevelSelected = this.getEasyLevelSelected();
                            console.log("EASY " + easeLevelSelected);
                        }}>
                            <GenericButtonComponent isLevel={true} text="Easy" onClick={() => {
                                const flag = this.easySelected;
                                return flag;
                            }} />
                        </div>

                        <div onClick={() => {
                            this.contNormal++;
                            console.log(this.contNormal);
                            this.contNormal % 2 === 0 ? this.normalSelected = false : this.normalSelected = true;
                            console.log("NORMAL " + this.normalSelected);

                        }}>
                            <GenericButtonComponent isLevel={true} text="Normal" onClick={() => {
                                const flag = this.normalSelected;
                                return flag;
                            }} />
                        </div>

                        <div onClick={() => {
                            this.contHard++;
                            console.log(this.contHard);
                            this.contHard % 2 === 0 ? this.hardSelected = false : this.hardSelected = true;
                            console.log("HARD " + this.hardSelected);

                        }}>
                            <GenericButtonComponent isLevel={true} text="Hard" onClick={() => {
                                const flag = this.hardSelected;
                                return flag;
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getEasyLevelSelected() {
        this.contEasy++;
        console.log(this.contEasy);

        if (this.contEasy % 2 === 0) {
            this.easySelected = false
        } else {
            this.easySelected = true;
            this.normalSelected = false;
            this.hardSelected = false;
        }
        return this.easySelected;
    }



}