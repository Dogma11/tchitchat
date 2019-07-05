import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Users = Meteor.users;

const UserSchema = new SimpleSchema({
    username: {
        type: [String],
    },
    email: {
        type: String
    },
    gender: {
        type: String,
        optional: true,
    },
    birthdate: {
        type: Date,
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
