
import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setErrorModal } from '../features/settings/settingsSlice';

export const ErrorModal: React.FC = () => {
    const { showErrorModal, errorMessage } = useAppSelector(state => state.settings);
    const dispatch = useAppDispatch();

    if (!showErrorModal) return null;

    return (
        <div style={{
            position:'fixed',
            top:0, left:0, right:0,bottom:0,
            backgroundColor:'rgba(0,0,0,0.5)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <div style={{ background:'white', padding:'20px' }}>
                <h2>Ошибка</h2>
                <p>{errorMessage}</p>
                <button onClick={() => dispatch(setErrorModal({show:false}))}>Закрыть</button>
            </div>
        </div>
    );
};
