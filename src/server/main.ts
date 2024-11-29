import { Meteor } from 'meteor/meteor';
import '../api/questions/questions.module';
import '../src/api/questions/methods/questions.methods';
import '../src/api/questions/publications/questions.publications';
import '../api/questions/questions';
import '../api/users/server/accounts';
import { createModule } from 'grubba-rpc';
import { questionsModule } from '../api/questions/questions.module';

const server = createModule()
  .addSubmodule(questionsModule)
  .build();

export type Server = typeof server;

Meteor.startup(async () => {
  console.log('Server has started!');
});
