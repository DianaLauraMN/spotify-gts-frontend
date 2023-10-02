import { useReducer } from "react";
import { IPlayState, PlayContext } from "./PlayContext";
import { PlayAction, PlayReducer } from "./PlayReducer";
import Track from "../../entities/track/Track";

interface props {
    children: JSX.Element | JSX.Element[];
}

export const initial_state: IPlayState = {
    asserts: [],
    failed: [],
    trackAnswer: null,
    score: 0,
    trackIsPlaying: true,
    currentTrackIndex: 0,
    timer: 10,
    currentTrack: null,
    isGameOver: false,
}

const PlayProvider = ({ children }: props) => {
    const [playState, dispatch] = useReducer(PlayReducer, initial_state);
    const handleOnChangeTrackPlaying = (trackIsPlaying: boolean) => {
        dispatch({ type: PlayAction.HANDLE_TRACK_IS_PLAYING, payload: trackIsPlaying })
    }
    const handleOnChangeCurrentTrackIndex = (currentTrackIndex: number) => {
        dispatch({ type: PlayAction.HANDLE_CURRENT_TRACK_INDEX, payload: currentTrackIndex })
    }
    const handleOnChangeAsserts = (assert: Track) => {
        dispatch({ type: PlayAction.HANDLE_CHANGE_ASSERTS, payload: assert });
    }
    const handleOnChangeFailed = (fail: Track) => {
        dispatch({ type: PlayAction.HANDLE_CHANGE_FAILED, payload: fail });
    }
    const handleOnChangeScore = (score: number) => {
        dispatch({ type: PlayAction.HANDLE_CHANGE_SCORE, payload: score });
    }
    const handleOnChangeTrackAnswer = (trackChosen: Track) => {
        dispatch({ type: PlayAction.HANDLE_CHANGE_TRACK_ANSWER, payload: trackChosen });
    }
    const handleOnChangeCurrentTrack = (currentTrack: Track) => {
        dispatch({ type: PlayAction.HANDLE_CHANGE_CURRENT_TRACK, payload: currentTrack });
    }
    const restartGameValues = (attributeToRestart: string) => {
        dispatch({ type: PlayAction.RESTART_GAME_VALUES, payload: attributeToRestart });
    }
    const toggleIsGameOver = (isGameOver: boolean) => {
        dispatch({ type: PlayAction.TOGGLE_IS_GAME_OVER, payload: isGameOver });
    }

    return (
        <PlayContext.Provider value={{
            playState,
            handleOnChangeTrackPlaying,
            handleOnChangeCurrentTrackIndex,
            handleOnChangeAsserts,
            handleOnChangeFailed,
            handleOnChangeScore,
            handleOnChangeTrackAnswer,
            handleOnChangeCurrentTrack,
            restartGameValues,
            toggleIsGameOver,
        }}>
            {children}
        </PlayContext.Provider>
    )
}

export default PlayProvider;