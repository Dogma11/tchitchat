import { Meteor } from 'meteor/meteor';
import Rooms from '..';

Meteor.methods({
  "rooms.create"({ name, owner_id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    if (Rooms.findOne({ name: name })){
      throw new Meteor.Error('400', 'Name already exist');
    }
    if (owner_id != this.userId){
      throw new Meteor.Error('403', 'you cant assign a room to another budy');
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
    if (Rooms.findOne({ name: name })){
      throw new Meteor.Error('400', 'Name already exist');
    }
    const room = Rooms.findOne(id);

    if (room.owner_id !== owner_id || owner_id != this.userId) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }
    
    Rooms.update(id, { $set: { name } });
  },

  "rooms.remove"({ id, owner_id  }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    if (room.owner_id !== owner_id || owner_id != this.userId) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }
    const room = Rooms.findOne(id);

    if (room.owner_id !== owner_id) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }

    Rooms.remove(id);
  },
  "rooms.getName"({ id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    console.log(Rooms.findOne({_id: id}).name)
    return Rooms.findOne({_id: id}).name;
  }
});
