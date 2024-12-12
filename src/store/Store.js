import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../reducer/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
    },
});