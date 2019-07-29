import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import Users from '..';

Meteor.methods({
  "users.update"({ id, gender, birthdate, city, username, email }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    if (id != this.userId) {
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
    values = {};
    if (user.gender != gender){
      values.gender = gender;
    }
    if (user.birthdate != birthdate){
      values.birthdate = birthdate;
    }
    if (user.city != city){
      values.city = city;
    }
    if (user.username != username && username != ""){
      values.username = username;
    }
    if (user.emails != emails){
      values.emails = emails;
    }
    return Users.update(id, { $set: values });
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
