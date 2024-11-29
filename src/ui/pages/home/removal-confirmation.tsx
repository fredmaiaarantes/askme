import { HiOutlineExclamationCircle } from '@react-icons/all-files/hi/HiOutlineExclamationCircle';
import React, { FC } from 'react';
import { Meteor } from 'meteor/meteor';
import { api } from '../../api';

interface RemovalConfirmationProps {
  questionId: string;
  setError: (error: Meteor.Error | null) => void;
}

export const RemovalConfirmation: FC<RemovalConfirmationProps> = ({
  questionId,
  setError,
}) => {
  const submitRemoveQuestion = async (params: { questionId: string }) => {
    try {
      await api.questions.removeQuestion(params);
    } catch (e) {
      console.error(e);
      if (e instanceof Meteor.Error) {
        setError(e as Meteor.Error);
      } else {
        setError(new Meteor.Error('Error', 'Unknown error'));
      }
    }
    closeModal();
  };

  const closeModal = () => {
    setError(null);
    const modal = document.getElementById(
      'removal-modal'
    ) as HTMLDialogElement | null;
    modal?.close();
  };

  return (
    <dialog id="removal-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          Are you sure you want to remove this question?
        </h3>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex justify-center gap-4">
              <button
                className="btn btn-primary"
                onClick={() => submitRemoveQuestion({ questionId })}
                type="button"
              >
                Yes, I'm sure
              </button>
              <button
                className="btn btn-neutral"
                onClick={closeModal}
                type="button"
              >
                No, cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
