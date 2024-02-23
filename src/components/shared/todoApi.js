import axios from 'axios';

const todoInstance = axios.create({
    baseURL: "https://65d6fc9e27d9a3bc1d79d5de.mockapi.io/t"
})

export const getTasks = async () => {
    const { data } = await todoInstance.get('/tasks');
    return data
};