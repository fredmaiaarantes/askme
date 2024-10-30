import React from "react";
import {Button} from "flowbite-react";
import { IoTrashBinOutline } from "react-icons/io5";

export const QuestionListItem = ({ question, isLast, loggedUserId, setOpenModal, setRemovalQuestionId }) => {

  const removeQuestionConfirmation = async () => {
    setRemovalQuestionId(question._id);
    setOpenModal(true);
  }

  return (
    <li className={`py-3 sm:py-4 ${isLast ? 'pb-0 pt-3 sm:pt-4' : ''}`}>
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <img
            alt={`${question.userName} image`}
            height="32"
            src={question.userAvatarUrl}
            width="32"
            className="rounded-full"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">{question.description}</p>
          <p className="truncate text-xs font-medium text-gray-900 dark:text-white">{question.userName}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {loggedUserId === question.userId && (
            <Button color="light" className="ml-2" size="sm" onClick={removeQuestionConfirmation}>
              <IoTrashBinOutline className="mr-2 h-5 w-5" />
              Remove
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}