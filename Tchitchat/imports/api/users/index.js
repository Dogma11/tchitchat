import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Users = Meteor.users;

const UserSchema = new SimpleSchema({
    gender: {
        type: String,
        optional: true,
    },
    old: {
        type: Number,
        optional: true,
    },
    city: {
        type: String,
        optional: true
    },
    created_at: {
        type: Date,
        defaultValue: new Date,
    },
    username: { type: String, label: "Username" },
    services: { type: Object, blackbox: true },
    emails: { type: [Object], optional: true, blackbox: true },
    profile: { type: Object, blackbox: true, optional: true },
});

Users.attachSchema(UserSchema)

export default Users;
