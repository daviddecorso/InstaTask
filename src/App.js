import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import HomePage from "./components/HomePage";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <div>
        <HomePage user={user} setUser={setUser} />
      </div>
    </Router>
  );
}

export default App;
