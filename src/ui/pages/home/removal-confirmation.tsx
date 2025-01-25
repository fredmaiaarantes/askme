import { HiOutlineExclamationCircle } from '@react-icons/all-files/hi/HiOutlineExclamationCircle';
import React, { FC } from 'react';
import { client } from '../../client';
import { useErrorHandler } from '../../hooks/use-error-handler';
import { useModal } from '../../hooks/use-modal';
import { Error } from '../../components/error';

interface RemovalConfirmationProps {
  questionId: string;
}

export const RemovalConfirmation: FC<RemovalConfirmationProps> = ({ questionId }) => {
  const { error, handleError, clearError } = useErrorHandler();
  const { closeModal } = useModal('removal-modal');

  const cancelRemoval = () => {
    clearError();
    closeModal();
  };

  const submitRemoveQuestion = async (params: { questionId: string }) => {
    try {
      await client.questions.removeQuestion(params);
      clearError();
      closeModal();
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <dialog id="removal-modal" className="modal">
      <div className="modal-box">
        <Error error={error} />
        <h3 className="text-lg">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-200" />
          Are you sure you want to remove this question?
        </h3>
        <div className="modal-action pt-6">
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
                onClick={cancelRemoval}
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
