import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import alertContext from '../../context/alert/alertContext';
import Container from '@mui/material/Container';

const AlertBox = () => {
    const { state } = useContext(alertContext);

    return (
        <Container sx={{ marginTop: "16px" }}>
            {state.message !== '' && (<Alert severity={state.type} sx={{ marginBottom: "16px" }}>
                {state.message}
            </Alert>)}
        </Container>
    )
}

export default AlertBox;