import { api } from '../../api';

export const useQuestions = () => {
  const {
    data: allQuestions,
  } = api.questions.allQuestions.usePublication();

  return { allQuestions };
};
