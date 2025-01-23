import { HiOutlineExclamationCircle } from '@react-icons/all-files/hi/HiOutlineExclamationCircle';
import React, { FC } from 'react';
import { client } from '../../client';
import { useErrorHandler } from '../../hooks/use-error-handler';
import { useModal } from '../../hooks/use-modal';

interface RemovalConfirmationProps {
  questionId: string;
}

export const RemovalConfirmation: FC<RemovalConfirmationProps> = ({ questionId }) => {
  const { error, handleError, clearError } = useErrorHandler();
  const { closeModal } = useModal('removal-modal');

  const submitRemoveQuestion = async (params: { questionId: string }) => {
    try {
      await client.questions.removeQuestion(params);
    } catch (e) {
      handleError(e);
    }
    clearError();
    closeModal();
  };

  return (
    <dialog id="removal-modal" className="modal">
      <div className="modal-box">
        {error && <div className="alert alert-error mb-4">{error.reason}</div>}
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
