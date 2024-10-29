import { Accounts } from 'meteor/accounts-base';

// The profile option is added directly to the new user document and published to the client.
Accounts.onCreateUser((options, user) => {
  if (!user.profile) {
    user.profile = {};
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
