import { z } from 'zod';

export const QuestionSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  description: z.string(),
  userName: z.string(),
  userAvatarUrl: z.string().url(),
  votes: z.number().default(0),
  voters: z.array(z.string()).optional(),
});

export type Question = z.infer<typeof QuestionSchema>;
