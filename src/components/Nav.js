import { Link } from "react-router-dom";
import React from "react";
import Settings from "./Settings";
import { IconLogout } from "@tabler/icons";

const Nav = ({ authenticated, setAuth, user }) => {
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
        <div className="navbar-start" style={{ alignItems: "center" }}>
          <h1 class="title is-3">InstaTask</h1>
        </div>
        {authenticated && (
          <div className="navbar-end">
            <Settings user={user} />
            <button
              onClick={handleLogoutClick}
              id="settings"
              style={{
                background: "none",
                border: "none",
                active: "none",
                outline: "none",
              }}
            >
              <IconLogout color="white" size={28} stroke={1.25} />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
