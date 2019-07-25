import React from 'react';
import { Alert } from 'react-bootstrap';

const MyAlert = ({ alertlist }) => {

    if (alertlist){
        return alertlist.map(alert =>{
            return(
            <Alert key={alert.name} variant={alert.variant} onClose={() => setShow(false)} dismissible>
                {alert.text}
            </Alert>
            )
        });
    }else{
        return false;
    }
}

export default MyAlert;