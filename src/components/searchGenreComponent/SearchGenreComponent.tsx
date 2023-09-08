import style from "./SearchGenreComponent.module.css";
import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import LoadUserTopGenres from "../loadUserTopGenres/LoadUserTopGenres";


export default class SearchGenreComponent implements IRenderComponent {
    cssClassName: string;
    title: string;
    constructor() {
        this.title = "Search Genre";
        this.cssClassName="second";
    }
    render(): JSX.Element {
        return (
            <div className={style.searchGenreContainer}>
                <div className={style.centerContainer}>
                    <div className={style.inputContainer}>
                        <input type="text" placeholder={this.title} />
                    </div>
                    <div>
                        <LoadUserTopGenres/>
                    </div>
                </div>
            </div>
        )
    }

}