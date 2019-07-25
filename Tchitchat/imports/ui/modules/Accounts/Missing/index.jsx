import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import CustomInput from '/imports/ui/components/CustomInput';
import { Button } from 'react-bootstrap';


const Missing = () => {
    const [ email, setEmail ] = useState("");

    const update = useCallback((e, { name, value }) => {
        switch(name) {
        case 'email':
            setEmail(value);
            break;
        }
    }, [ setEmail ]);

    const send = () => {
        Meteor.call("users.sendForgot", { email: email });
    }
    return (
        <div>
            <CustomInput
                update={update}
                type="string"
                name="email"
                key="email"
                state={{ email }}
            /> 
            <Button
                onClick={send}
            >
            Envoyer
            </Button>
        </div>
    );
};

export default Missing