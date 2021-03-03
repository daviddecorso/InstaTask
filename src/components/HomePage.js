import React, { useState, useEffect } from "react";
import TaskView from "./TaskView";
import Login from "./Login";
import Nav from "./Nav";
import Import from "./Import";

function HomePage({ user, setUser }) {
  const [err, setErr] = useState(null);
  // State that tracks if the user is currently authenticated.
  const [authenticated, setAuth] = useState(false);

  // State that tracks if the user has a calendar link associated with their profile.
  const [displayImport, setImport] = useState(false);

  // Get user details on login
  useEffect(() => {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        setAuth(true);
        setUser(responseJson.user);

        if (responseJson.user.calendarLink == null) {
          setImport(true);
        } else {
          setImport(false);
        }
      })
      .catch((error) => {
        setAuth(false);
        setErr("Failed to authenticate user.");
      });
  }, []);

  return (
    <div>
      <Nav authenticated={authenticated} setAuth={setAuth} />

      {/* Displays import modal */}
      {displayImport && (
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
            <Import user={user} setImport={setImport} />
          </div>
        </div>
      )}

      <div>{!authenticated ? <Login /> : <TaskView userID={user._id} />}</div>
    </div>
  );
}

export default HomePage;
