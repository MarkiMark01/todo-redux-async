import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../shared/todoApi';

export const fetchTodos = createAsyncThunk(
    '/tasks/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await api.getTasks()
            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);