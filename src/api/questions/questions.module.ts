import { createModule } from 'grubba-rpc';
import {
  InsertQuestionInputSchema,
  QuestionIdInputSchema,
} from './questions.schema';
import {
  findAll,
  findAllByUserId,
  insertQuestion,
  removeQuestion,
  upvoteQuestion,
} from './questions.service';
import { z } from 'zod';

export const questionsModule = createModule('questions')
  .addMethod('insertQuestion', InsertQuestionInputSchema, insertQuestion)
  .addMethod('removeQuestion', QuestionIdInputSchema, removeQuestion)
  .addMethod('upvoteQuestion', QuestionIdInputSchema, upvoteQuestion)
  .addPublication('findAll', z.void(), findAll)
  .addPublication('findAllByUserId', z.void(), findAllByUserId)
  .buildSubmodule();
