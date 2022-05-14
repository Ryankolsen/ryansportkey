import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Layout from "./components/Layout";
import About from "./components/About";
import ReactPage from "./components/ReactPage";
import FooterPage from "./components/FooterPage";
import NewHome from "./components/NewHome";

import "./fonts/AgentOrange.ttf";
import "./fonts/FunZone.ttf";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/ReactPage" element={<ReactPage />} />
        </Routes>
      </Layout>
      <FooterPage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
