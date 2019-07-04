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
        type: String
    },
    birthdate: {
        type: Date
    },
    city: {
        type: String
    },
    created_at: {
        type: Date
    }
});


Users.attachSchema(UserSchema)

export default Users;
