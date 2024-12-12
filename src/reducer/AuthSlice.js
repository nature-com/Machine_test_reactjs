import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = AuthSlice.actions;
export default AuthSlice.reducer;