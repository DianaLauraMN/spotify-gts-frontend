import style from "./SearchGenreComponent.module.css";
import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";


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
                    <div className={style.genresBtnsContainer}>
                        <GenericButtonComponent text="Kpop" onClick={() => { }} />
                        <GenericButtonComponent text="Reagueton" onClick={() => { }} />
                        <GenericButtonComponent text="J-pop" onClick={() => { }} />
                        <GenericButtonComponent text="Pop" onClick={() => { }} />
                        <GenericButtonComponent text="Rock" onClick={() => { }} />
                    </div>
                </div>
            </div>
        )
    }

}