import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Messages = new Mongo.Collection('Messages');

const MessageSchema = new SimpleSchema({
    user_id: {
        type: [String],
    },
    room_id: {
        type: String,
        optional: true
    },
    content: {
        type: String,
    },
    created_at: {
        type: Date,
    },
    owner_id: {
        type: String,
        optional: true
    }
});


Messages.attachSchema(MessageSchema)

export default Messages;
