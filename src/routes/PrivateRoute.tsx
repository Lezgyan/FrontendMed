
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export const PrivateRoute: React.FC = () => {
    const { isAuthenticated } = useAppSelector(state => state.user);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
