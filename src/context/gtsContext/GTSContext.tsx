import { createContext } from "react"
import Artist from "../../entities/artist/Artist";
import User from "../../entities/user/User";
import Track from "../../entities/track/Track";

export interface IStateGTS {
    user: User | null;
    userTopArtists: Artist[];
    userTopGenresSeeds: string[];
    tracksRecentlyPlayed: Track[],
    searchResultsTracks: Track[],
    isNewSearch: boolean,
}

export type GTSContextProps = {
    gtsState: IStateGTS;
    loadUserProfile: () => void;
    loadUserTop6Artists: () => void;
    loadUserTop6GenresSeeds: () => void;
    loadTracksRecentlyPlayed: () => void;
    loadSearchResultsTracks: (itemName: string) => void;
    handleIsNewSearch: (isNewSearch: boolean) => void;
    cleanSearch: () => void;
}

export const GTSContext = createContext<GTSContextProps>({} as GTSContextProps);