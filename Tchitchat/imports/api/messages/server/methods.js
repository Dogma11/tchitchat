import { Meteor } from 'meteor/meteor';
import Messages from '..';

Meteor.methods({
  "messages.create"({ user_id, room_id, content }) {
    if (!this.userId) {
      throw new Meteor.Error('403', 'You must be connected');
    }
    if (room_id) {
        Messages.insert({
            user_id: user_id,
            room_id: room_id,
            content: content,
            created_at: new Date()
        });
    }
    else
    {
        Messages.insert({
            user_id: user_id,
            content: content,
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
