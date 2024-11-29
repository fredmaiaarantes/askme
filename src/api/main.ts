import { Meteor } from 'meteor/meteor';
import './questions/questions.methods';
import './questions/server/questions.publications';
import './users/server/accounts';
import { createModule } from 'grubba-rpc';
import { questionsModule } from './questions/questions.module';

export const server = createModule()
  .addSubmodule(questionsModule)
  .build();

export type Server = typeof server;

Meteor.startup(async () => {
  console.log('Server has started!');
});
