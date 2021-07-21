import { useState } from 'react';

export default function useToken() {
    const getUser = () => {
        const userRaw = sessionStorage.getItem('abk_user');
        return (userRaw === "undefined") ? false : JSON.parse(userRaw);
    };

    const [user, setUser] = useState(getUser());

    const saveUser = user => {
        sessionStorage.setItem('abk_user', JSON.stringify(user));
        setUser(user);
    };

    return {
        setUser: saveUser,
        user
    }
}