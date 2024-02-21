import axios from 'axios';

const todoInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
})

export const createTodo = async (data) => {
    const { data: result } = await todoInstance.post('/contacts', data);
    return result
};