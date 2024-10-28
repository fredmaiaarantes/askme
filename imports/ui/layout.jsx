import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="mx-auto max-w-screen-lg">
            <div id="navbar">
                <Navbar fluid rounded>
                    <Navbar.Brand as={Link} to="/home">
                        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"/>
                    </Navbar.Brand>
                </Navbar>
            </div>
            <div id="detail" className="p-4">
                <Outlet />
            </div>
        </div>
    );
}
