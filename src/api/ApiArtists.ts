import Artist from "../entities/artist/Artist";
import ArtistAdapter from "../entities/artist/ArtistAdapter";
import { IApiArtistsControllerCalls } from "./interfaces/IApiArtists";
import axios from "axios";

const urlBase = 'http://localhost:3000/api';

class ApiArtists implements IApiArtistsControllerCalls {
    async getArtistById(artistId: string): Promise<Artist> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/artist/${artistId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const artistItem: Artist = ArtistAdapter.adaptArtist(response.data);
            return artistItem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getArtistsByName(itemName: string): Promise<Artist[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/search/artists/${itemName}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const artistsTyped = this.getArtistsListTyped(response.data);
            return artistsTyped;
        } catch (error) {
            throw error;
        }
    }

    async getUserTopArtists(): Promise<Artist[]> {
        try {
            const token = localStorage.access_token;
            const response = await axios.get(`${urlBase}/me/top/artists`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const artistsTyped = this.getArtistsListTyped(response.data);
            return artistsTyped;
        } catch (error) {
            throw error;
        }
    }

    getArtistsListTyped(items: any[]): Artist[] {
        const typedArtists: Artist[] = items.map(item => ArtistAdapter.adaptArtist(item));
        return typedArtists;
    }
}

export default ApiArtists;