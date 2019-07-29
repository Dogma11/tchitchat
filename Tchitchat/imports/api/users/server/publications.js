import { Meteor } from 'meteor/meteor';

import Users from '..';

Meteor.publish('users.search', () => {
    return Users.find({}, { username: 1});
});
Meteor.publish('users.findFriend', ({ id }) => {
    return Users.find({_id: id}, { username: 1});
});
