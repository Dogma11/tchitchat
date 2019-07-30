import { Meteor } from 'meteor/meteor';
import Rooms from '..';


Meteor.publish("rooms.findAll", ({ owner_id }) => {
    if (!this.userId){
      throw new Meteor.Error('403', 'You must be connected');
    }
    if (!owner_id != this.userId){
      throw new Meteor.Error('403', 'You cannot track someone his room');
    }
    return Rooms.find({"owner_id": owner_id})
  }
);
Meteor.publish("rooms.myroom", ({id}) => {
    if (!this.userId){
      throw new Meteor.Error('403', 'You must be connected');
    }
    console.log(Rooms.find({_id: id}))
    return Rooms.find({_id: id})
  }
)
Meteor.publish("rooms.search", ({ name }) => {
  if (!name){
    throw new Meteor.Error('200', 'No room name !');
  }
  if (this.userId){
    throw new Meteor.Error('403', 'You must be connected');
  }
  return Rooms.find({})
}
)