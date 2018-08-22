import axios from 'axios';

export const getMessage = () => {
    return axios.get("localhost:3001/api")
}