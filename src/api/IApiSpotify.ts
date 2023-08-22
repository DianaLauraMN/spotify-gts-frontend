import User from "../entities/user/User";
import Artist from "../entities/artist/Artist";
import Track from "../entities/track/Track";

export interface IApiControllerCalls {
    // getAuthentication():Promise<void>;
    // getCallback():Promise<void>;
    getAccessToken(spotyCode: string): Promise<any>;
    getUserData(): Promise<User>;
    getArtistById(artistId: string): Promise<Artist>;
    getTrackById(trackId: string): Promise<Track>;
    getArtistsByName(itemName: string): Promise<Artist[]>;
    getTracksByName(itemName: string): Promise<Track[]>;
    getUserTopTracks(): Promise<Track[]>;
    getArtistTopTracks(itemName: string): Promise<Track[]>;
    getAllArtistTracks(itemName: string): Promise<Track[]>;
    getUserTopArtists(): Promise<Artist[]>;
    getUserPlaylistsTracks(): Promise<Track[]>;
    getUserSavedTracks(): Promise<Track[]>;
    getUserRecommendations(): Promise<Track[]>;
    getTracksByGenre(genreName: string): Promise<Track[]>;
    getUserTopGenres(): Promise<void>;
}