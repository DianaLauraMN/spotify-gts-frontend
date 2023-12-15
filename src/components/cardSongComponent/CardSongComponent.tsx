import style from "./CardSongComponent.module.css";
import { useEffect } from "react";
import usePlay from "../../hooks/usePlay";
import useGame from "../../hooks/useGame";
import RenderGameGuessTrackComponent from "../renderGameGuessTrack/RenderGameGuessTrackComponent";
import useGTS from "../../hooks/useGTS";
import SpotifyButton from "../utilitiesComponents/spotifyButton/SpotifyButton";
import { useNavigate } from "react-router-dom";
import { Steps } from "../../api/interfaces/InterfacesContext";

const CardSongComponent = () => {
    const { cleanTracksResultsSearch: cleanSearch } = useGTS();
    const { playState: { currentTrackIndex, isGameOver, score,  }, handleOnChangeCurrentTrack, handleOnChangeCurrentTrackIndex, restartGameValue, toggleIsGameOver, resetPlayState } = usePlay();
    const { configurationGame: { timerListen, timerSong, timerGuess, tracks, gameStep }, handleOnGameStep, handleIsNewTracksSearch, resetGameState } = useGame();
    const navigate = useNavigate();

    if (!tracks) { throw new Error('Game Tracks empty') }
    const currentTrackAux = tracks[currentTrackIndex];

    const timerToLoadNextTrack = () => {
        return ((timerListen.time * 1000) + (timerGuess.time * 1000) + (timerSong.time * 1000))
    }

    const handleOnClick = () => {
        resetGameState();
        resetPlayState();
        navigate('/configGame');
    }

    const startGuessing = () => {
        cleanSearch();
        restartGameValue('trackAnswer');
        handleOnGameStep(Steps.LISTEN);
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
            }
            if (gameStep === Steps.NEXT_SONG) {
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
                            <div>
                                <h1>DONE!</h1>
                                <h1>{score}</h1>

                                <SpotifyButton
                                    title={'Play Again'}
                                    type={'gameOver'}
                                    onClick={handleOnClick}
                                />
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
