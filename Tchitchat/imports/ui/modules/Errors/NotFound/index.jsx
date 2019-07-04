import React, { useCallback } from 'react';
import { Meteor } from 'meteor/meteor';



const NotFound = ({ user }) => {
    return (
        <div>
            <h1>FEED ME { user && user.username || ''}</h1>
        </div>
    );
};

export default NotFound