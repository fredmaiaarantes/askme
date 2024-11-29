import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { useUser } from 'meteor/react-meteor-accounts';
import { User } from '../../api/users/users.schema';

export default function Layout() {
  const user = useUser() as User;

  const handleGithubLogin = () => {
    Meteor.loginWithGithub(
      {
        requestPermissions: ['user', 'user:email', 'read:user'],
        loginStyle: 'popup',
      },
      (error) => {
        if (error) {
          const reason = error?.message || 'Sorry, please try again.';
          console.log({ reason });
        }
      }
    );
  };

  const logout = () => {
    Meteor.logout(() => {
      console.log('Logged out');
    });
  };

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="mx-auto max-w-screen-lg">
        <div className="navbar">
          <div className="flex-1">
            <Link to="/">
              <img
                src="/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Ask.me Logo"
              />
            </Link>
          </div>
          <div className="flex-none">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 rounded-full">
                    <img alt={user.profile?.name} src={user.profile?.avatar} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a href="#">
                      {user.profile.name} <br />
                      {user.username}
                    </a>
                  </li>
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="btn btn-neutral" onClick={handleGithubLogin}>
                <FaGithub className="mr-2 h-5 w-5" /> Sign In
              </button>
            )}
          </div>
        </div>
        <div id="detail" className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
