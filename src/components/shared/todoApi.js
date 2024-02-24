

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://65d9d44cbcc50200fcdc2d0c.mockapi.io/tasks/',
});

export const getTasks = async () => {
    const { data } = await instance.get('/todo');
    return data;
}

