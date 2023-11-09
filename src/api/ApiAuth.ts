import Global from "../Global/Global";
import axios from "axios";

interface AuthData {
    access_token: string, refresh_token: string, expires_in: string, login_time: string, login_date: string
}

class ApiAuth {
    async getCredentials(spotyCode: string): Promise<void> {

        try {
            const searchParams = new URLSearchParams({
                code: spotyCode,
                grant_type: "authorization_code",
                redirect_uri: Global.redirect_uri,
                client_id: Global.client_id,
                client_secret: Global.client_secret,
            });

            const response = await axios.post("https://accounts.spotify.com/api/token", searchParams);

            if (response.status === 200) {
                const { access_token, expires_in, refresh_token } = response.data;
                if (access_token && expires_in && refresh_token) {
                    const currentDate = this.getCurrentDate();
                    const data: AuthData = {
                        access_token,
                        refresh_token,
                        expires_in,
                        login_time: currentDate.currentTime.toString(),
                        login_date: currentDate.currentFormatDate,
                    }
                    this.saveDataInLocalStorage(data);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // async getRefreshedToken() {
    //     // const refresh_token = localStorage.getItem('refresh_token');
    //     const refreshToken = localStorage.getItem('refresh_token');
    //     if (!refreshToken) throw new Error('Sin refresh token');
    //     try {
    //         const params = new URLSearchParams();
    //         params.append('grant_type', 'refresh_token');
    //         params.append('refresh_token', refreshToken);
    //         params.append('client_id', Global.client_id);

    //         const response = await axios.post('https://accounts.spotify.com/api/token', params.toString(), {
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 'Authorization': 'Basic ' + btoa(Global.client_id + ':' + Global.client_secret)
    //             }
    //         });

    //         if (response.status === 200) {
    //             const { access_token, expires_in, refresh_token } = response.data;
    //             if (access_token && expires_in && refresh_token) {
    //                 const now = new Date();
    //                 const login_time = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    //                 localStorage.setItem('access_token', access_token);
    //                 localStorage.setItem('refresh_token', refresh_token);
    //                 localStorage.setItem('expires_in', (expires_in as number).toString());
    //                 localStorage.setItem('login_time', login_time.toString());

    //                 const expiresIn = parseInt(expires_in, 10);
    //                 return { expires_in: expiresIn, login_time };
    //             }
    //         }
    //     } catch (error) {
    //         // Maneja errores, por ejemplo, muestra un mensaje de error al usuario
    //         console.error('Error al obtener el nuevo token de acceso:', error);
    //     }
    // }

    getRefreshedToken = async (): Promise<void> => {
        const refreshToken: string | null = localStorage.getItem('refresh_token');
        if (!refreshToken) throw new Error('Sin refresh token');

        const params = new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        });

        const authString = `${Global.client_id}:${Global.client_secret}`;
        const base64AuthString = btoa(authString);

        const response = await axios.post("https://accounts.spotify.com/api/token", params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${base64AuthString}`
            }
        });


        if (response.status === 200) {
            console.log('REFRESCO EL TOKEEEEEEEEEEEEEEEEEEN');
            
            console.log('RETORNO UN 200!!!!!!!!!!!!!!!!!!!!!');
            
            const { access_token, expires_in, refresh_token } = response.data;
            if (access_token && expires_in && refresh_token) {
                const currentDate = this.getCurrentDate();
                const data: AuthData = {
                    access_token,
                    refresh_token,
                    expires_in,
                    login_time: currentDate.currentTime.toString(),
                    login_date: currentDate.currentFormatDate,
                }
                this.saveDataInLocalStorage(data);
            }
        }
    }

    getRefreshedTokenbackend = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            const url = `http://localhost:3000/api/auth/refreshToken?refresh_token=${refreshToken}`;

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            if (refreshToken) {
                const response = await axios.post(url, null, config);
                if (response.status === 200) {
                    const { access_token, expires_in, refresh_token } = response.data;
                    if (access_token && expires_in && refresh_token) {
                        const currentDate = this.getCurrentDate();
                        const data: AuthData = {
                            access_token,
                            refresh_token,
                            expires_in,
                            login_time: currentDate.currentTime.toString(),
                            login_date: currentDate.currentFormatDate,
                        }
                        this.saveDataInLocalStorage(data);
                    }
                }
            }

        } catch (error) {
            console.error(error);
        }
    };

    validateToken = () => {
        const { access_token, refresh_token, login_date, login_time, expires_in } = this.getLocalStorageData();
        if (access_token && refresh_token && expires_in && login_time && login_date) {

            const { currentTime } = this.getCurrentDate();

            const loginTimeInSec = parseInt(login_time, 10);
            const expiresInSec = parseInt(expires_in, 10);
            const expirationTimeInSec = loginTimeInSec + expiresInSec;

            console.log(currentTime + ' ' + expirationTimeInSec);
            console.log('TOKEN VALID ' + (currentTime < expirationTimeInSec));
            return currentTime < expirationTimeInSec ? true : false;
        }
        return false;
    }

    validateRefreshToken = () => {
        const { login_date, refresh_token } = this.getLocalStorageData();
        const { currentFormatDate } = this.getCurrentDate();

        if ((currentFormatDate !== login_date) || (!refresh_token)) {
            this.resetLocalStorage();
            return false;
        }
        return true;
    }

    getCurrentDate = () => {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();

        const formatDate: string = `${year}-${month}-${day}`;
        const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        return { currentFormatDate: formatDate, currentTime };
    }

    saveDataInLocalStorage = (auhtData: AuthData) => {
        const { access_token, refresh_token, expires_in, login_date, login_time } = auhtData;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('expires_in', expires_in);
        localStorage.setItem('login_time', login_time);
        localStorage.setItem('login_date', login_date);
    }

    resetLocalStorage = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('login_time');
        localStorage.removeItem('login_date');
        console.log('LOCAL STORAGE RESETEDDDDDDDD');

    }

    getLocalStorageData = () => {
        const access_token = localStorage.getItem('access_token');
        const refresh_token = localStorage.getItem('refresh_token');
        const expires_in = localStorage.getItem('expires_in');
        const login_time = localStorage.getItem('login_time');
        const login_date = localStorage.getItem('login_date');

        const localStorageData: AuthData = {
            access_token: access_token ?? "",
            refresh_token: refresh_token ?? "",
            expires_in: expires_in ?? "",
            login_time: login_time ?? "",
            login_date: login_date ?? ""
        }
        return localStorageData;
    }


}

export default ApiAuth;