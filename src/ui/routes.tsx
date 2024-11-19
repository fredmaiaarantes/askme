import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';

const HomePage = React.lazy(() => import('./pages/home/home'));
const AskQuestionPage = React.lazy(
  () => import('./pages/ask-question/ask-question')
);
const NotFound = React.lazy(() => import('./pages/not-found'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'ask',
        element: <AskQuestionPage />,
      },
    ],
  },
]);
