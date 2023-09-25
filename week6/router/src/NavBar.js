import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/user/Ned Navigator' className="nav-link">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;