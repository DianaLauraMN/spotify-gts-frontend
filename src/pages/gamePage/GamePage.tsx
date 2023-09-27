import style from "./GamePage.module.css"
import CardSelectSongComponent from "../../components/CardSelectSongComponent/CardSelectSongComponent"
import CardSongComponent from "../../components/cardSongComponent/CardSongComponent"
import useGame from "../../hooks/useGame"
import usePlay from "../../hooks/usePlay"

const GamePage = () => {
    const { playState } = usePlay();
    const { score } = playState;
    const { configurationGame } = useGame();
    const { tracks, level } = configurationGame;
    if (!tracks) { throw new Error('Tracks in game page') }

    return (
        <div className={style.gamePageContainer}>
            <div className={style.levelScoreContainer}>
                <div className={style.levelContainer}>
                    <h2>Level</h2>
                    <h3>{level}</h3>
                </div>
                <div className={style.scoreContainer}>
                    <h2 >Score</h2>
                    <h3 >{score}</h3>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card1}>
                    <CardSongComponent tracks={tracks} />
                </div>
                <div className={style.card2}>
                    <CardSelectSongComponent />
                </div>
            </div>
        </div>
    )
}
export default GamePage