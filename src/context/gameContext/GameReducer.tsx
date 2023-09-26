import { ConfigurationGame } from "../../api/interfaces/InterfacesContext";
import Artist from "../../entities/artist/Artist";
import Track from "../../entities/track/Track";

export enum ConfigurationAction {
    SUBMIT_CONFIG = 0,
    CHANGE_LEVEL = 1,
    CHANGE_GENRE = 2,
    CHANGE_ARTIST = 3,
    CHANGE_BEGGINING = 4,
    CHANGE_DURATION_MS = 5,
    CHANGE_TRACKS_QUANTITY = 6,
    CHANGE_IS_TRACK_ALREADY_GUESSED = 7,
    ACTIVE_LISTEN = 8,
    ACTIVE_GUESS = 9,
    ACTIVE_SONG = 10,
    TIME_LISTEN = 11,
}

type gameAction =
    | { type: ConfigurationAction.SUBMIT_CONFIG, payload: Track[] | undefined }
    | { type: ConfigurationAction.CHANGE_LEVEL, payload: string }
    | { type: ConfigurationAction.CHANGE_GENRE, payload: string }
    | { type: ConfigurationAction.CHANGE_ARTIST, payload: Artist }
    | { type: ConfigurationAction.CHANGE_BEGGINING, payload: boolean }
    | { type: ConfigurationAction.CHANGE_DURATION_MS, payload: number }
    | { type: ConfigurationAction.CHANGE_TRACKS_QUANTITY, payload: number }
    | { type: ConfigurationAction.CHANGE_IS_TRACK_ALREADY_GUESSED, payload: boolean }
    | { type: ConfigurationAction.ACTIVE_LISTEN, payload: boolean }
    | { type: ConfigurationAction.ACTIVE_GUESS, payload: boolean }
    | { type: ConfigurationAction.ACTIVE_SONG, payload: boolean }
    | { type: ConfigurationAction.TIME_LISTEN, payload: number }

export const GameReducer = (state: ConfigurationGame, action: gameAction): ConfigurationGame => {
    switch (action.type) {
        case ConfigurationAction.SUBMIT_CONFIG:
            return {
                ...state,
                tracks: action.payload
            }
        case ConfigurationAction.CHANGE_LEVEL:
            return {
                ...state,
                level: action.payload
            }
        case ConfigurationAction.CHANGE_GENRE:
            return {
                ...state,
                genres: [...state.genres, action.payload]
            }
        case ConfigurationAction.CHANGE_ARTIST:
            return {
                ...state,
                artists: [...state.artists, action.payload]
            }
        case ConfigurationAction.CHANGE_BEGGINING:
            return {
                ...state,
                guessFromBeggining: action.payload
            }
        case ConfigurationAction.CHANGE_DURATION_MS:
            return {
                ...state,
                durationMs: (action.payload) //+1
            }
        case ConfigurationAction.CHANGE_TRACKS_QUANTITY:
            return {
                ...state,
                tracksQuantity: action.payload
            }
        case ConfigurationAction.CHANGE_IS_TRACK_ALREADY_GUESSED:
            return {
                ...state,
                isTrackAlreadyGuessed: action.payload
            }

        case ConfigurationAction.ACTIVE_LISTEN:
            return {
                ...state,
                timerListen: { ...state.timerListen, active: action.payload },
                timerGuess: { ...state.timerGuess, active: false },
                timerSong: { ...state.timerSong, active: false }
            }
        case ConfigurationAction.ACTIVE_GUESS:
            return {
                ...state,
                timerGuess: { ...state.timerGuess, active: action.payload },
                timerListen: { ...state.timerListen, active: false },
                timerSong: { ...state.timerSong, active: false }
            }
        case ConfigurationAction.ACTIVE_SONG:
            return {
                ...state,
                timerSong: { ...state.timerSong, active: action.payload },
                timerGuess: { ...state.timerGuess, active: false },
                timerListen: { ...state.timerListen, active: false }
            }
        case ConfigurationAction.TIME_LISTEN:
            return {
                ...state,
                timerListen: { ...state.timerListen, time: action.payload }
            }
        default:
            return state;
    }
}