import React, { useState, useCallback } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Users from '/imports/api/users';
import { Icon, Segment, SegmentGroup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Userfinder = ({ searchquery, users, fetchedusers }) => {
    console.log(fetchedusers)
    if (fetchedusers) {
        return fetchedusers.map( user => {
            var url = '/users/' + user._id;
            return (
                <Link to={url}>
                    <Segment className="row align-items-center">
                        <Icon name="user" />
                        <div>{user.username} </div>
                    </Segment>
                </Link>
            )
        })
    }else{
        return (
            <div>
                No user found :(
            </div>
        )
    }
}

export default withTracker (({ searchquery }) => {
    const users = Meteor.subscribe('users.search')
    const fetchedusers = Users.find(searchquery && { 'username': {"$regex": searchquery, "$options": "i"} } || {}).fetch()
    return {
        users,
        fetchedusers
    }
})(Userfinder);