import { Meteor } from 'meteor/meteor';
import '/imports/api/questions/questions';
import '/imports/api/questions/questions.publications';
import '/imports/api/questions/questions.methods';
import '/imports/api/users/server/accounts';

Meteor.startup(async () => {
  console.log('Server has started!');
});
