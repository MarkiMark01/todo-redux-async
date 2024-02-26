
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks, addTasks } from '../../shared/todoApi';
import addNewTask from '../todo/todosSlice'

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
// export const addTodos = createAsyncThunk(
//     'todos/addTodos',
//     async function (text, { rejectWithValue }) {
//         try {
//             const todo = {
//                 title: text,
//                 id: 1,
//                 completed: false,
//             };
//             const data = await addTasks(todo);
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );



export const addTodos = createAsyncThunk(
    'todos/addTodos',
    async function (text, { dispatch, rejectWithValue }) {
        try {
            const todo = {
                title: text,
                id: 1,
                completed: false,
            };
            const response = await addTasks(todo);
            const data = response.data;
            dispatch(addNewTask(data));
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