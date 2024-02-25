

import axios from 'axios';

const url = 'https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks';

export const getTasks = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('An error occurred while executing the request:', error);
        throw error;
    }
}
export const addTasks = async (data) => {
    try {
        const { data: result } = await axios.post(url, data);
        return result;
    } catch (error) {
        console.error('An error occurred while executing the request:', error);
        throw error;
    }
}
