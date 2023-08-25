import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import style from "./TimeConfigComponent.module.css";

export default class TimeConfigComponent implements IRenderComponent {
    cssClassName: string;
    title: string;
    constructor() {
        this.title = "In how many seconds do you guess the song?";
        this.cssClassName = "fifth";
    }
    render(): JSX.Element {
        return (
            <div className={style.timeConfigContainer}>
                <div className={style.centerContainer}>
                    <div><h3>{this.title}</h3></div>
                    <div className={style.slidecontainer}>
                        <input type="range" min="1" max="6" className={style.drag__bar} id="myRange" />
                    </div>
                </div>

            </div>
        );
    }

}