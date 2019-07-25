import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Users = Meteor.users;

const UserSchema = new SimpleSchema({
    username: {
        type: String,
        optional: false,
    },
    password: {
        type: String,
    },
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
    }
});

Users.attachSchema(UserSchema)

export default Users;
