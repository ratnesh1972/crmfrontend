import { SETALERT, CLEARALERT } from './alertTypes';

const alertReducer = (state, action) => {
    switch (action.type) {
        case SETALERT:
            return action.payload
        case CLEARALERT:
            return {
                type: '',
                message: ''
            }
        default: return state;
    }
}

export default alertReducer;