import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';
import MyNavbar from './MyNavbar';

const Wrapper = ({ path, component }) => {
    return (
        <div>
            <MyNavbar />
            <Route path={path} component={component} />
        </div>
    )
};

export default Wrapper;