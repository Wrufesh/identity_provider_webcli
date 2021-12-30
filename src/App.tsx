import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login'
import AppShell from "./components/layouts/AppShell"
import HomePage from "./pages/Home"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <AppShell defaultSlot={<HomePage />}></AppShell>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}