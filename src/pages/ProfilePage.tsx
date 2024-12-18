
import React from 'react';
import { useAppSelector } from '../hooks';

export const ProfilePage: React.FC = () => {
    const { user } = useAppSelector(state => state.user);

    if (!user) {
        return <div>Профиль недоступен.</div>;
    }

    return (
        <div>
            <h2>Профиль пользователя</h2>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};
