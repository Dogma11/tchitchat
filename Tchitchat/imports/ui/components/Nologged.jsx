import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

const Nologged = ({ path, component, userId }) => {
    if (userId) {
        return <Redirect to="/" />
    }
    else 
    {
        return <Route path={path} component={component} />
    }
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Nologged);