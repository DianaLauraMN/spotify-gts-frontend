import style from "./CardSelectSongComponent.module.css";
import RecentlyPlayedComponent from "../recentlyPlayed/RecentlyPlayedComponent";
import InputSearchComponent from "../inputSearchComponent/InputSearchComponent";
import TimerComponent from "../timerComponent/TimerComponent";

const CardSelectSongComponent = () => {

  return (
    <div className={style.cardSelectionContainer}>
      <div className={style.centerContainer}>
        <div>
          <InputSearchComponent />
        </div>

        <div className={style.recentlyPlayedContainer}>
          <RecentlyPlayedComponent />
        </div>
      </div>

      <div className={style.linearTimerContainer}>
        <TimerComponent />
      </div>

    </div>
  )
}

export default CardSelectSongComponent