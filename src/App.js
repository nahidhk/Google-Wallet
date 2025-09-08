import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Nav from "./components/Nav";
import logid from "./data/logid.json";

// pages
import Login from "./components/Login";
import Menu from "./components/Menu";
import TData from "./components/TData";   
import Earnings from "./components/Earnings";
import Task from "./components/Task";
import Withdrawal from "./components/Withdrawal";


import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const loginid = logid[0].id1+logid[0].id2;
  const giveID = sessionStorage.getItem(logid[1].oxid);

  if (giveID === loginid) {
    toast.success(`Successfuly Login.` ,{
      position:"bottom-center",
      autoClose:"1000"
    })
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
          <Route path="/task" element={<Task />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
        </Routes>
                <ToastContainer />
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
