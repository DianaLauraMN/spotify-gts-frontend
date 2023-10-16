import style from "./CardSelectSongComponent.module.css";
import TrackListedComponent from "../tracksListedComponent/TracksListedComponent";
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
          <TrackListedComponent />
        </div>
      </div>

      <div className={style.linearTimerContainer}>
        <TimerComponent />
      </div>

    </div>
  )
}

export default CardSelectSongComponent