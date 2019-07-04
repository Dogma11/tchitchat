import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

const Logged = ({ path, component, userId }) => {
    if (userId) {
        return <Route path={path} component={component} />
    }
    else
    {
        return <Redirect to="/signin" />
    }
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Logged);