import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import Messages from '/imports/api/messages';

import Loader from '/imports/ui/components/Loader';

const ChatContent = ({ user, userId, allmessages, messages, roomid }) => {  
    console.log(messages)  
    if (messages) {
        return messages.map(message => {
            var day = message.created_at.getDate();
            var monthIndex = message.created_at.getMonth();
            var year = message.created_at.getFullYear();
            return(
                <Comment>
                    {/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
                    <Comment.Content>
                        <Comment.Author as='a'>
                            {Meteor.users.findOne({_id: message.user_id[0]}).username}
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

export default withTracker ( ({roomid}) => {
    console.log(roomid)
    const allmessages = Meteor.subscribe('messages.lasts', { ids: [Meteor.userId()], roomid: roomid });
    const messages = Messages.find({}).fetch();
    return {
        userId: Meteor.userId() | '',
        user: Meteor.user | '',
        allmessages,
        messages
    }
}) (ChatContent);