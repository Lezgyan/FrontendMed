
import React from 'react';
import {Link } from 'react-router';
import { useAppSelector, useAppDispatch } from '../hooks';
import { logout } from '../features/user/userSlice';

export const Navbar: React.FC = () => {
    const { isAuthenticated } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <nav style={{background:'#eee', padding:'10px'}}>
            <Link to="/">Приветствие</Link> |{' '}
            {!isAuthenticated && <><Link to="/login">Вход</Link> | <Link to="/register">Регистрация</Link></>}
            {isAuthenticated && <>
                <Link to="/profile">Профиль</Link> | <Link to="/data">Данные</Link> | <button onClick={() => dispatch(logout())}>Выход</button>
            </>}
        </nav>
    );
};
