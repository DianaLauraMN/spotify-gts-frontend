import CardSelectSongComponent from "../../components/CardSelectSongComponent/CardSelectSongComponent"
import CardSongComponent from "../../components/cardSongComponent/CardSongComponent"
import style from "./GamePage.module.css"
const GamePage = () => {
    return (
        <div className={style.gamePageContainer}>
            <div className={style.levelScoreContainer}>
                <div className={style.levelContainer}>
                    <h2>Level</h2>
                    <h3>Easy</h3>
                </div>
                <div className={style.scoreContainer}>
                    <h2 >Score</h2>
                    <h3 >199</h3>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card1}>
                    <CardSongComponent />
                </div>
                <div className={style.card2}>
                    <CardSelectSongComponent />
                </div>
            </div>
        </div>
    )
}
export default GamePage