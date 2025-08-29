import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Menu from "./components/Menu";
import TData from "./components/TData";   // নতুন পেজ

function App() {
  const logid = "uc9e3geft3beknhdbeu45kjdirusoejeu74kehjdhsDfgkjgxx0";
  const giveID = sessionStorage.getItem("ucCode0x");

  if (giveID === logid) {
    return (
      <Router>
        <Nav />
        <br />
        <br />
        <br />
        <br />

        <Routes>
          {/* ডিফল্টে Menu দেখাবে */}
          <Route path="/" element={<Menu />} />

          {/* Total Data পেজ */}
          <Route path="/TData" element={<TData />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
