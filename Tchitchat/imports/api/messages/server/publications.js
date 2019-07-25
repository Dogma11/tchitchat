import { Meteor } from 'meteor/meteor';
import Messages from '..';

Users = Meteor.users;

Meteor.publish('messages.lasts', ({ ids, roomid }) => {
  if (!ids) {
    throw new Meteor.Error ('403', 'You must be connected');
  }
  console.log("room : " + roomid);
  console.log("ids : " + ids);
  if (!roomid) {
    return Messages.find({ user_id: ids }, {
      sort: { createdAt: -1 }
    });
  }else {
    return [
      Messages.find({ user_id: ids, room_id: roomid}, {
        sort: { createdAt: -1 }
      }),
      Users.find({_id: ids})
    ]
  }
});
