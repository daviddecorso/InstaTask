import React, { useState, useEffect } from "react";
import TaskView from "./TaskView";
import Login from "./Login";
import Nav from "./Nav";

function HomePage({ user, setUser }) {
  const [err, setErr] = useState(null);
  const [authenticated, setAuth] = useState(false);

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
      })
      .catch((error) => {
        setAuth(false);
        setErr("Failed to authenticate user.");
      });
  }, []);

  return (
    <div>
      <Nav authenticated={authenticated} setAuth={setAuth} />
      <div>{!authenticated ? <Login /> : <TaskView userID={user._id} />}</div>
    </div>
  );
}

export default HomePage;
