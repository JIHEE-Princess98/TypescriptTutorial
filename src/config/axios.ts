import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
});
