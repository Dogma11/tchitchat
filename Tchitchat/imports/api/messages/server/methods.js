import { Meteor } from 'meteor/meteor';
import Messages from '..';

Meteor.methods({
  "messages.create"({ user_id, room_id, content, owner_id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    console.log(room_id)
    if (room_id) {
        Messages.insert({
            user_id: user_id,
            room_id: room_id,
            content: content,
            owner_id: owner_id,
            created_at: new Date()
        });
    }
    else
    {
        Messages.insert({
            user_id: user_id,
            content: content,
            owner_id: owner_id,
            created_at: new Date()
        });
    }
  },

  "messages.update"({ id, title, content }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }

    const message = messages.findOne(id);

    if (message.userId !== this.userId) {
      throw new Meteor.Error('403', 'You must be the owner of message');
    }
    
    Messages.update(id, { $set: { content } });
  },

  "messages.remove"({ id }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }

    const message = messages.findOne(id);

    if (message.userId !== this.userId) {
      throw new Meteor.Error('403', 'You must be the owner of message');
    }

    Messages.remove(id);
  },
});
