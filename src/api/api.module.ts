import { createModule } from 'grubba-rpc';
import { questionsModule } from './questions/questions.module';
import './users/server/accounts';

export const apiModule = createModule().addSubmodule(questionsModule).build();

export type ApiModule = typeof apiModule;
