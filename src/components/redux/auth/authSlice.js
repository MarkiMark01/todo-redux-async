import { createSlice } from "@reduxjs/toolkit";

import { signUp } from "./authOperations";

const initialState = {
    user: {},
    isLogin: false,
    token: '',
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.token = payload.token;
                state.isLogin = true;
            })
            .addCase(signUp.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

    }
})
export default authSlice.reducer;