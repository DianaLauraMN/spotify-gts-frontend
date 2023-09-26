import Track from "../../entities/track/Track"
import { IPlayState } from "./PlayContext"

export enum PlayAction {
    HANDLE_AUDIO_ENDED = 0,
    HANDLE_CURRENT_TRACK = 1,
    LOAD_TRACKS_RECENTLY_PLAYED = 2,
    LOAD_TRACKS_ITEMS_SEARCHED_RESULTS = 3,
}

type playAction =
    | { type: PlayAction.HANDLE_AUDIO_ENDED, payload: boolean }
    | { type: PlayAction.HANDLE_CURRENT_TRACK, payload: number }
    | { type: PlayAction.LOAD_TRACKS_RECENTLY_PLAYED, payload: Track[] }
    | { type: PlayAction.LOAD_TRACKS_ITEMS_SEARCHED_RESULTS, payload: Track[] }

export const PlayReducer = (state: IPlayState, action: playAction): IPlayState => {
    switch (action.type) {
        case PlayAction.HANDLE_AUDIO_ENDED:
            return {
                ...state,
                trackIsPlaying: action.payload
            }
        case PlayAction.HANDLE_CURRENT_TRACK:
            return {
                ...state,
                currentTrackIndex: action.payload
            }
        case PlayAction.LOAD_TRACKS_RECENTLY_PLAYED:
            return {
                ...state,
                tracksRecentlyPlayed: action.payload
            }

        case PlayAction.LOAD_TRACKS_ITEMS_SEARCHED_RESULTS:
            return {
                ...state,
                tracksItemsSearchResults: action.payload
            }

        default:
            return state;
    }
}