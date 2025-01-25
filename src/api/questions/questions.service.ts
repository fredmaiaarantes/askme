import { Questions } from './questions';
import { checkLoggedIn, getLoggedUser } from '../common/auth';
import { Meteor } from 'meteor/meteor';
import {
  InsertQuestionInput,
  Question,
  QuestionIdInput,
} from './questions.schema';
import { check } from 'meteor/check';
import { Roles } from 'meteor/roles';

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
};

async function checkLoggedUserAdminOrOwner({ questionId }: QuestionIdInput) {
  check(questionId, String);
  checkLoggedIn();

  const userId = Meteor.userId()!;
  const isAdmin = await Roles.userIsInRoleAsync(userId, "admin");
  if (isAdmin) {
    return;
  }

  const question = await Questions.findOneAsync({
    _id: questionId,
    userId,
  });
  if (!question) {
    throw new Meteor.Error(
      'Error',
      'Only the owner can delete this question.'
    );
  }
}

export const removeQuestion = async ({ questionId }: QuestionIdInput) => {
  checkLoggedIn();
  await checkLoggedUserAdminOrOwner({ questionId });
  return Questions.removeAsync(questionId);
};

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
    throw new Meteor.Error("You've already voted on this question.");
  }

  return Questions.updateAsync(
    { _id: questionId },
    {
      $inc: { votes: 1 },
      $addToSet: { voters: loggedUserId! },
    }
  );
};

export const findAll = () => Questions.find();

export const findAllByUserId = () =>
  Questions.find({ userId: Meteor.userId()! });
