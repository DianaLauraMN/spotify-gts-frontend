import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import style from "./SongsNumberComponent.module.css";

export default class SongsNumberComponent implements IRenderComponent {
    cssClassName: string;
    title: string;
    constructor() {
        this.title = "How many songs do you want to guess?"
        this.cssClassName = "sixth";
    }
    render(): JSX.Element {
        return (
            <div className={style.songsNumberContainer}>
                <div className={style.centerContainer}>
                    <div className={style.labelContainer}>
                        <h3>{this.title}</h3>
                    </div>
                    <div className={style.inputContainer}>
                        <input type="text" placeholder="15" />
                    </div>
                </div>
            </div>
        );
    }

}