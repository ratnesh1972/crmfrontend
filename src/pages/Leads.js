import React from 'react';

//UI Imports
import LeadsForm from '../components/leads/LeadsForm';
import LeadsTable from '../components/leads/LeadsTable';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Leads = () => {
    return (
        <Box sx={{ paddingY: "48px" }}>
            <Grid container columnGap={5}>
                <Grid item md={4}>
                    <LeadsForm />
                </Grid>
                <Grid item xs={12} md={7}>
                    <h1>Leads</h1>
                    <hr />
                    <LeadsTable />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Leads;
