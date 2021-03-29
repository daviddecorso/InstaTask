import React, { useState, useEffect } from "react";
import TaskView from "./TaskView";
import Login from "./Login";
import Nav from "./Nav";
import Import from "./Import";
import axios from "axios";

function HomePage({ user, setUser, events, setEvents }) {
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

        axios
          .put("http://localhost:5000/events/update", {
            id: responseJson.user._id,
            calendarLink: responseJson.user.calendarLink,
          })
          .then(() =>
            axios
              .get("http://localhost:5000/events/" + responseJson.user._id)
              .then((res) => {
                setEvents(res.data);
              })
          );
      })
      .catch((error) => {
        setAuth(false);
        setErr("Failed to authenticate user.");
      });
  }, []);

  return (
    <div>
      <Nav authenticated={authenticated} setAuth={setAuth} user={user} />

      {/* Displays import modal */}
      {displayImport && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <Import user={user} setImport={setImport} />
          </div>
        </div>
      )}

      <div>
        {!authenticated ? (
          <Login />
        ) : (
          <TaskView events={events} setEvents={setEvents} user={user} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
