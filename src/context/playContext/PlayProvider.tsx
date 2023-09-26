import { useReducer } from "react";
import { IPlayState, PlayContext } from "./PlayContext";
import { PlayAction, PlayReducer } from "./PlayReducer";
import { IApiTracksControllerCalls } from "../../api/interfaces/IApiTracks";
import ApiTracks from "../../api/ApiTracks";

const apiTracks: IApiTracksControllerCalls = new ApiTracks();

interface props {
    children: JSX.Element | JSX.Element[];
}

const initial_state: IPlayState = {
    tracksRecentlyPlayed: [],
    asserts: [],
    failed: [],
    trackAnswer: null,
    score: 0,
    trackIsPlaying: true,
    currentTrackIndex: 0,
    tracksItemsSearchResults: [],
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
    const loadTracksRecentlyPlayed = async () => {
        dispatch({ type: PlayAction.LOAD_TRACKS_RECENTLY_PLAYED, payload: await apiTracks.getUserTopTracks() })
    }
    const loadtracksItemsSearchResults = async (itemName:string) => {
        dispatch({ type: PlayAction.LOAD_TRACKS_ITEMS_SEARCHED_RESULTS, payload: await apiTracks.getTracksByName(itemName) })
    }

    return (
        <PlayContext.Provider value={{
            playState,
            handleOnChangeTrackPlaying,
            handleOnChangeCurrentTrack,
            loadTracksRecentlyPlayed,
            loadtracksItemsSearchResults
        }}>
            {children}
        </PlayContext.Provider>
    )
}

export default PlayProvider;