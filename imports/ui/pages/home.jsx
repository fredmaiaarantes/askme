import React from 'react';
import { Button, Card } from "flowbite-react";
import { QuestionListItem } from "../components/question-list-item";
import { Link } from "react-router-dom";
import { useUserId } from 'meteor/react-meteor-accounts';
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import {Questions} from "../../api/questions/questions";

export default function Home() {
  const userId = useUserId();
  const isReady = useSubscribe('questions');
  const questions = useFind(() => Questions.find({}, { sort: { createdAt: -1 } }), []);

  return (
    <Card className="mx-auto max-w-screen-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-lg leading-none text-gray-600">Last Questions</h1>
        {userId ? <Button as={Link} to="/ask">Ask a Question</Button> : null}
      </div>
      <div className="flow-root">
        {!isReady ? <p>Loading...</p> : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {questions.map((question, index) => (
              <QuestionListItem
                key={question._id}
                question={question}
                isLast={index === questions.length - 1}
              />
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
