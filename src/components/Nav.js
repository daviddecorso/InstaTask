import { Link } from "react-router-dom";
import React from "react";
import Settings from "./Settings";

const Nav = ({ authenticated, setAuth, user }) => {
  function handleSignInClick() {
    // Authenticate and store cookie
    window.open("http://localhost:5000/auth/google", "_self");
  }

  function handleLogoutClick() {
    // Logout
    window.open("http://localhost:5000/auth/logout", "_self");
    setAuth(false);
  }

  return (
    <div>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand"></div>
        {/* Text is a placeholder for a logo and icon */}
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          {authenticated ? (
            <li onClick={handleLogoutClick}>Logout</li>
          ) : (
            <li onClick={handleSignInClick}>Login</li>
          )}
        </ul>
        {authenticated && (
            <div className="navbar-end">
              <Settings user={user} />
            </div>
          )}
      </nav>
    </div>
  );
};

export default Nav;
