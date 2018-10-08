import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
  <div>
    <Nav />
    <Books />
  </div>
);

export default App;
