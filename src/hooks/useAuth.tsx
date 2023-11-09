import { useEffect, useState } from 'react';
import ApiAuth from '../api/ApiAuth';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const apiAuth = new ApiAuth();

    useEffect(() => {
        const checkAuthentication = async () => {
            if (apiAuth.validateToken()) {
                setIsLoggedIn(true);
            } else if (apiAuth.validateRefreshToken()) {
                await apiAuth.getRefreshedToken();
                setIsLoggedIn(true);
            }
        };
        checkAuthentication();
    }, []);

    return { isLoggedIn, apiAuth };
};

export default useAuth;
