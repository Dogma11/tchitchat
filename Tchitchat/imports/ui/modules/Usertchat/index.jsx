import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Users from '/imports/api/users';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Loader from '/imports/ui/components/Loader';
import ChatContent from '/imports/ui/components/ChatContent';

const Usertchat = ({ userids, match, theuser, targetuser }) => {
    const [ msg, setMsg ]= useState("");

    const send = () => {
        Meteor.call("messages.create", {
            content: msg,
            room_id: false,
            user_id: userids,
            owner_id: Meteor.userId()
        })
        setMsg("");
    }
    
    const update = useCallback((e, { name, value }) => {
        switch(name) {
        case 'msg':
            setMsg(value);
            break;
        }
    }, [ setMsg ]);

    if (targetuser){
        return (
        <div className="mt-5 w-25">
            <Comment.Group className="h-50 wrap">
            <Header as='h3' dividing>
                {targetuser.username}
            </Header>
            <ChatContent userids={userids} roomid={false}/>
            </Comment.Group>

            <Form className="row w-100">
            <Form.Input onChange={update} name="msg" value={msg} className="w-75" />
            <Button content='Send' labelPosition='left' icon='send' primary onClick={send} />
            </Form>
        </div>
        );
    }else{
        return false;
    }
};

export default withTracker((component, roomid) => {
    const userid = component.match.params.id;
    const theuser = Meteor.subscribe('users.findFriend', { id: userid });
    const targetuser = Users.findOne({_id: userid});
    return ({
        userids: [Meteor.userId() || "", userid],
        theuser,
        targetuser
    })
})(Usertchat);