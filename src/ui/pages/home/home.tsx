import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserId } from 'meteor/react-meteor-accounts';
import { RemovalConfirmation } from './removal-confirmation';
import { QuestionListItem } from './question-list-item';
import { client } from '../../client';
import { Question } from '@/api/questions/questions.schema';

export default function Home() {
  const [removalQuestionId, setRemovalQuestionId] = useState('');
  const userId = useUserId();
  
  const { data: allQuestions } = client.questions.findAll.usePublication();

  return (
    <>
      <RemovalConfirmation questionId={removalQuestionId} />
      <div className="card mx-auto max-w-screen-lg shadow-xl">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h1
              className="text-lg leading-none text-gray-600 dark:text-gray-200"
              tabIndex={0}
            >
              Last Questions
            </h1>
            {userId ? (
              <Link
                role="button"
                className="btn btn-primary"
                to="/ask"
                aria-label="Ask a new question"
              >
                Ask a Question
              </Link>
            ) : null}
          </div>
          <div className="flow-root">
            {allQuestions.length === 0 ? (
              <p>No questions available.</p>
            ) : (
              <ul
                className="divide-y divide-gray-200 dark:divide-gray-700"
                aria-label="List of questions"
              >
                {allQuestions.map((question, index) => (
                  <QuestionListItem
                    key={question._id}
                    question={question as Question}
                    loggedUserId={userId}
                    setRemovalQuestionId={setRemovalQuestionId}
                    isLast={index === allQuestions.length - 1}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
