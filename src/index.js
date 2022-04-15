import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import ReactPage from "./components/ReactPage";
import FooterPage from "./components/FooterPage";
import NewHome from "./components/NewHome";

import "./fonts/AgentOrange.ttf";
import "./fonts/FunZone.ttf";

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <NewHome Route path="/" exact />
        <Route path="/about" component={About} />
        <Route path="/ReactPage" component={ReactPage} />
      </Switch>
    </Layout>
    <FooterPage />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
