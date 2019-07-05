import { Meteor } from 'meteor/meteor';

import '/imports/api/rooms/server/';

global.cerr = (message, label = "DEVLOG") => (console.log(`[${label}]`, message), message);

Meteor.startup(() => {
});
