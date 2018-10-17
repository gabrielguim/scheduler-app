import { getTokenAndUID } from '../store/StoreService';

export const createSchedulerHeader = () => {
    const { uid, token } = getTokenAndUID();

    return  {
        'Content-Type': 'application/json',
        'fir-token': token,
        'user-uid': uid
    }
} 
