import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from 'meteor/react-meteor-accounts';
import { useAskQuestion } from './use-ask-question';
import { User } from '../../../api/users/users.schema';

export default function AskQuestion() {
  const user = useUser() as User;
  const { submitQuestion } = useAskQuestion();

  return (
    <div className="card mx-auto max-w-screen-lg shadow-xl">
      <div className="card-body">
        <form className="flex flex-col gap-4" onSubmit={submitQuestion}>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              id="name"
              value={user?.profile?.name}
              disabled
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              value={user.profile.email}
              disabled
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Your question</span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              id="question"
              placeholder="Leave a question..."
              required
              rows={4}
            ></textarea>
          </label>
          <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <button className="btn btn-primary" type="submit">
              Send Question
            </button>
            <Link role="button" className="btn btn-neutral" to="/">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
