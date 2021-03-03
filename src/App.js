import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import HomePage from "./components/HomePage";
import ImportHelp from "./components/ImportHelp";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Route path="/" exact>
        <HomePage user={user} setUser={setUser} />
      </Route>
      <Route path="/about" exact>
        <Nav />
        <About />
      </Route>
      <Route path="/import/help" exact>
        <Nav />
        <ImportHelp />
      </Route>
    </Router>
  );
}

export default App;
