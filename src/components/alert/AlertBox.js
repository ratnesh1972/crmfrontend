import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import alertContext from '../../context/alert/alertContext';

const AlertBox = () => {

    const { state } = useContext(alertContext);

    return (
        state.message !== '' && (<Alert severity={state.type} sx={{ marginY: "16px" }}>
            {state.message}
        </Alert>)
    )
}

export default AlertBox;