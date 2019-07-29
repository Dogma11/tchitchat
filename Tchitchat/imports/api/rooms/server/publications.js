import { Meteor } from 'meteor/meteor';
import Rooms from '..';


Meteor.publish("rooms.findAll", ({ owner_id }) => {
    if (!owner_id){
      throw new Meteor.Error('403', 'You must be connected');
    }
    return Rooms.find({"owner_id": owner_id})
  }
);
Meteor.publish("rooms.myroom", ({id}) => {
    if (!id){
      throw new Meteor.Error('403', 'You must be connected');
    }
    return Rooms.find({_id: id})
  }
)
Meteor.publish("rooms.search", ({ name }) => {
  if (!name){
    throw new Meteor.Error('200', 'No room name !');
  }
  return Rooms.find({})
}
)