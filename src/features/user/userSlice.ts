
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/user';
import { loginApi, registerApi } from '../../api/authApi';

const initialState: UserState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials: {email: string; password: string}) => {
        const response = await loginApi(credentials.email, credentials.password);
        return response;
    }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (data: {email: string; password: string}) => {
        const response = await registerApi(data.email, data.password);
        return response;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
