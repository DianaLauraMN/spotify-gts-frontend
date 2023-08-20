import User from "../entities/user/User";
export interface IApiControllerCalls {
    // getAuthentication():void;
    // getCallback():void;
    getAccessToken(spotyCode: string): Promise<any>;
    getUserData(): Promise<User>;
    getArtistById(artistId: string): void;
    getTrackById(trackId: string): void;
    getArtistsByName(itemName:string): void;
    getTracksByName(itemName:string): void;
    getUserTopTracks(): void;
    getArtistTopTracks(itemName:string): void;
    getArtistAllTracks(itemName:string): void;
    getUserTopArtists(): void;
    getUserPlaylists(): void;
    getUserSavedTracks(): void;
    getUserRecommendations(): void; //listo
    getUserTopGenres(): void;
}