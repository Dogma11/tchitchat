import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import '/imports/api/rooms/server/';
import '/imports/api/users/server/';
import '/imports/api/messages/server/';

global.cerr = (message, label = "DEVLOG") => (console.log(`[${label}]`, message), message);

Accounts.emailTemplates.resetPassword.text = (user, url) => {
    url = url.replace('/#/reset-password', '/reset');
    console.log(url);
    return " URL link to reset password: " + url;
};
Accounts.emailTemplates.verifyEmail.text = (user, url) => {
    url = url.replace('/#/verify-email', '/verify');
    console.log(url);
    return " URL link to verify your account: " + url;
};
Accounts.config({
    sendVerificationEmail: true,
    forbidClientAccountCreation: false 
});

Meteor.startup(() => {
});
