import axios from 'axios';

export const registerUser = () => {
    const headers = {
        headers: this.createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/user', headers);
}

export const getUser = (uid) => {
    const headers = {
        headers: this.createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/user', headers);
}