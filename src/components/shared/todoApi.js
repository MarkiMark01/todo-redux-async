

import axios from 'axios';

const url = 'https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks';

export const getTasks = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Сталася помилка при виконанні запиту:', error);
        throw error;
    }
}
