import React from "react";

export const QuestionListItem = ({ user, isLast }) => (
  <li className={`py-3 sm:py-4 ${isLast ? 'pb-0 pt-3 sm:pt-4' : ''}`}>
    <div className="flex items-center space-x-4">
      <div className="shrink-0">
        <img
          alt={`${user.name} image`}
          height="32"
          src={user.image}
          width="32"
          className="rounded-full"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400">{user.question}</p>
        <p className="truncate text-xs font-medium text-gray-900 dark:text-white">{user.name}</p>
      </div>
    </div>
  </li>
);