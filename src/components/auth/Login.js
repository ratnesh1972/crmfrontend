import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as yup from 'yup';
import authContext from '../../context/auth/authContext';
import AlertBox from '../alert/AlertBox';

const validationSchema = yup.object({
    username: yup
        .string('Enter Username')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter Password')
        .min(3, 'Password should be of minimum 3 characters length')
        .required('Password is required'),
});


const Login = () => {

    const auth = useContext(authContext);
    const { state, getLoggedIn, loadUser } = auth;
    const navigate = useNavigate();

    useEffect(() => {
        loadUser();
        if (state.isLoggedIn) {
            navigate('/');
        }
        //eslint-disable-next-line
    }, [state.isLoggedIn])


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            getLoggedIn(values);
        }
    });


    return (
        <Box mt="20px">
            <Grid container>
                <Grid item md={4}></Grid>
                <Grid item xs={12} md={4} px={{ xs: "5px", md: "30px" }}>
                    <Box>
                        <Typography variant="h4" textAlign="center" marginBottom="16px">
                            CRM
                        </Typography>
                        <AlertBox />
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                variant="outlined"
                                name="username"
                                placeholder="Username"
                                type="text"
                                fullWidth
                                sx={{ marginBottom: "16px" }}
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                            />
                            <TextField
                                variant="outlined"
                                name="password"
                                placeholder="Password"
                                type="password"
                                fullWidth
                                sx={{ marginBottom: "16px" }}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button variant="contained" color="secondary" type="submit" fullWidth>Login</Button>
                        </form>
                    </Box>
                </Grid>

            </Grid>
        </Box >
    )
}

export default Login;
