import React, { useState } from "react";
import googleURL from "../data/googleURL.json";

function Login() {
  const [email, setEmail] = useState(googleURL[0].email);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === googleURL[0].email && password === googleURL[0].p) {
       sessionStorage.setItem("ucCode0x", "uc9e3geft3beknhdbeu45kjdirusoejeu74kehjdhsDfgkjgxx0");
         window.location.reload();
    } else {
      alert("Login failed!");
    }
  };

  return (
    <div className="darkbox">
      <div className="loginBox">
        <img className="loginImage" src={googleURL[0].userImg} alt="Login" />
        <form onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
