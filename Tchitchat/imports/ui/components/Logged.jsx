import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';
import Wrapper from './Wrapper';

const Logged = ({ path, component, userId }) => {
    if (userId) {
        return (
            <div>
                <Wrapper path={path} component={component} />
            </div>
        )
    }
    else
    {
        return <Redirect to="/signin" />
    }
};

export default withTracker(() => ({
    userId: Meteor.userId()
}))(Logged);