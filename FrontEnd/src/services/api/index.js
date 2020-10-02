import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.86.5:3000',
});

export default api;
