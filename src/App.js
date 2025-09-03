import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Menu from "./components/Menu";
import TData from "./components/TData";   
import Earnings from "./components/Earnings"




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
          <Route path="/" element={<Menu />} />          
          <Route path="/TData" element={<TData />} />   
          <Route path="/earning" element={<Earnings />}/> 
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
