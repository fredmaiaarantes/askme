import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from '../../client';

export const useAskQuestion = () => {
  const navigate = useNavigate();

  const submitQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const questionInput = form.elements.namedItem(
      'question'
    ) as HTMLTextAreaElement;
    const descriptionText = questionInput.value;
    try {
      await client.questions.insertQuestion({ description: descriptionText });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return { submitQuestion };
};
