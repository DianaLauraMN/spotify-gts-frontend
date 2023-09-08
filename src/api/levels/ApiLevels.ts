import axios from "axios";
import { ConfigurationGame } from "../interfaces/ConfigurationGame";
import { getTracksLsitTyped } from "../ApiTracks";

const urlBase = 'http://localhost:3000/api';

class ApiLevels {
    async getTracksByLevel(configurationGame: ConfigurationGame) {
        try {
            const token = localStorage.access_token;
            const response = await axios.post(`${urlBase}/tracksByLevel`, {
                configurationGame: configurationGame,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const tracksTyped = getTracksLsitTyped(response.data);
            return tracksTyped;
        } catch (error) {

        }
    }
}

export default ApiLevels;