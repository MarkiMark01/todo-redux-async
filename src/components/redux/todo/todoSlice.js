import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from './todoOperations';

const initialState = {
    todos: [],
    loading: null,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Ваші редуктори тут, якщо є
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default todoSlice.reducer;
