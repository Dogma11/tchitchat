import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import Messages from '/imports/api/messages';
import Users from '/imports/api/users';
import Loader from '/imports/ui/components/Loader';

const ChatContent = ({ userids, allmessages, messages, roomid, allusers }) => {

    if (messages) {
        return messages.map(message => {
            var owneruser = Users.findOne({_id: message.owner_id});
            var day = message.created_at.getDate();
            var monthIndex = message.created_at.getMonth();
            var year = message.created_at.getFullYear();
            return(
                <Comment>
                    {/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
                    <Comment.Content>
                        <Comment.Author as='a' className={ (message.user_id.includes(Meteor.userId())) && 'text-warning' || '' }>
                            {owneruser.username}
                        </Comment.Author>
                        <Comment.Metadata>
                            {day + "/" + monthIndex + "/" + year}
                        </Comment.Metadata>
                        <Comment.Text>{message.content}</Comment.Text>
                    </Comment.Content>
                </Comment>
            )
        })
    }else{
        return false;
    }
}

export default withTracker ( ({roomid, userids}) => {
    const allmessages = Meteor.subscribe('messages.lasts', { ids: userids, roomid: roomid });
    const messages = Messages.find({}).fetch();
    // const roomusers = Meteor.subscribe('users.getUsersOfRoom', { roomid: roomid });
    const allusers = Meteor.subscribe('users.search');
    return {
        userids,
        allmessages,
        messages,
        allusers
        // roomusers
    }
}) (ChatContent);