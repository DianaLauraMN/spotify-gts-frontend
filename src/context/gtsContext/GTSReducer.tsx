import Artist from "../../entities/artist/Artist";
import User from "../../entities/user/User";
import { IStateGTS } from "./GTSContext";

export enum ApiAction {
    LOAD_USER_PROFILE = 0,
    LOAD_USER_TOP_ARTISTS = 1,
    LOAD_USER_TOP_GENRES_SEEDS = 2,
}

type apiAction =
    | { type: ApiAction.LOAD_USER_PROFILE, payload: User }
    | { type: ApiAction.LOAD_USER_TOP_ARTISTS, payload: Artist[] }
    | { type: ApiAction.LOAD_USER_TOP_GENRES_SEEDS, payload: string[] }

export const GTSReducer = (state: IStateGTS, action: apiAction): IStateGTS => {
    switch (action.type) {
        case ApiAction.LOAD_USER_PROFILE:
            return {
                ...state,
                user: action.payload
            }

        case ApiAction.LOAD_USER_TOP_ARTISTS:
            return {
                ...state,
                userTopArtists: action.payload
            }

        case ApiAction.LOAD_USER_TOP_GENRES_SEEDS:
            return {
                ...state,
                userTopGenresSeeds: action.payload
            }
            
        default:
            return state;
    }
}