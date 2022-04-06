import { FETCHLEADS, ADDLEAD, UPDATELEAD, DELETELEAD } from './leadsTypes';

const leadsReducer = (state, action) => {
    switch (action.type) {
        case FETCHLEADS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ADDLEAD:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload]
            }
        default: return state;
    }

}

export default leadsReducer;