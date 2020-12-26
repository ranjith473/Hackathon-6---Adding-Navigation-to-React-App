import React, { Component, useState } from "react";
import {
  useLocation,
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        {" "}
        {/* Do not remove the main div */}
        <BrowserRouter>
          <LocationDisplay />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route exact path="/about">
              <div>You are on the about page</div>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <div>No match</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
function Home() {
  return <div> You are home.</div>;
}

export function LocationDisplay() {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
}

export default App;
