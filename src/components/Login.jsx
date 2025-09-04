import React, { useState } from "react";
import googleURL from "../data/googleURL.json";
import logid from "../data/logid.json";
// Noti
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === googleURL[1].p+12345) {
      sessionStorage.setItem(
        logid[1].oxid,
        logid[0].id1+logid[0].id2
      );
      window.location.reload();
    } else {
      toast.error(
        `login failed , Try agin`,{
          position: "top-center",
          autoClose: "2000"
        }
      )
    }
  };

  return (
    <div className="darkbox">
      <div className="loginBox">
        <img className="loginImage" src={googleURL[1].userImg} alt="Login" />
        <form onSubmit={handleLogin}>
          <h3>Login here</h3>
          <input
            autoComplete="off"
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus

          />
          <button type="submit" className="btn">Login</button>
        </form>


      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
