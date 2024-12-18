
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState } from '../../types/settings';

const initialState: SettingsState = {
    loading: false,
    showErrorModal: false,
    errorMessage: '',
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setErrorModal(state, action: PayloadAction<{show: boolean; message?: string}>) {
            state.showErrorModal = action.payload.show;
            state.errorMessage = action.payload.message || '';
        },
    },
});

export const { setLoading, setErrorModal } = settingsSlice.actions;
export default settingsSlice.reducer;
