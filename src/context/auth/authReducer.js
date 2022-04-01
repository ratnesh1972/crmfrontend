import { LOGIN, LOADUSER, LOGOUT } from './authTypes';

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isLoggedIn: true
            }
        case LOADUSER:
            return {
                isLoggedIn: true,
                user: action.payload
            }
        case LOGOUT:
            const token = localStorage.getItem('token');
            if (token) {
                localStorage.removeItem('token');
            }
            return {
                isLoggedIn: false,
                user: {}
            }
        default: return state;
    }
}

export default authReducer;