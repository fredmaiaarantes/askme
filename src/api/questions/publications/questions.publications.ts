import { createPublication } from 'meteor/zodern:relay';
import { z } from 'zod';
import { Questions } from '../questions';

export const subscribeToAllQuestions = createPublication({
  schema: z.undefined(),
  run() {
    return Questions.find();
  },
});
