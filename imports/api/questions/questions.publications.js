import { Meteor } from 'meteor/meteor';
import { Questions } from './questions';

Meteor.publish('questions', function questionsPublication() {
  return Questions.find();
});