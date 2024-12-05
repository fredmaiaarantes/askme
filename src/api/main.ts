import { Meteor } from 'meteor/meteor';
import { Roles } from "meteor/roles";

import './api.module';

Meteor.startup(async () => {
  console.log('Server has started!');

  await createRolesAndAdmin();
});

const createRolesAndAdmin = async () => {
  const roles = Roles.getAllRoles().fetch();

  if (!roles.length) {
    await Roles.createRoleAsync("user");
    await Roles.createRoleAsync("admin");
  }
};
