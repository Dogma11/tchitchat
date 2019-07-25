import { Meteor } from 'meteor/meteor';
import Rooms from '..';

Meteor.methods({
  "rooms.create"({ name, owner_id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    Rooms.insert({
      name,
      owner_id
    });
  },

  "rooms.update"({ id, title, content }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }

    const room = rooms.findOne(id);

    if (room.userId !== this.userId) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }
    
    Rooms.update(id, { $set: { name } });
  },

  "rooms.remove"({ id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }

    const room = rooms.findOne(id);

    if (room.userId !== this.userId) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }

    Rooms.remove(id);
  },
  "rooms.findAll"({ owner_id }) {
    if (!owner_id){
      throw new Meteor.Error('403', 'You must be connected');
    }
    
    return { rooms: Rooms.find({"owner_id": owner_id}).fetch() }
  }
});
