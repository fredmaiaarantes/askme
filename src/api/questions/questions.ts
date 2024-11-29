import { Mongo } from 'meteor/mongo';
import { Question } from '@/shared/schemas/question';

export const Questions = new Mongo.Collection<Question>('questions');
