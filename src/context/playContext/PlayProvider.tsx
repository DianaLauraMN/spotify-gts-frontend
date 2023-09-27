import { useReducer } from "react";
import { IPlayState, PlayContext } from "./PlayContext";
import { PlayAction, PlayReducer } from "./PlayReducer";

interface props {
    children: JSX.Element | JSX.Element[];
}

const initial_state: IPlayState = {
    asserts: [],
    failed: [],
    trackAnswer: null,
    score: 0,
    trackIsPlaying: true,
    currentTrackIndex: 0,
    timer:10
}

const PlayProvider = ({ children }: props) => {
    const [playState, dispatch] = useReducer(PlayReducer, initial_state);
    const handleOnChangeTrackPlaying = (trackIsPlaying: boolean) => {
        dispatch({ type: PlayAction.HANDLE_AUDIO_ENDED, payload: trackIsPlaying })
    }
    const handleOnChangeCurrentTrack = (currentTrackIndex: number) => {
        dispatch({ type: PlayAction.HANDLE_CURRENT_TRACK, payload: currentTrackIndex })
    }


    return (
        <PlayContext.Provider value={{
            playState,
            handleOnChangeTrackPlaying,
            handleOnChangeCurrentTrack,          
        }}>
            {children}
        </PlayContext.Provider>
    )
}

export default PlayProvider;