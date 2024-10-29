import { Mongo } from "meteor/mongo";

export const Questions = new Mongo.Collection("questions");

const schema = {
  _id: String,
  userId: String,
  userAvatarUrl: String,
  userName: String,
  description: String,
  answered: Boolean,
  createdAt: Date,
};

Questions.attachSchema(schema);