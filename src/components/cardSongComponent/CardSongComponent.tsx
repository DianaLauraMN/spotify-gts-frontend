import style from "./CardSongComponent.module.css";
import { useEffect } from "react";
import usePlay from "../../hooks/usePlay";
import useGame from "../../hooks/useGame";
import RenderGameGuessTrackComponent from "../renderGameGuessTrack/RenderGameGuessTrackComponent";
import useGTS from "../../hooks/useGTS";

const CardSongComponent = () => {
    const { cleanTracksResultsSearch: cleanSearch } = useGTS();
    const { playState: { currentTrackIndex, isGameOver, score, trackAnswer, timerUser }, handleOnChangeCurrentTrack, handleOnChangeCurrentTrackIndex, restartGameValues, toggleIsGameOver } = usePlay();
    const { configurationGame: { timerListen, timerSong, timerGuess, tracks }, handleOnActiveSong, handleOnActiveListen, handleIsNewTracksSearch } = useGame();

    if (!tracks) { throw new Error('Game Tracks empty') }
    const currentTrackAux = tracks[currentTrackIndex];

    const timerToLoadNextTrack = () => {
        //  if (!trackAnswer) {
        return ((timerListen.time * 1000) + (timerGuess.time * 1000) + (timerSong.time * 1000))
        // } else {
        //   return (timerUser * 1000);
        // }
    }

    useEffect(() => {
        if (!isGameOver) {
            const timerId = setTimeout(() => {
                cleanSearch();
                restartGameValues('trackAnswer');
                handleOnActiveSong(false);
                handleOnChangeCurrentTrackIndex(currentTrackIndex < tracks.length - 1 ? currentTrackIndex + 1 : 0);
                if (currentTrackIndex === tracks.length - 1) {
                    toggleIsGameOver(true);
                } else {
                    handleOnActiveListen(true);
                    handleIsNewTracksSearch(true);
                }
            }, timerToLoadNextTrack());
            return () => clearTimeout(timerId);
        }
    }, [isGameOver, currentTrackIndex, tracks]);

    useEffect(() => {
        handleOnChangeCurrentTrack(currentTrackAux);
    }, [tracks, currentTrackAux]);

    return (
        <div className={style.cardSongContainer}>
            <div className={style.titleContainer}>
                <h1>Guess The Song</h1>
            </div>
            <div className={style.trackContainer}>
                {currentTrackAux && (
                    <div>
                        {isGameOver &&
                            <div>
                                <h1>GAME OVER</h1>
                                <h1>{score}</h1>
                            </div>
                        }
                        {(!isGameOver) &&
                            <div>
                                <RenderGameGuessTrackComponent
                                    track={currentTrackAux}
                                />
                            </div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardSongComponent;
