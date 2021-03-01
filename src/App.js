import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
