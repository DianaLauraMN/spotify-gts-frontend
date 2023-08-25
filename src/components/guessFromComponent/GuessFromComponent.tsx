import { IRenderComponent } from '../iRenderComponent/IRenderComponent'
import style from "./GuessFromComponent.module.css";

export default class GuessFromComponent implements IRenderComponent {
    cssClassName: string;
    title: string;
    constructor() {
        this.title = "Guess From";
        this.cssClassName = "fourth";
    }

    render(): JSX.Element {
        return (
            <div className={style.GuessFromContainer}>
                <div className={style.centerContainer}>
                    <h3>{this.title}</h3>
                    <div className={style.formRadioBtnOptions}>
                            <div className={style.option}>
                                <input type="radio" name="secondsOption" id="firstSeconds"/>
                                <label htmlFor="firstSeconds">First Seconds</label>
                            </div>
                            <div className={style.option}>
                                <input type="radio" name="secondsOption" id="randomPart" />
                                <label htmlFor="randomPart">Random Part of the Song</label>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}