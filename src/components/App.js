import React from "react";
import MainRoute from "./MainRoute";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router basename="/classroom-app">
      <MainRoute />
    </Router>
  );
}
