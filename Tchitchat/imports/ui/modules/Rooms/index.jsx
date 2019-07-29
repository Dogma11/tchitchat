import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Rooms from '/imports/api/rooms';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Loader from '/imports/ui/components/Loader';
import ChatContent from '/imports/ui/components/ChatContent';

const Room = ({ user, userId, match, theroom, myroom, roomid }) => {

  const [ msg, setMsg ]= useState("");

  const send = () => {
    Meteor.call("messages.create", {
      content: msg,
      user_id: [userId],
      room_id: roomid,
    })
    setMsg("");
  }

  const update = useCallback((e, { name, value }) => {
      console.log(name);
      switch(name) {
        case 'msg':
          setMsg(value);
          break;
      }
    }, [ setMsg ]);
    
    if (myroom){
      return (
        <div className="mt-5 w-25">
          <Comment.Group className="h-50 wrap">
            <Header as='h3' dividing>
              {myroom.name}
            </Header>
            <ChatContent roomid={roomid}/>
          </Comment.Group>

          <Form className="row w-100">
            <Form.Input onChange={update} name="msg" value={msg} className="w-75" />
            <Button className="w-25" content='Send' labelPosition='left' icon='send' primary onClick={send} />
          </Form>
        </div>
        );
    }else{
      return false;
    }
};

export default withTracker((component) => {
  const roomid = component.match.params.id;
  const theroom = Meteor.subscribe('rooms.myroom', { id: roomid });
  const myroom = Rooms.find(roomid).fetch()[0];
  return ({
    user: Meteor.user() || "",
    userId: Meteor.userId() || "",
    theroom,
    myroom,
    roomid
  })
})(Room);