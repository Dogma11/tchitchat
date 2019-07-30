import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import MySidebar from './MySidebar';

const Wrapper = ({ path, component, userId }) => {
    const [ alertlist, setAlertlist ] = useState(""); 
    if (userId){
        return (
            <div>
                <MyNavbar path={path} alertlist={alertlist}/>
                <div className="row">
                    <MySidebar path={path} />
                    <Route path={path} component={component}/>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <MyNavbar path={path} alertlist={alertlist}/>
                <Route path={path} component={component}/>
            </div>
        )
    }
};

export default withTracker((alertlist) => {
    return {
        userId: Meteor.userId(),
        alertlist: alertlist | [],
    }
}) (Wrapper, Route)