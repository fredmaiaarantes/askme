import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { Questions } from "./questions";

function checkLoggedIn() {
  if (!Meteor.userId()) {
    throw new Meteor.Error('Error', 'Not authorized.');
  }
}

export async function checkQuestionOwner({ questionId }) {
  check(questionId, String);
  checkLoggedIn();
  const question = await Questions.findOneAsync({
    _id: questionId,
    userId: Meteor.userId(),
  });
  if (!question) {
    throw new Meteor.Error('Error', 'Access denied.');
  }
}

async function insertQuestion({ description }) {
  check(description, String);
  checkLoggedIn();
  const question = {
    description,
    userId: Meteor.userId(),
    createdAt: new Date(),
  };
  return Questions.insertAsync(question);
}

async function removeQuestion({ questionId }) {
  check(questionId, String);
  await checkQuestionOwner({ questionId });
  return Questions.removeAsync(questionId);
}

Meteor.methods({ insertQuestion, removeQuestion });