import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from './todoOperations';

const initialState = {
    todos: [],
    loading: null,
    error: null,
};

const todosSlice = createSlice({
    name: 'todo',
    initialState,
    selectors: {
        selectTodos: state => state.todos
    },
    reducers: {
        addNewTask(state, action) {
            state.todos.push(action.payload)
        }
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
export const { selectTodos } = todosSlice.selectors;
export default todosSlice.reducer;
