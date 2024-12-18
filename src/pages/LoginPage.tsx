
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { loginUser } from '../features/user/userSlice';
import { setLoading } from '../features/settings/settingsSlice';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        dispatch(setLoading(true));
        await dispatch(loginUser({ email, password }));
        dispatch(setLoading(false));
        navigate('/profile');
    };

    return (
        <div>
            <h2>Вход</h2>
            <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input placeholder="Пароль" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};
