import React from 'react';
import { Button, Card } from "flowbite-react";
import { QuestionListItem } from "../components/question-list-item";
import { Link } from "react-router-dom";

export default function Home() {

  const questions = [
    {
      id: 1,
      name: 'Fred Maia',
      question: 'Posso criar aplicativos desktop com Meteor?',
      amount: '$320',
      image: 'https://avatars.githubusercontent.com/u/559305?v=4'
    },
    {
      id: 2,
      name: 'Bonnie Green',
      question: 'O Galaxy possui algum plano gratuito?',
      amount: '$3467',
      image: 'https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=64&q=75'
    },
    {
      id: 3,
      name: 'Michael Gough',
      question: 'Vejo exemplos de aplicativos Meteor usando somente MongoDB como banco de dados. Posso usar Meteor.js com Postgres ou algum banco de dados relacional? ',
      amount: '$67',
      image: 'https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=64&q=75'
    },
    {
      id: 4,
      name: 'Lana Byrd',
      question: 'Posso criar aplicativos mobile com Meteor?',
      amount: '$367',
      image: 'https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=64&q=75'
    },
  ];

  return (
    <Card className="mx-auto max-w-screen-lg">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl leading-none text-gray-600 dark:text-white">Last Questions</h5>
        <Button as={Link} to="/ask">Ask a Question</Button>
        <Button as={Link} to="/ask">Ask a Question</Button>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {questions.map((user, index) => (
            <QuestionListItem
              key={user.id}
              user={user}
              isLast={index === questions.length - 1}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
}
