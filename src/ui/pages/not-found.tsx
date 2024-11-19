import React from 'react';

export default function NotFound() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-600">
            404 Not Found
          </h1>
          <p className="mb-8 font-medium text-gray-500 sm:text-2xl dark:text-gray-400">
            Whoops! That page doesn't exist.
          </p>
        </div>
      </div>
    </section>
  );
}
