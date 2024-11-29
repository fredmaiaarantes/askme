import { Meteor } from 'meteor/meteor';
import './questions/questions.module';
import '.questions/methods/questions.methods';
import '.questions/publications/questions.publications';
import './questions/questions';
import './users/server/accounts';
import { createModule } from 'grubba-rpc';
import { questionsModule } from './questions/questions.module';

const server = createModule()
  .addSubmodule(questionsModule)
  .build();

export type Server = typeof server;

Meteor.startup(async () => {
  console.log('Server has started!');
});
