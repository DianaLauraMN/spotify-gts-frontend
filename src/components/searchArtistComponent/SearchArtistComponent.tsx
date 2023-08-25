import style from "./SearchArtistComponent.module.css";
import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";

export default class SearchArtistComponent implements IRenderComponent {
  cssClassName: string;
  title: string;
  constructor() {
    this.title = "Search Artist";
    this.cssClassName = "third";
  }
  render(): JSX.Element {
    return (
      <div className={style.searchArtistContainer}>
        <div className={style.centerContainer}>
          <div className={style.inputContainer}>
            <input type="text" placeholder={this.title} />
          </div>
          <div className={style.artistsBtnOptions}>
            <GenericButtonComponent text="BTS" onClick={() => { }} />
            <GenericButtonComponent text="Enhypen" onClick={() => { }} />
            <GenericButtonComponent text="Tomorrow by together" onClick={() => { }} />
            <GenericButtonComponent text="Seventeen" onClick={() => { }} />
            <GenericButtonComponent text="Vanner" onClick={() => { }} />
          </div>
        </div>
      </div>
    );
  }

}