import style from "./SearchArtistComponent.module.css";
import { IRenderComponent } from "../iRenderComponent/IRenderComponent";
import LoadUserTopArtists from "../loadUserTopArtists/LoadUserTopArtists";

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
          <div>
            <LoadUserTopArtists />
          </div>
        </div>
      </div>
    );
  }

}