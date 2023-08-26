import style from "./CardSelectSongComponent.module.css";
import searchIcon from "./../../img/search-icon.svg";
import RecentlyPlayedComponent from "./recentlyPlayed/RecentlyPlayedComponent";

const CardSelectSongComponent = () => {
  return (
    <div className={style.cardSelectionContainer}>
      <div className={style.centerContainer}>
        <div className={style.inputContainer}>
          <div className={style.iconSearch}>
            <img src={searchIcon} alt="" />
          </div>
          <input type="text" placeholder="Search song..." />
        </div>
        <div className={style.recentlyPlayedContainer}>
          <RecentlyPlayedComponent />
        </div>
      </div>
    </div>
  )
}

export default CardSelectSongComponent