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

  "rooms.update"({ id, name, owner_id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    console.log("*****************************************")
    console.log(name)
    const room = Rooms.findOne(id);

    if (room.owner_id !== owner_id) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }
    
    Rooms.update(id, { $set: { name } });
  },

  "rooms.remove"({ id, owner_id  }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }

    const room = Rooms.findOne(id);

    if (room.owner_id !== owner_id) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }

    Rooms.remove(id);
  },
});
