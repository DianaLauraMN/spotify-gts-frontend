import Global from "../Global/Global";
import axios from "axios";
import { IApiControllerCalls } from "./IApiSpotify";
import User from "../entities/user/User";
import UserAdapter from "../entities/user/UserAdapter";
import ArtistAdapter from "../entities/artist/ArtistAdapter";
import Artist from "../entities/artist/Artist";
import Track from "../entities/track/Track";
import TrackAdapter from "../entities/track/TrackAdapter";

class ApiSpotify implements IApiControllerCalls {
    async getAccessToken(spotyCode: string): Promise<void> {
        const searchParams = new URLSearchParams({
            code: spotyCode,
            grant_type: "authorization_code",
            redirect_uri: Global.redirect_uri,
            client_id: Global.client_id,
            client_secret: Global.client_secret,
        });

        try {
            const response = await axios.post("https://accounts.spotify.com/api/token", searchParams);
            const accessToken = response.data.access_token;
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            return accessToken;
        } catch (error) {
            throw error; // Re-lanzar el error para que pueda ser manejado más arriba si es necesario
        }
    }
    async getUserData(): Promise<User> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get('http://localhost:3000/api/me', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const userItem: User = UserAdapter.adaptUser(response.data);
            return userItem;
        } catch (error) {
            throw error;
        }
    }
    async getArtistById(artistId: string): Promise<Artist> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/artist/${artistId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const artistItem: Artist = ArtistAdapter.adaptArtist(response.data);
            return artistItem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getTrackById(trackId: string): Promise<Track> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/track/${trackId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const trackItem: Track = TrackAdapter.adaptTrack(response.data);
            return trackItem;
        } catch (error) {
            throw error;
        }
    }
    async getArtistsByName(itemName: string): Promise<Artist[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/search/artists/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const artistsTyped = this.getArtistsListTyped(response.data);
            return artistsTyped;
        } catch (error) {
            throw error;
        }
    }
    async getTracksByName(itemName: string): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/search/tracks/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = this.getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }
    async getUserTopTracks(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/me/top/tracks`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = this.getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }
    async getArtistTopTracks(itemName: string): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/artist/top/tracks/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = this.getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }
    async getArtistAllTracks(itemName: string): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/artist/tracks/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = this.getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }
    async getUserTopArtists(): Promise<Artist[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/me/top/artists`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const artistsTyped = this.getArtistsListTyped(response.data);
            return artistsTyped;
        } catch (error) {
            throw error;
        }
    }
    async getUserPlaylists(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/me/playlists`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = this.getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }
    async getUserSavedTracks(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/me/favorite/tracks`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = this.getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }
    async getUserRecommendations(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`http://localhost:3000/api/me/recommendations`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = this.getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }
    getUserTopGenres(): void {
        throw new Error("Method not implemented.");
    }

    getArtistsListTyped(items: any[]): Artist[] {
        const typedArtists: Artist[] = items.map(item => ArtistAdapter.adaptArtist(item));
        return typedArtists;
    }

    getTracksLsitTyped(items: any[]): Track[] {
        const typedTracks: Track[] = items.map(item => TrackAdapter.adaptTrack(item));
        return typedTracks;
    }
}


export default ApiSpotify;