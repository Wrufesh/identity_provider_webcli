import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppShell from "./components/layouts/AppShell"
import AuthLayout from "./components/layouts/Auth"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <AuthLayout defaultSlot={<LoginPage />}></AuthLayout>
          </Route>
          <Route path="/">
            <AppShell defaultSlot={<HomePage />}></AppShell>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}