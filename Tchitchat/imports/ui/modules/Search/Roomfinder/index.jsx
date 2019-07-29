import React, { useState, useCallback } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Rooms from '/imports/api/rooms';
import { Icon, Segment, SegmentGroup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Roomfinder = ({ searchquery, rooms, fetchedrooms }) => {
    if (fetchedrooms.length > 0){
        console.log("yo")
        return fetchedrooms.map( room => {
            var url = '/rooms/' + room._id;
            return (
                <Link to={url}>
                    <Segment className="row align-items-center">
                        <Icon name="group" />
                        <div>{room.name}</div>
                    </Segment>
                </Link>
            )
        })
    }else{
        return (
            <div>
                No room found :(
            </div>
        )
    }    
}

export default withTracker (({ searchquery }) => {
    const rooms = Meteor.subscribe('rooms.search', { name: searchquery})
    const fetchedrooms = Rooms.find(searchquery && { 'name': {"$regex": searchquery, "$options": "i"} } || {}).fetch()
    return {
        rooms,
        fetchedrooms
    }
})(Roomfinder);