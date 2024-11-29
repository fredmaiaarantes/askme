import { Questions } from './questions';
import { checkLoggedIn, getLoggedUser } from '../common/auth';
import { Meteor } from 'meteor/meteor';
import { InsertQuestionInput, Question, QuestionIdInput } from '../../shared/schemas/question';
import { check } from 'meteor/check';

export const insertQuestion = async ({ description }: InsertQuestionInput) => {
  checkLoggedIn();
  const user = await getLoggedUser();
  const question = {
  description,
  answered: false,
  userId: user._id,
  userAvatarUrl: user.profile.avatar,
  userName: user.profile.name,
  createdAt: new Date(),
  };
  return Questions.insertAsync(question);
}

async function checkMustBeQuestionOwner({ questionId }: QuestionIdInput) {
  check(questionId, String);
  checkLoggedIn();
  const question = await Questions.findOneAsync({
      _id: questionId,
      userId: Meteor.userId()!,
  });
  if (!question) {
      throw new Meteor.Error(
      'Error',
      'You cannot remove a question that you do not own.'
      );
  }
}

export const removeQuestion = async ({ questionId }: QuestionIdInput) => {
  checkLoggedIn();
  await checkMustBeQuestionOwner({ questionId });
  return Questions.removeAsync(questionId);
}

export const upvoteQuestion = async ({ questionId }: QuestionIdInput) => {
  checkLoggedIn();
  const loggedUserId = Meteor.userId();
  const question = (await Questions.findOneAsync({
      _id: questionId,
  })) as Question;

  if (!question) {
      throw new Meteor.Error('Question not found');
  }

  if (question.userId === loggedUserId) {
      throw new Meteor.Error('Error', 'You cannot upvote your own question.');
  }

  if (
      question.voters &&
      loggedUserId &&
      question.voters.includes(loggedUserId)
  ) {
  throw new Meteor.Error('You have already voted on this question.');
  }

  return Questions.updateAsync(
      { _id: questionId },
      {
          $inc: { votes: 1 },
          $addToSet: { voters: loggedUserId },
      }
  );
}
