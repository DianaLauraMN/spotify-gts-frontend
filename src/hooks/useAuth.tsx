import { useEffect, useState } from 'react';
import ApiAuth from '../api/ApiAuth';
import AuthDate from '../api/AuthDate';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const apiAuth = new ApiAuth();
    const authDate = new AuthDate();

    useEffect(() => {
        const checkAuthentication = async () => {
            if (authDate.isAuthDateValid()) {
                if (apiAuth.isTokenValid()) {
                    setIsLoggedIn(true);
                } else if (apiAuth.doesRefreshTokenExist()) {
                    await apiAuth.getRefreshedToken();
                    setIsLoggedIn(true);
                }
            }
        };
        checkAuthentication();
    }, []);

    return { isLoggedIn, apiAuth };
};

export default useAuth;