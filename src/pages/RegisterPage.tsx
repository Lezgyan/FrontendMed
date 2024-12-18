
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { registerUser } from '../features/user/userSlice';
import { setLoading } from '../features/settings/settingsSlice';
import { useNavigate } from 'react-router';

export const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = async () => {
        dispatch(setLoading(true));
        await dispatch(registerUser({ email, password }));
        dispatch(setLoading(false));
        navigate('/profile');
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input placeholder="Пароль" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
};
