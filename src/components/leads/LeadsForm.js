//React Imports
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

//UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Regular expression for phone no.
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

//Validation schema for leads
const validationSchema = yup.object({
    name: yup
        .string('Enter Name')
        .required('Name is required'),
    company: yup
        .string('Enter Company')
        .required('Company is required'),
    phone: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid'),
    status: yup
        .string('Select Status')
        .required('Status is required'),
});

//status options for leads.
const status = ['New', 'Lost', 'Contacted', 'Canceled', 'Qualified', 'Confirmed'];

const LeadsForm = ({ addLeadHandler, id }) => {

    //set up initial values for form
    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            phone: '',
            status: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const lead = { ...values, created_by: id };
            addLeadHandler(lead);
            formik.resetForm();
        }
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                {/* Name Field */}
                <TextField
                    variant="outlined"
                    name="name"
                    placeholder="Name"
                    type="text"
                    fullWidth
                    sx={{ marginBottom: "16px" }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                {/* Company Field */}
                <TextField
                    variant="outlined"
                    name="company"
                    placeholder="Company"
                    type="text"
                    fullWidth
                    sx={{ marginBottom: "16px" }}
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    error={formik.touched.company && Boolean(formik.errors.company)}
                    helperText={formik.touched.company && formik.errors.company}
                />
                {/* Phone Field */}
                <TextField
                    variant="outlined"
                    name="phone"
                    placeholder="Phone Number"
                    type="text"
                    fullWidth
                    sx={{ marginBottom: "16px" }}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                {/* Status Field */}
                <TextField
                    select
                    variant="outlined"
                    name="status"
                    label="Status"
                    placeholder="Status"
                    fullWidth
                    sx={{ marginBottom: "16px" }}
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                    helperText={formik.touched.status && formik.errors.status}
                >
                    {status.map((option) => (
                        <MenuItem
                            value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" color="primary" type="submit" fullWidth>Add New Lead</Button>
            </form>
        </Box>
    )
}

export default LeadsForm
