import React, { useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Redirect } from 'react-router-dom';

const Verify = ({ match }) => {
    const token = match.params.token;
    if (token){
        const err = Accounts.verifyEmail(token, (err) =>{
            if (err) {
                return err;
            }else{
                return false;
            }
        });
        console.log(err);
        if (err){
            return (<div>{err.reason}</div>);
        }else{
            return(<Redirect to='/' />);
        }
    }else{
        return (
            <div>
                <h2 className="text-center col-lg-12">Something went wrong :(</h2>
            </div>
        );
    }
};

export default Verify;