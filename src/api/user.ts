import {axiosInstance} from "../config/axios.ts";

export const fetchUser = async () => {
    const response = await axiosInstance.get('/users');
    if(!response.data){
        throw new Error('No data Found');
    }
    return response.data;
}
