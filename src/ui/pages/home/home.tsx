import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserId } from 'meteor/react-meteor-accounts';
import { Meteor } from 'meteor/meteor';
import { RemovalConfirmation } from './removal-confirmation';
import { Error } from '../../components/error';
import { QuestionListItem } from './question-list-item';
import { Question } from '../../../shared/schemas/question';
import { client } from '../../client';

export default function Home() {
  const [error, setError] = useState<Meteor.Error | null>(null);
  const [removalQuestionId, setRemovalQuestionId] = useState('');
  const userId = useUserId();
  const { data: allQuestions } = client.questions.findAll.usePublication();

  return (
    <>
      <RemovalConfirmation questionId={removalQuestionId} setError={setError} />
      <div className="card mx-auto max-w-screen-lg shadow-xl">
        <div className="card-body">
          {error && <Error error={error} />}
          <div className="flex items-center justify-between">
          <h1 className="text-lg leading-none text-gray-600 dark:text-gray-200" tabIndex={0}>
              Last Questions
            </h1>
            {userId ? (
              <Link role="button" className="btn btn-primary" to="/ask" aria-label="Ask a new question">
                Ask a Question
              </Link>
            ) : null}
          </div>
          <div className="flow-root">
            {allQuestions.length === 0 ? (
              <p>No questions available.</p>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700" aria-label="List of questions">
                {allQuestions.map((question, index) => (
                  <QuestionListItem
                    key={question._id}
                    question={question as Question}
                    loggedUserId={userId}
                    setRemovalQuestionId={setRemovalQuestionId}
                    setError={setError}
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
