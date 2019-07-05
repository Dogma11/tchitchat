// import { Meteor } from 'meteor/meteor';
// import Users from '..';

// Meteor.methods({
//   "users.update"({ id, gender, birthdate, city }) {
//     if (!this.userId) {
//       throw new Meteor.Error('403', 'You must be connected');
//     }

//     const room = Users.findOne(id);

//     if (room.userId !== this.userId) {
//       throw new Meteor.Error('403', 'You must be the owner of room');
//     }
    
//     Users.update(id, { $set: { gender, birthdate, city } });
//   }
// });
