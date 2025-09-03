import React, { useState } from "react";
import googleURL from "../data/googleURL.json";


function Login() {
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === googleURL[1].p) {
      sessionStorage.setItem(
        "ucCode0x",
        "uc9e3geft3beknhdbeu45kjdirusoejeu74kehjdhsDfgkjgxx0"
      );
      window.location.reload();
    } else {
      alert("Login failed!");
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
    </div>
  );
}

export default Login;
