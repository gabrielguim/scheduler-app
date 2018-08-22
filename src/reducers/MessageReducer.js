import initialState from './initialState';
import { getMessage } from '../services/MessageService'
// import * as types from '../actions/actionTypes';

export default function MessageReducer(state = initialState, action) {
    switch (action.type) {
        case 'MESSAGE_RECEIVE': 
            getMessage()
                .then((res) => {
                    console.log(res);
                    
                    return { ...state, data: res.data }
                }).catch((_) => {
                    return state;
                })
        default: 
            return state;
    }
}