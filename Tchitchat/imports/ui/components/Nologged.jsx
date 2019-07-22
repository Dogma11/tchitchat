import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';
import Wrapper from './Wrapper';

const Nologged = ({ path, component, userId }) => {
    if (userId) {
        return <Redirect to="/" />
    }
    else 
    {
        return (
            <div>
                <Wrapper path={path} component={component} />
            </div>
        )
    }
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Nologged);