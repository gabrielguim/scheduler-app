import axios from 'axios';
import { createSchedulerHeader } from './SchedulerHeader';

const registerUser = (user) => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.post('http://localhost:3001/api/user', user, headers);
}

const getUser = (uid) => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/user/' + uid, headers);
}

const UserService = {
    registerUser,
    getUser
}

export default UserService;