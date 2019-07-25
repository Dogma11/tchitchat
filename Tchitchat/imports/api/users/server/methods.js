import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

Users = Meteor.users;

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
    console.log('userId : ' + id + ' versus this.userId : ' + this.userId);
    if (user.userId !== this.userId) {
      throw new Meteor.Error('403', 'Nope.');
    }
    
    Users.update(id, { $set: { gender, old, city, username, emails } });
  },
  "users.sendForgot"({ email }) {
    if (!email) {
      throw new Meteor.Error('422', 'Missing parameter');
    }
    const user = Users.findOne({ 'emails.address': email });
    Accounts.sendResetPasswordEmail(user._id, email);
  },
  "users.verifyEmail"( { userId }) {
    console.log(userId);
    if (!userId) {
      throw new Meteor.Error('422', 'No user provided');
    }
    Accounts.sendVerificationEmail(userId);
  },
});
