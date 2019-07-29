import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Redirect, Link } from 'react-router-dom';
import Rooms from '/imports/api/rooms';

const RoomList = ({ allroom, rooms, user, ready }) => {
    if (rooms){
        return rooms.map(room => {
            var id = room._id;
            var url = "/rooms/" + id;
            return (
            <Menu.Item as="a" id={room._id} href={url}>
                <Icon name='home' />
                {room.name}
            </Menu.Item>
        )});
    }else{
        return false;
    }
   
}

export default withTracker(()=> {
    const allroom = Meteor.subscribe('rooms.findAll', { owner_id: Meteor.userId() });
    const ready = allroom.ready();
    const rooms = Rooms.find({}, { sort: { createdAt: -1 } }).fetch();
    return ({
        user: Meteor.user() || '',
        allroom,
        rooms,
        ready
    })
})(RoomList);