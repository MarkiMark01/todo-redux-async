import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../shared/authApi';

export const signUp = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signUpApi(data);
            return result;
        } catch ({ responce }) {
            const { status, data } = responce;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
)