import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { User } from '../users.schema';

// The profile option is added directly to the new user document and published to the client.
Accounts.onCreateUser((_options, meteorUser: Meteor.User) => {
  const user = meteorUser as User;
  if (!user.profile) {
    user.profile = {
      name: '',
      avatar: '',
      email: '',
    };
  }

  if (user.services && user.services.github) {
    user.profile.name = user.services.github.name;
    user.profile.avatar = user.services.github.avatar;
    user.profile.email = user.services.github.email;

    if (!user.username) {
      user.username = user.services.github.username;
    }
  }
  return user;
});
