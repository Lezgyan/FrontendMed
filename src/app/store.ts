
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import settingsReducer from '../features/settings/settingsSlice';
import dataReducer from '../features/data/dataSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        settings: settingsReducer,
        data: dataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
