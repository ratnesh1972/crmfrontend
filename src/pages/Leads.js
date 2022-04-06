import React, { useContext, useEffect } from 'react';

//UI Imports
import LeadsForm from '../components/leads/LeadsForm';
import LeadsTable from '../components/leads/LeadsTable';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//Context & States
import leadsContext from '../context/leads/leadsContext';
import authContext from '../context/auth/authContext';


const Leads = () => {

    //use auth state to get users id.
    const { state } = useContext(authContext);
    //use leads context to use leads data and dispatch functions
    const leadsContx = useContext(leadsContext);

    //fetch leads in useEffect
    useEffect(() => {
        leadsContx.fetchLeads();
        //eslint-disable-next-line        
    }, [])

    return (
        <Box sx={{ paddingY: "48px" }}>
            <Grid container columnGap={5}>
                <Grid item md={4}>
                    <LeadsForm addLead={leadsContx.addLead} id={state.user._id} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <h1>Leads</h1>
                    <hr />
                    <LeadsTable leads={leadsContx.state} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Leads;
