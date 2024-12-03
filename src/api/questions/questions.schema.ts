import { z } from 'zod';

export const QuestionSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  description: z.string(),
  userName: z.string(),
  userAvatarUrl: z.string().url(),
  votes: z.number().default(0).optional(),
  voters: z.array(z.string()).optional(),
});

export const InsertQuestionInputSchema = z.object({
  description: z.string(),
});

export const QuestionIdInputSchema = z.object({
  questionId: z.string(),
});

export type InsertQuestionInput = z.infer<typeof InsertQuestionInputSchema>;
export type Question = z.infer<typeof QuestionSchema>;
export type QuestionIdInput = z.infer<typeof QuestionIdInputSchema>;
