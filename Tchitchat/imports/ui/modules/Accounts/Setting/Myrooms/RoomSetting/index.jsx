import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import CustomInput from '/imports/ui/components/CustomInput';
import { Button, Link } from 'react-bootstrap';
import Users from '/imports/api/users';
import { withTracker } from 'meteor/react-meteor-data';
import { Tab } from 'semantic-ui-react'
import Rooms from '/imports/api/rooms';


const RoomSetting = ({ roomid }) => {
    const [ roomname, setRoomname ] = useState("");

    const update = (e, { name, value }) => {
        setRoomname(value);
    }

    const updatename = () => {
        Meteor.call('rooms.update', {id: roomid, name: roomname, owner_id: Meteor.userId()});
        setRoomname("");
    }

    const removeroom = () => {
        Meteor.call('rooms.remove', { id: roomid, owner_id: Meteor.userId() })
        setRoomname("");
        
    }

    return (
        <div>
            <CustomInput 
                update={update}
                type="string"
                name="roomname"
                key="roomname"
                state={{ roomname }}
            />
            <Button onClick={updatename}>
                Change
            </Button>
            <hr/>
            <Button variant="danger" onClick={removeroom}>
                Delete
            </Button>
        </div>
    )
}

export default RoomSetting;