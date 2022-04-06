import React, { useReducer, useContext } from 'react';
import { FETCHLEADS, ADDLEAD, UPDATELEAD, DELETELEAD } from './leadsTypes';
import leadsReducer from './leadsReducer';
import AlertContext from '../alert/alertContext';
import LeadsContext from './leadsContext';
import axios from 'axios';

const LeadsState = (props) => {

    const initialState = {
        loading: true,
        data: []
    }

    //set up alert context
    const { setAlert } = useContext(AlertContext);

    //user state
    const [state, dispatch] = useReducer(leadsReducer, initialState);

    //function to fetch leads data.
    const fetchLeads = async () => {
        const token = localStorage.getItem('token');
        //check if token is in localstorage, if not then sent a message as you are unauthorized and login again.
        if (token) {
            try {
                const response = await axios.get('/api/leads', {
                    headers: {
                        'X-Auth-Token': token
                    }
                });

                const leads = response.data;
                dispatch({ type: FETCHLEADS, payload: leads });
            } catch (error) {
                setAlert("error", error.response.data.message);
            }
        } else {
            setAlert("error", "You are unauthorized, Please login again!");
        }

    }

    //function to a add new lead data.
    const addLead = async (lead) => {
        const token = localStorage.getItem('token');
        //check if token is in localstorage, if not then sent a message as you are unauthorized and login again.
        if (token) {
            try {
                const response = await axios.post('/api/leads', lead, {
                    headers: {
                        'X-Auth-Token': token
                    }
                });

                const newLead = response.data;

                dispatch({ type: ADDLEAD, payload: newLead });
                setAlert("success", "Lead added succesfully!");
            } catch (error) {
                setAlert("error", error.response.data.message);
            }
        } else {
            setAlert("error", "You are unauthorized, Please login again!");
        }

    }


    return (
        <LeadsContext.Provider value={{
            state,
            fetchLeads,
            addLead
        }}>
            {props.children}
        </LeadsContext.Provider >
    )
}

export default LeadsState;
