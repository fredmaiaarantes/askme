import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { Questions } from "./questions";

function checkLoggedIn() {
  if (!Meteor.userId()) {
    throw new Meteor.Error('Error', 'Not authorized.');
  }
}

export async function checkMustBeQuestionOwner({ questionId }) {
  check(questionId, String);
  checkLoggedIn();
  const question = await Questions.findOneAsync({
    _id: questionId,
    userId: Meteor.userId(),
  });
  if (!question) {
    throw new Meteor.Error('Error', 'You cannot remove a question that you do not own.');
  }
}

async function insertQuestion({ description }) {
  check(description, String);
  checkLoggedIn();
  const user = await Meteor.userAsync();
  const question = {
    description,
    answered: false,
    userId: user._id,
    userAvatarUrl: user.profile?.avatar,
    userName: user.profile?.name,
    createdAt: new Date(),
  };
  return Questions.insertAsync(question);
}

async function removeQuestion({ questionId }) {
  check(questionId, String);
  await checkMustBeQuestionOwner({ questionId });
  return Questions.removeAsync(questionId);
}

Meteor.methods({ insertQuestion, removeQuestion });