import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConxtextProvider } from "./context";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <ConxtextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/registro">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </ConxtextProvider>
  );
}

export default App;
