import { Meteor } from 'meteor/meteor';
import Messages from '..';

Users = Meteor.users;

Meteor.publish('messages.lasts', ({ ids, roomid }) => {
  console.log(roomid)
  if (!ids) {
    throw new Meteor.Error ('403', 'You must be connected');
  }
  if (!roomid) {
    return Messages.find({ user_id: ids }, {
      sort: { createdAt: -1 }
    });
  }else {
    const messages = Messages.find({room_id: roomid}, {
      sort: { createdAt: -1 }
    })
    const arrayofmsg = messages.fetch()
    const idlist = arrayofmsg.map(a => a.user_id[0])
    console.log(Users.find({ _id: { $in: idlist}}, { _id: 1, created_at: 1, username: 1 }).fetch())
    return [
      messages,
      Users.find({ _id: { $in: idlist}}, { _id: 1, created_at: 1, username: 1 })
    ]
  }
});
