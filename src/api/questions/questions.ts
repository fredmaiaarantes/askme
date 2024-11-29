import { Mongo } from 'meteor/mongo';
import { ID, Integer, Optional } from 'meteor/jam:easy-schema';

export const Questions = new Mongo.Collection('questions');

const schema = {
  _id: ID,
  userId: String,
  userAvatarUrl: String,
  userName: String,
  description: String,
  answered: Boolean,
  votes: { type: Optional(Integer), default: 0 },
  createdAt: Date,
  voters: Optional([ID]),
};

Questions.attachSchema(schema);