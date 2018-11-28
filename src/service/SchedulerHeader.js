import StoreService from '../store/StoreService';

export const createSchedulerHeader = () => {
    const { uid, token } = StoreService.getTokenAndUID();

    return  {
        'Content-Type': 'application/json',
        'fir-token': token,
        'user-uid': uid
    }
} 
