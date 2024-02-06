import axios from 'axios';

const authInstance = axios.create({
    base_URL: "https://connections-api.herokuapp.com"
});

export const signUpApi = async (data) => {
    const { data: result } = await authInstance.post('/users/signup', data);
    authInstance.defaults.headers.common.authorization = `Bearer ${result.token}`;
    return result;
};

