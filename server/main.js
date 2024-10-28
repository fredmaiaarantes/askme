import { Meteor } from 'meteor/meteor';
import '/imports/api/questions/questions';

Meteor.startup(async () => {
  console.log('Server has started!');
});
