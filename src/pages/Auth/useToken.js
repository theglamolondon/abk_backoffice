import { useState } from 'react';

export default function useToken() {
    const getUser = () => {
        const userRaw = sessionStorage.getItem('abk_user');
        return (userRaw === "undefined") ? false : JSON.parse(userRaw);
    };

    const [userSession, setUserSession] = useState(getUser());

    const saveUser = user => {
        sessionStorage.setItem('abk_user', JSON.stringify(user));
        setUserSession(user);
    };

    return {
        setUserSession: saveUser,
        userSession
    }
}