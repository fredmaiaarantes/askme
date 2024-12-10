import { Meteor } from 'meteor/meteor';
import { Roles } from "meteor/roles";

import './api.module';

Meteor.startup(async () => {
  console.log('Server has started!');

  await createRoles();
});

const createRoles = async () => {
  const roles = await Roles.getAllRoles().fetchAsync();

  if (!roles.length) {
    await Roles.createRoleAsync("admin");
  }
};
