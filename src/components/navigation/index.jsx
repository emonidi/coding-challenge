import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import react from 'react';

export default function Navigation(props) {
    const location = useLocation();

    const isPathName = pathName => location.pathname === pathName;

    return (
        <Navbar
            fluid={true}
        >
            <Navbar.Brand>
                <img src="logo.jpg" className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Catchy Brand
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink
                    to={"/"}
                    className={isPathName("/") ? "text-blue-700" : ""}
                >
                    Home
                </NavLink>
                <NavLink
                    to={"/products"}
                    className={isPathName("/products") ? "text-blue-700" : ""}
                >
                    Products
                </NavLink>
            </Navbar.Collapse>

        </Navbar>
    )
}