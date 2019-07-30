import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import CustomInput from '/imports/ui/components/CustomInput';
import { withTracker } from 'meteor/react-meteor-data';
import { Button } from 'react-bootstrap';
import { Accounts } from 'meteor/accounts-base';

const Reset = ({ match }) => {
    const [ password, setPassword ] = useState("");
    const [ confirm,  setConfirm  ] = useState("");
    const token = match.params.token;

    const update = useCallback((e, { name, value }) => {
        switch(name) {
        case 'password':
            setPassword(value);
            break;
        case 'confirm':
            setConfirm(value);
            break;
        }
    }, [ setPassword, setConfirm ]);

    // const send = useCallback((e) => {
    //     console.log(password);
    //     console.log(confirm);
    //     if (password && (password != confirm) ){
    //         console.log("Password are not identical");
    //     }else{
    //         Accounts.resetPassword(token, password);
    //     }
    // }, (err) =>{
    //     if (err) {
    //         console.log(err.reason);
    //     }
    // }, [ password, confirm ]);

    const send = () => {
        if (password && (password != confirm) ){
            console.log("Password are not identical");
        }else{
            Accounts.resetPassword(token, password, (err) => {
                if (err) {
                    console.log(err.reason);
                }
            });
        }
}

    return (
        <div>
            <CustomInput
                update={update}
                type="password"
                name="password"
                key="password"
                value={password}
            />
            <CustomInput
                update={update}
                type="password"
                name="confirm"
                key="confirm"
                value={confirm}
            />
            <Button
                onClick={send}
            >
            Confirm
            </Button>
        </div>
    )
}

// export default withTracker(( password, confirm ) => ({
//         password: password | "",
//         confirm: confirm | ""
// }))(Reset);
export default Reset;
