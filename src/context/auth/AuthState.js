import React, { useReducer, useContext } from 'react';
import { LOGIN, LOADUSER, LOGOUT } from './authTypes';
import authReducer from './authReducer';
import AuthContext from './authContext';
import AlertContext from '../alert/alertContext';
import axios from 'axios';

function AuthState(props) {

    const initialState = {
        isLoggedIn: false,
        user: {}
    }

    //set up alert context
    const { setAlert } = useContext(AlertContext);

    //user state
    const [state, dispatch] = useReducer(authReducer, initialState);

    //function to load user once we get a token in our localstorage
    const loadUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.get('/api/auth', {
                    headers: {
                        'X-Auth-Token': token
                    }
                });
                const user = response.data;
                dispatch({ type: LOADUSER, payload: user });
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    //function submit the login data and get the token.
    const getLoggedIn = async (data) => {
        try {
            const response = await axios.post('/api/auth', data);
            dispatch({ type: LOGIN, payload: response.data });
            loadUser();
            setAlert("success", "Logged In!");
        } catch (error) {
            setAlert("error", error.response.data.message);
        }
    }

    //function to reset the login to false and remove token from localstorage.
    const logout = () => {
        try {
            dispatch({ type: LOGOUT });
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <AuthContext.Provider value={{
            state,
            getLoggedIn,
            loadUser,
            logout
        }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthState;
