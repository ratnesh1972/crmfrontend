import React, { useReducer, useContext } from 'react';
import { FETCHLEADS, ADDLEAD, UPDATELEAD, DELETELEAD } from './leadsTypes';
import leadsReducer from './leadsReducer';
import AlertContext from '../alert/alertContext';
import LeadsContext from './leadsContext';
import axios from 'axios';

//check if token is in local storage
const token = localStorage.getItem('token');

//variable to check if we have token in localstorage or not.
const checkToken = token ? true : false;

//setting headers for our api calls.
const options = {
    headers: {
        'X-Auth-Token': token
    }
}

const LeadsState = (props) => {

    const initialState = {
        loading: true,
        data: []
    }

    //set up alert context
    const { setAlert } = useContext(AlertContext);

    //function to set unauthorized alert 
    const setUnauthAlert = () => setAlert("error", "You are unauthorized, Please login again!");

    //user state
    const [leads, dispatch] = useReducer(leadsReducer, initialState);

    //function to fetch leads data.
    const fetchLeads = async () => {
        //check if token is in localstorage, if not then sent a message as you are unauthorized and login again.
        if (checkToken) {
            try {
                const response = await axios.get('/api/leads', options);
                const leads = response.data;
                dispatch({ type: FETCHLEADS, payload: leads });
            } catch (error) {
                setAlert("error", error.response.data.message);
            }
        } else {
            setUnauthAlert();
        }

    }

    //function to a add new lead data.
    const addLead = async (lead) => {
        if (checkToken) {
            try {
                const response = await axios.post('/api/leads', lead, options);
                const newLead = response.data;
                dispatch({ type: ADDLEAD, payload: newLead });
                setAlert("success", "Lead added succesfully!");
            } catch (error) {
                setAlert("error", error.response.data.message);
            }
        } else {
            setUnauthAlert();
        }
    }

    //function to delete a lead.
    const deleteLead = async (id) => {
        if (checkToken) {
            try {
                const response = await axios.delete(`/api/leads/${id}`, options);
                dispatch({ type: DELETELEAD, payload: id });
                setAlert("success", "Lead deleted successfully!");
            } catch (error) {
                setAlert("error", error.response.data.message);
            }
        } else {
            setUnauthAlert();
        }
    }


    return (
        <LeadsContext.Provider value={{
            leads,
            fetchLeads,
            addLead,
            deleteLead
        }}>
            {props.children}
        </LeadsContext.Provider >
    )
}

export default LeadsState;
