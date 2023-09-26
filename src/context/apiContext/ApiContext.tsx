import { createContext } from "react"
import Artist from "../../entities/artist/Artist";
import User from "../../entities/user/User";

export interface IApiState {
    user: User|null;
    userTopArtists: Artist[];
    userTopGenresSeeds: string[];
}

export type ApiContextProps = {
    apiState: IApiState;
    loadUserProfile: () => void;
    loadUserTop6Artists: () => void;
    loadUserTop6GenresSeeds: () => void;
}

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps);