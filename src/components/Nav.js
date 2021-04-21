import React from "react";
import Settings from "./Settings";
import { IconLogout } from "@tabler/icons";
import logo from "./img/logo2.png";

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
        style={{
          display: "flex",
          placeContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="navbar-start" style={{ alignItems: "center" }}>
          <img
            src={logo}
            alt="InstaTask Logo"
            style={{ width: "25px", height: "25px", marginLeft: "5px" }}
          ></img>
          <a href="/" className="title is-3" style={{ paddingLeft: "5px" }}>
            InstaTask
          </a>
        </div>
        {authenticated && (
          <div>
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
