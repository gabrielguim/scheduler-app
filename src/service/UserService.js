import axios from 'axios';
import { createSchedulerHeader } from './SchedulerHeader';

export const registerUser = () => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/user', headers);
}

export const getUser = (uid) => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/user', headers);
}