import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Messages = new Mongo.Collection('Messages');

const MessageSchema = new SimpleSchema({
    user_id: {
        type: [String],
    },
    room_id: {
        type: String
    }
});


Messages.attachSchema(MessageSchema)

export default Messages;
