import { z } from 'zod';

const UserProfileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url(),
});

export const UserSchema = z.object({
  _id: z.string(),
  username: z.string(),
  email: z.string().optional(),
  profile: UserProfileSchema,
  emails: z
    .array(
      z.object({
        address: z.string().email(),
        verified: z.boolean(),
      })
    )
    .optional(),
  createdAt: z.date().optional(),
  services: z
    .object({
      github: z
        .object({
          name: z.string(),
          avatar: z.string(),
          email: z.string().email(),
          username: z.string(),
        })
        .optional(),
    })
    .optional(),
});

export type User = z.infer<typeof UserSchema>;
