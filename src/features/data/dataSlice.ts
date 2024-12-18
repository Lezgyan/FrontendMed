import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataState} from '../../types/data';
import {fetchUserData} from '../../api/userApi';

const initialState: DataState = {
    items: [],
};

// Указываем типы для createAsyncThunk
export const loadData = createAsyncThunk<string[], void>(
    'data/loadData',
    async () => {
        // Симуляция API вызова
        return await new Promise<string[]>((resolve) =>
            setTimeout(() => resolve(['Item 1', 'Item 2', 'Item 3']), 1000)
        );
    }
);

// Создаём Slice
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            loadData.fulfilled,
            (state, action: PayloadAction<string[]>) => {
                state.items = action.payload;
            }
        );
    },
});

export default dataSlice.reducer;
