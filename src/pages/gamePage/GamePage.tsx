import { useEffect } from 'react';
import style from "./GamePage.module.css";
import CardSelectSongComponent from "../../components/CardSelectSongComponent/CardSelectSongComponent";
import CardSongComponent from "../../components/cardSongComponent/CardSongComponent";
import useGame from "../../hooks/useGame";
import usePlay from "../../hooks/usePlay";

const GamePage = () => {
    const { playState: { score, failed, asserts }, handleOnChangeScore } = usePlay();
    const { configurationGame: { level, tracksQuantity } } = useGame();

    useEffect(() => {
        // handleOnChangeScore((asserts.length / tracksQuantity) * 100);
        const score = (asserts.length / tracksQuantity) * 100;
        const scoreFixed = score.toFixed(2);
        const castedScore = parseFloat(scoreFixed);
        handleOnChangeScore(castedScore);
    }, [asserts]);

    return (
        <div className={style.gamePageContainer}>
            <div className={style.levelScoreContainer}>
                <div className={style.levelContainer}>
                    <h2>Level</h2>
                    <h3>{level}</h3>
                </div>
                <div className={style.scoreContainer}>
                    <h2 >Score</h2>
                    <h3 >{score} / 100</h3>
                    <h2 >Asserts</h2>
                    <h3 >{asserts.length}</h3>
                    <h2 >Failed</h2>
                    <h3 >{failed.length}</h3>
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