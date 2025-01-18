import React from 'react';
import { IoTrashBinOutline } from '@react-icons/all-files/io5/IoTrashBinOutline';
import { FaCaretUp } from '@react-icons/all-files/fa/FaCaretUp';
import { Meteor } from 'meteor/meteor';
import { client } from '../../client';
import { Question } from '@/api/questions/questions.schema';
import { Roles } from 'meteor/roles';
import { useErrorHandler } from '../../hooks/use-error-handler';
import { useModal } from '@/ui/hooks/use-modal';

interface QuestionListItemProps {
  question: Question;
  isLast: boolean;
  loggedUserId: string | null;
  setRemovalQuestionId: (questionId: string) => void;
}

export const QuestionListItem: React.FC<QuestionListItemProps> = ({
  question,
  isLast,
  loggedUserId,
  setRemovalQuestionId,
}) => {
  const { error, handleError } = useErrorHandler();
  const { openModal } = useModal('removal-modal');
  const isOwner = loggedUserId === question.userId;
  const isAdmin = Roles.userIsInRole(loggedUserId, "admin");
  const isOwnerOrAdmin = isOwner || isAdmin;

  const openRemoveQuestionConfirmation = () => {
    setRemovalQuestionId(question._id);
    openModal();
  };

  const submitUpvote = async () => {
    try {
      await client.questions.upvoteQuestion({ questionId: question._id });
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <li className={`py-3 sm:py-4 ${isLast ? 'pb-0 pt-3 sm:pt-4' : ''}`}>
      {error && <div className="alert alert-error mb-4">{error.reason}</div>}
      <div className="flex items-center space-x-4">
        <div className="shrink-0 mx-auto max-w-xl text-center">
          <p className="text-xl font-bold text-gray-500 dark:text-gray-400">
            {question.votes}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Vote(s)</p>
        </div>
        <div className="shrink-0">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img
                src={question.userAvatarUrl}
                alt={`${question.userName} image`}
              />
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-200">
            {question.description}
          </p>
          <p className="truncate text-xs font-medium text-gray-900 dark:text-gray-400">
            {question.userName}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {loggedUserId && !isOwner && (
            <button
              className="btn btn-outline btn-primary mr-1"
              onClick={submitUpvote}
            >
              <FaCaretUp className="h-5 w-5" />
              Upvote
            </button>
          )}
          {isOwnerOrAdmin && (
            <button
              className="btn btn-outline"
              onClick={openRemoveQuestionConfirmation}
            >
              <IoTrashBinOutline className="h-5 w-5" />
              Remove
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
