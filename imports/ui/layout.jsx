import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useUser } from "meteor/react-meteor-accounts";

export default function Layout() {
  const user = useUser();

  const handleError = (error) => {
    if (error) {
      const reason = error?.reason || error?.message || 'Sorry, please try again.';
      console.log({ reason });
    }
  };

  const handleGithubLogin = () => {
    Meteor.loginWithGithub(
      {
        requestPermissions: [
          'user',
          'user:email',
          'read:user'
        ],
        loginStyle: 'popup',
      },
      (error) => {
        handleError(error);
      }
    );
  };

  const logout = () => {
    Meteor.logout(() => {
      console.log('Logged out');
    });
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      <div id="navbar">
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} to="/">
              <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"/>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user.profile?.avatar} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.profile?.name}</span>
                  <span className="block truncate text-sm font-medium">{user.username}</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Button color="light" onClick={handleGithubLogin}>
                <FaGithub className="mr-2 h-5 w-5" /> Sign In
              </Button>
            )}
          </div>
        </Navbar>
      </div>
      <div id="detail" className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
