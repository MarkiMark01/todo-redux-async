
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks, addTasks } from '../../shared/todoApi';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const data = await getTasks();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const addTodos = createAsyncThunk(
    'todos/addTodos',
    async function (data, { rejectWithValue }) {
        try {
            const result = await addTasks(data);
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);







// export const fetchTodos = createAsyncThunk(
//     'todos/fetchTodos',
//     async function (_, { rejectWithValue }) {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
//             if (!response.ok) {
//                 throw new Error('Server Error!');
//             }
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );