import { Meteor } from 'meteor/meteor';

import Users from '..';
import Messages from '/imports/api/messages';

Meteor.publish('users.search', () => {
    return Users.find({}, { username: 1});
});
Meteor.publish('users.findFriend', ({ id }) => {
    return Users.find({_id: id}, { username: 1});
});
Meteor.publish('users.getUsersOfRoom', ({ roomid }) => {
    message = Messages.find({ room_id: roomid }, { _id: 0, owner_id: 0, content: 0, created_at: 0, room_id: 0 }).fetch();
    usersid = Object.values(message);
    console.log(message)
    return Users.find({_id: { $in: usersid }}, { username: 1});
});