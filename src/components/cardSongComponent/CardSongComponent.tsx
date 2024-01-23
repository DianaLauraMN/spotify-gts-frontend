import style from "./CardSongComponent.module.css";
import { useEffect } from "react";
import usePlay from "../../hooks/usePlay";
import useGame from "../../hooks/useGame";
import RenderGameGuessTrackComponent from "../renderGameGuessTrack/RenderGameGuessTrackComponent";
import useGTS from "../../hooks/useGTS";
import { Steps } from "../../api/interfaces/InterfacesContext";
import GameEnded from "../gameEndedComponent/GameEnded";

const CardSongComponent = () => {
    const { cleanTracksResultsSearch: cleanSearch, handleScrollOnTop } = useGTS();
    const { playState: { currentTrackIndex, isGameOver, trackAnswer }, handleOnChangeCurrentTrack, handleOnChangeCurrentTrackIndex, restartGameValue, toggleIsGameOver, handleOnChangeFailed } = usePlay();
    const { configurationGame: { timerListen, timerSong, timerGuess, tracks, gameStep }, handleOnGameStep, handleIsNewTracksSearch } = useGame();

    if (!tracks) { throw new Error('Game Tracks empty') }
    const currentTrackAux = tracks[currentTrackIndex];

    const timerToLoadNextTrack = () => {
        return ((timerListen.time * 1000) + (timerGuess.time * 1000) + (timerSong.time * 1000))
    }

    const startGuessing = () => {
        handleOnGameStep(Steps.LISTEN);
        cleanSearch();
        restartGameValue('trackAnswer');
        handleOnChangeCurrentTrackIndex(currentTrackIndex < tracks.length - 1 ? currentTrackIndex + 1 : 0);
        if (currentTrackIndex === tracks.length - 1) {
            toggleIsGameOver(true);
        } else {
            handleOnGameStep(Steps.LISTEN);
            handleIsNewTracksSearch(true);
        }
    }

    useEffect(() => {
        if (!isGameOver) {
            if (gameStep != Steps.NEXT_SONG) {
                const timerId = setTimeout(() => {
                    startGuessing();
                }, timerToLoadNextTrack());
                return () => clearTimeout(timerId);
            } else if (gameStep === Steps.NEXT_SONG) {
                if (trackAnswer === null && currentTrackAux) {
                    handleOnChangeFailed(currentTrackAux);
                }
                handleScrollOnTop(true);
                startGuessing();
            }
        }
    }, [isGameOver, gameStep]);

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
                            <GameEnded />
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
