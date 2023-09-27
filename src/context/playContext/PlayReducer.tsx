import { IPlayState } from "./PlayContext"

export enum PlayAction {
    HANDLE_AUDIO_ENDED = 0,
    HANDLE_CURRENT_TRACK = 1,

}

type playAction =
    | { type: PlayAction.HANDLE_AUDIO_ENDED, payload: boolean }
    | { type: PlayAction.HANDLE_CURRENT_TRACK, payload: number }

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
       
        default:
            return state;
    }
}