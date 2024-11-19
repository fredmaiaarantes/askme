import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { Loading } from './components/loading';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container!);
  root.render(
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
});
