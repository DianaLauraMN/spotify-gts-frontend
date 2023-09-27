import { createContext } from "react"
import Artist from "../../entities/artist/Artist";
import User from "../../entities/user/User";

export interface IStateGTS {
    user: User|null;
    userTopArtists: Artist[];
    userTopGenresSeeds: string[];
}

export type GTSContextProps = {
    apiState: IStateGTS;
    loadUserProfile: () => void;
    loadUserTop6Artists: () => void;
    loadUserTop6GenresSeeds: () => void;
}

export const GTSContext = createContext<GTSContextProps>({} as GTSContextProps);