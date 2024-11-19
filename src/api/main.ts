import { Meteor } from 'meteor/meteor';
import '/src/api/questions/methods/questions.methods';
import '/src/api/questions/publications/questions.publications';
import '/src/api/questions/questions';
import '/src/api/users/server/accounts';

Meteor.startup(async () => {
  console.log('Server has started!');
});
