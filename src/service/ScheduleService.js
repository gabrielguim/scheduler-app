import axios from 'axios';
import { createSchedulerHeader } from './SchedulerHeader';

const addCalendar = (calendar) => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.post('http://localhost:3001/api/calendar', calendar, headers);
}

const searchCalendar = (id, text) => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/calendar/' + id + '?text=' + text, headers);
}

const getSharedCalendars = (userEmail) => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/calendar/shared/' + userEmail, headers);
}

const getCalendarsForUser = (id) => {
    const headers = {
        headers: createSchedulerHeader()
    }

    return axios.get('http://localhost:3001/api/calendar/' + id, headers);
}

const removeCalendar = (calendarId, id) => {
    const headers = {
        headers: createSchedulerHeader()
    }
    
    return axios.delete('http://localhost:3001/api/calendar/' + calendarId + '/' + id, headers);
}


const ScheduleService = {
    addCalendar,
    getCalendarsForUser,
    removeCalendar,
    getSharedCalendars,
    searchCalendar
}

export default ScheduleService;