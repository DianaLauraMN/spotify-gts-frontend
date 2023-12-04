import { createContext } from "react"
import Artist from "../../entities/artist/Artist";
import User from "../../entities/user/User";
import Track from "../../entities/track/Track";

export interface IStateGTS {
    user: User | null;
    userTopArtists: Artist[];
    userTopGenresSeeds: string[];
    spotifyGenres: string[];
    tracksRecentlyPlayed: Track[],
    searchResultsTracks: Track[],
    searchResultsArtists: Artist[],
    searchResultsGenres: string[],
}

export type GTSContextProps = {
    gtsState: IStateGTS;
    loadUserProfile: () => void;
    loadUserTop6Artists: () => void;
    loadUserTop6GenresSeeds: () => void;
    loadSpotifyGenres: () => void;
    loadTracksRecentlyPlayed: () => void;
    loadSearchResultsTracks: (itemName: string) => void;
    loadSearchResultsArtists: (itemName: string) => void;
    loadSearchResultsGenres: (itemName: string) => void;
    cleanTracksResultsSearch: () => void;
}

export const GTSContext = createContext<GTSContextProps>({} as GTSContextProps);