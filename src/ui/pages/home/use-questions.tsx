import { useFind, useTracker } from 'meteor/react-meteor-data';
import { subscribeToAllQuestions } from '../../../api/questions/publications/questions.publications';
import { Questions } from '../../../api/questions/questions';

export const useQuestions = () => {
  const isReady = useTracker(() => {
    const handle = subscribeToAllQuestions();
    return handle.ready();
  });

  const questions = useFind(
    () => Questions.find({}, { sort: { createdAt: -1 } }),
    []
  );
  return { isReady, questions };
};
