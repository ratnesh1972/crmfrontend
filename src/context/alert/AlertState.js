import React, { useReducer } from 'react';
import { SETALERT, CLEARALERT } from './alertTypes';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';

const AlertState = (props) => {

    const initialState = {
        type: '',
        message: ''
    }

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = async (type, message) => {
        //If any alert message is present, clear it first.
        if (state.message !== '') {
            dispatch({ type: CLEARALERT });
        }

        //dispatch new alert.
        dispatch({ type: SETALERT, payload: { type, message } });

        //clear the alert message after 5 seconds.
        setTimeout(() => dispatch({ type: CLEARALERT }), 5000);
    }

    return (
        <AlertContext.Provider value={{
            state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider >
    )
}

export default AlertState;
