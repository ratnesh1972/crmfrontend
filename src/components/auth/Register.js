import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Register() {


    return (
        <Box mt="20px">
            <Grid container>
                <Grid itme md={4}></Grid>
                <Grid item xs={12} md={4} px={{ xs: "5px", md: "30px" }}>
                    <Box>
                        <Typography variant="h4" textAlign="center" marginBottom="16px">
                            CRM
                        </Typography>
                        <TextField
                            variant="outlined"
                            name="firstname"
                            placeholder="First Name"
                            type="text"
                            fullWidth
                            sx={{ marginBottom: "16px" }}
                        />
                        <TextField
                            variant="outlined"
                            name="lastname"
                            placeholder="Last Name"
                            type="text"
                            fullWidth
                            sx={{ marginBottom: "16px" }}
                        />
                        <TextField
                            variant="outlined"
                            name="username"
                            placeholder="Username"
                            type="text"
                            fullWidth
                            sx={{ marginBottom: "16px" }}
                        />
                        <TextField
                            variant="outlined"
                            name="password"
                            placeholder="Password"
                            type="password"
                            fullWidth
                            sx={{ marginBottom: "16px" }}
                        />
                        <Button variant="contained" color="secondary" fullWidth>Register</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box >
    )
}

export default Register;
