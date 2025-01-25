import React from 'react';
import { Meteor } from 'meteor/meteor';

interface ErrorProps {
  error: Meteor.Error | null;
  clearError?: () => void;
}

export const Error = ({ error, clearError }: ErrorProps) => {
  return (
    error && (
      <div role="alert" className="alert mb-4 p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current text-red-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{error.reason || error.error}</span>
        {clearError && (
          <button className="btn btn-sm" onClick={clearError}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    )
  );
};
