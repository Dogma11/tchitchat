import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import Users from '..';

Meteor.methods({
  "users.update"({ id, gender, old, city, username, email }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    emails = [{
      'address': email,
      'verified': false
    }]
    const user = Users.findOne(id);
    console.log('userId : ' + user._id + ' versus this.userId : ' + id);
    if (user._id != id) {
      throw new Meteor.Error('403', 'Nope.');
    }
    
    Users.update(id, { $set: { gender, old, city, username, emails } });
  },
  "users.sendForgot"({ email }) {
    if (!email) {
      throw new Meteor.Error('422', 'Missing parameter');
    }
    const user = Users.findOne({ 'emails.address': email });
    const id = user._id;
    Accounts.sendResetPasswordEmail(id);
  },
  "users.verifyEmail"( { userId }) {
    console.log(userId);
    if (!userId) {
      throw new Meteor.Error('422', 'No user provided');
    }
    Accounts.sendVerificationEmail(userId);
  },
});
