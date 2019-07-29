import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import CustomInput from '/imports/ui/components/CustomInput';
import { Button, Link } from 'react-bootstrap';
import Users from '/imports/api/users';
import { withTracker } from 'meteor/react-meteor-data';
import { Tab } from 'semantic-ui-react'
import Rooms from '/imports/api/rooms';
import RoomSetting from './RoomSetting';

const Myrooms = ({ rooms, user, allroom, ready}) => {

    const panes = rooms.map(room => ({
        menuItem: room.name, render: () => <RoomSetting as={room._id} roomid={room._id} />
    }))

    return (
        <Tab menu={{ fluid: true, vertical: false, tabular: true, secondary: true, pointing: true }} panes={panes} className="room-list"/>
    )
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
})(Myrooms);