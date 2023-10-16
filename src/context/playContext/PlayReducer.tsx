import Track from "../../entities/track/Track"
import { IPlayState } from "./PlayContext"
import { initial_state } from "./PlayProvider"

export enum PlayAction {
    HANDLE_TRACK_IS_PLAYING = 0,
    HANDLE_CURRENT_TRACK_INDEX = 1,
    HANDLE_CHANGE_ASSERTS = 2,
    HANDLE_CHANGE_FAILED = 3,
    HANDLE_CHANGE_SCORE = 4,
    HANDLE_CHANGE_TRACK_ANSWER = 5,
    HANDLE_CHANGE_CURRENT_TRACK = 6,
    TOGGLE_IS_GAME_OVER = 7,
    RESTART_GAME_VALUES = 8,
    HANDLE_ON_CHANGE_TIMER_USER = 9,
}

type playAction =
    | { type: PlayAction.HANDLE_TRACK_IS_PLAYING, payload: boolean }
    | { type: PlayAction.HANDLE_CURRENT_TRACK_INDEX, payload: number }
    | { type: PlayAction.HANDLE_CHANGE_ASSERTS, payload: Track }
    | { type: PlayAction.HANDLE_CHANGE_FAILED, payload: Track }
    | { type: PlayAction.HANDLE_CHANGE_SCORE, payload: number }
    | { type: PlayAction.HANDLE_CHANGE_TRACK_ANSWER, payload: Track }
    | { type: PlayAction.HANDLE_CHANGE_CURRENT_TRACK, payload: Track }
    | { type: PlayAction.TOGGLE_IS_GAME_OVER, payload: boolean }
    | { type: PlayAction.RESTART_GAME_VALUES, payload: string }
    | { type: PlayAction.HANDLE_ON_CHANGE_TIMER_USER, payload: number }

export const PlayReducer = (state: IPlayState, action: playAction): IPlayState => {
    switch (action.type) {
        case PlayAction.HANDLE_TRACK_IS_PLAYING:
            return {
                ...state,
                trackIsPlaying: action.payload
            }
        case PlayAction.HANDLE_CURRENT_TRACK_INDEX:
            return {
                ...state,
                currentTrackIndex: action.payload
            }
        case PlayAction.HANDLE_CHANGE_ASSERTS:
            return {
                ...state,
                asserts: [...state.asserts, action.payload],
            }
        case PlayAction.HANDLE_CHANGE_FAILED:
            return {
                ...state,
                failed: [...state.failed, action.payload],
            }
        case PlayAction.HANDLE_CHANGE_SCORE:
            return {
                ...state,
                score: action.payload
            }
        case PlayAction.HANDLE_CHANGE_TRACK_ANSWER:
            return {
                ...state,
                trackAnswer: action.payload
            }
        case PlayAction.HANDLE_CHANGE_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.payload
            }
        case PlayAction.TOGGLE_IS_GAME_OVER:
            return {
                ...state,
                isGameOver: action.payload
            }
        case PlayAction.RESTART_GAME_VALUES:
            for (let attribute in state) {
                if (initial_state.hasOwnProperty(attribute) && state.hasOwnProperty(attribute) && attribute === action.payload) {
                    return {
                        ...state,
                        [attribute]: initial_state[attribute]
                    };
                }
            }

            return {
                ...state,
            }
        case PlayAction.HANDLE_ON_CHANGE_TIMER_USER:
            return {
                ...state,
                timerUser: action.payload
            }

        default:
            return state;
    }
}