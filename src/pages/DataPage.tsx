
import React, { useEffect } from 'react';
import { loadData } from '../features/data/dataSlice';
import { setLoading } from '../features/settings/settingsSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const DataPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector(state => state.data);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         dispatch(setLoading(true));
    //         await dispatch(loadData());
    //         dispatch(setLoading(false));
    //     };
    //     fetchData();
    // }, [dispatch]);

    return (
        <div>
            <h2>Данные пользователя</h2>
            <ul>
                {items.map((item, index)=> <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};
