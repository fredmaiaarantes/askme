import { Meteor } from 'meteor/meteor';
import '../src/api/questions/questions.module';
import '../src/api/questions/methods/questions.methods';
import '../src/api/questions/publications/questions.publications';
import '../src/api/questions/questions';
import '../src/api/users/server/accounts';
import { createModule } from 'grubba-rpc';
import { questionsModule } from '../src/api/questions/questions.module';

const server = createModule()
  .addSubmodule(questionsModule)
  .build();

export type Server = typeof server;

Meteor.startup(async () => {
  console.log('Server has started!');
});
