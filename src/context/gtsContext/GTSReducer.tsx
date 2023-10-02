import Artist from "../../entities/artist/Artist";
import Track from "../../entities/track/Track";
import User from "../../entities/user/User";
import { IStateGTS } from "./GTSContext";

export enum GTSAction {
    LOAD_USER_PROFILE = 0,
    LOAD_USER_TOP_ARTISTS = 1,
    LOAD_USER_TOP_GENRES_SEEDS = 2,
    LOAD_TRACKS_RECENTLY_PLAYED = 3,
    LOAD_TRACKS_ITEMS_SEARCHED_RESULTS = 4,
    HANDLE_IS_NEW_SEARCH = 5,
    CLEAN_SEARCH = 6,
}

type gtsAction =
    | { type: GTSAction.LOAD_USER_PROFILE, payload: User }
    | { type: GTSAction.LOAD_USER_TOP_ARTISTS, payload: Artist[] }
    | { type: GTSAction.LOAD_USER_TOP_GENRES_SEEDS, payload: string[] }
    | { type: GTSAction.LOAD_TRACKS_RECENTLY_PLAYED, payload: Track[] }
    | { type: GTSAction.LOAD_TRACKS_ITEMS_SEARCHED_RESULTS, payload: Track[] }
    | { type: GTSAction.HANDLE_IS_NEW_SEARCH, payload: boolean }
    | { type: GTSAction.CLEAN_SEARCH, payload: Track[]}

export const GTSReducer = (state: IStateGTS, action: gtsAction): IStateGTS => {
    switch (action.type) {
        case GTSAction.LOAD_USER_PROFILE:
            return {
                ...state,
                user: action.payload
            }

        case GTSAction.LOAD_USER_TOP_ARTISTS:
            return {
                ...state,
                userTopArtists: action.payload
            }

        case GTSAction.LOAD_USER_TOP_GENRES_SEEDS:
            return {
                ...state,
                userTopGenresSeeds: action.payload
            }

        case GTSAction.LOAD_TRACKS_RECENTLY_PLAYED:
            return {
                ...state,
                tracksRecentlyPlayed: action.payload
            }

        case GTSAction.LOAD_TRACKS_ITEMS_SEARCHED_RESULTS:
            return {
                ...state,
                searchResultsTracks: action.payload
            }

        case GTSAction.HANDLE_IS_NEW_SEARCH:
            return {
                ...state,
                isNewSearch: action.payload
            }

        case GTSAction.CLEAN_SEARCH:
            return {
                ...state,
                searchResultsTracks: action.payload
            }

        default:
            return state;
    }
}