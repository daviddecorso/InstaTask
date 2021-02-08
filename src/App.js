import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import Nav from "./components/Nav";
import TaskView from "./components/TaskView";
import Login from "./components/Login";
import Import from "./components/Import";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={TaskView} />
        <Route path="/login" component={Login} />
        <Route path="/import" component={Import} />
      </div>
    </Router>
  );
}

export default App;
