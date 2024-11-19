import { Meteor } from 'meteor/meteor';
import { User } from '../../shared/schemas/user';

export function checkLoggedIn() {
  if (!Meteor.userId()) {
    throw new Meteor.Error('Error', 'Not authorized.');
  }
}

export async function getLoggedUser() {
  return (await Meteor.userAsync()) as User;
}
