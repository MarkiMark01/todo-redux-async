import { createAsyncThunk } from '@reduxjs/toolkit';

import { addTodo } from './todoSlice';
import { removeTodo } from './todoSlice';
import { toggleComplete } from './todoSlice';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            // const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
            const response = await fetch('https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks');

            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, { rejectWithValue, dispatch }) {
        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false,
            };
            const response = await fetch('https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });
            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            dispatch(addTodo(data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks/${id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.');
            }
            dispatch(removeTodo({ id }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, { rejectWithValue, dispatch, getState }) {
        const todo = getState().todos.todos.find(todo => todo.id === id);
        try {
            const response = await fetch(`https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });
            if (!response.ok) {
                throw new Error('Can\'t toggle status. Server error.');
            }
            dispatch(toggleComplete({ id }));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
