import Global from "../Global/Global";
import axios from "axios";

class ApiAuth {
    async getAccessToken(spotyCode: string): Promise<string> { 
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
            throw error;
        }
    }
}

export default ApiAuth;