import Track from "../entities/track/Track";
import TrackAdapter from "../entities/track/TrackAdapter";
import { IApiTracksControllerCalls } from "./interfaces/IApiTracks";
import axios from "axios";

const urlBase = 'http://localhost:3000/api';

class ApiTracks implements IApiTracksControllerCalls {
    async getTrackById(trackId: string): Promise<Track> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/track/${trackId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const trackItem: Track = TrackAdapter.adaptTrack(response.data);
            return trackItem;
        } catch (error) {
            throw error;
        }
    }

    async getTracksByName(itemName: string): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/search/tracks/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

    async getUserTopTracks(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/me/top/tracks`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

    async getArtistTopTracks(itemName: string): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/artist/top/tracks/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

    async getAllArtistTracks(itemName: string): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/artist/tracks/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

    async getUserPlaylistsTracks(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/me/playlists`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

    async getUserSavedTracks(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/me/favorite/tracks`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

    async getUserRecommendations(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/me/recommendations`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

    async getUserTopGenresTracks(): Promise<Track[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/me/top/genres/tracks`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {
            throw error;
        }
    }

}

export function getTracksLsitTyped(items: any[]): Track[] {
    const typedTracks: Track[] = items.map(item => TrackAdapter.adaptTrack(item));
    return typedTracks;
}

export default ApiTracks;
