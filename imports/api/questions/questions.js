import { Mongo } from "meteor/mongo";

export const Questions = new Mongo.Collection("questions");

const schema = {
  _id: String,
  text: String,
  answered: Boolean,
  createdAt: Date,
};

Questions.attachSchema(schema);