import { useEffect, useState } from 'react';
import ApiAuth from '../api/ApiAuth';
import AuthDate from '../api/AuthDate';
import LocalStorageManager from '../api/LocalStorageManager';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const apiAuth = new ApiAuth();
    const authDate = new AuthDate();
    const localStorageManager = new LocalStorageManager();

    useEffect(() => {
        const checkAuthentication = async () => {
            if (authDate.isAuthDateValid()) {
                if (apiAuth.isTokenValid()) {
                    setIsLoggedIn(true);
                } else if (apiAuth.doesRefreshTokenExist()) {
                    await apiAuth.getRefreshedToken();
                    setIsLoggedIn(true);
                }
            } else {
                localStorageManager.resetLocalStorage();
            }
        };
        checkAuthentication();
    }, []);

    return { isLoggedIn, apiAuth };
};

export default useAuth;