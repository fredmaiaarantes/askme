import React, {useState} from 'react';
import { Button, Card, Modal } from "flowbite-react";
import { QuestionListItem } from "../components/question-list-item";
import { Link } from "react-router-dom";
import { useUserId } from 'meteor/react-meteor-accounts';
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { Questions } from "../../api/questions/questions";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const RemovalConfirmation = ({openModal, setOpenModal, questionId }) => {

  const removeQuestion = async ({ questionId }) => {
    await Meteor.callAsync('removeQuestion', { questionId });
    setOpenModal(false);
  }

  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header/>
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"/>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to remove this question?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => removeQuestion({ questionId })}>
              {"Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [removalQuestionId, setRemovalQuestionId] = useState(null);
  const userId = useUserId();
  const isReady = useSubscribe('questions');
  const questions = useFind(() => Questions.find({}, { sort: { createdAt: -1 } }), []);

  return (
    <>
      <RemovalConfirmation setOpenModal={setOpenModal} openModal={openModal} questionId={removalQuestionId} />
      <Card className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-lg leading-none text-gray-600">Last Questions</h1>
          {userId ? <Button as={Link} to="/ask">Ask a Question</Button> : null}
        </div>
        <div className="flow-root">
          {!isReady ? <p>Loading...</p> : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {questions.map((question, index) => (
                <QuestionListItem
                  key={question._id}
                  question={question}
                  loggedUserId={userId}
                  setOpenModal={setOpenModal}
                  setRemovalQuestionId={setRemovalQuestionId}
                  isLast={index === questions.length - 1}
                />
              ))}
            </ul>
          )}
        </div>
      </Card>
    </>
  );
}
