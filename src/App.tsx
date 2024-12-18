
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GreetingPage } from './pages/GreetingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { DataPage } from './pages/DataPage';
import { PrivateRoute } from './routes/PrivateRoute';
import { useAppSelector } from './hooks';
import { Navbar } from './components/Navbar';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorModal } from './components/ErrorModal';
import './App.css';
const App: React.FC = () => {
    const { loading } = useAppSelector(state => state.settings);

    return (
        <>
            <Navbar />
            {loading && <LoadingSpinner />}
            <ErrorModal />
            <Routes>
                <Route path="/" element={<GreetingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/data" element={<DataPage />} />
                </Route>

                <Route path="*" element={<div>Страница не найдена</div>} />
            </Routes>
        </>
    );
};

export default App;
