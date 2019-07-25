import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Rooms = new Mongo.Collection('Rooms');

const RoomSchema = new SimpleSchema({
    name: {
        type: String,
    },
    owner_id: {
        type: String,
    }
});

Rooms.attachSchema(RoomSchema)

export default Rooms;
