import React, { useState } from "react";
import { auth } from "../Config/Config";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg(
          "Login Successful.You will now get automatically redirected to Home Page"
        );
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          history.push("/");
        }, 3000);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        {successMsg && <div className="success-msg">{successMsg}</div>}
        <br></br>
        <br></br>
        <h1>Login</h1>
        <hr></hr>
        <form className="form-group" autoComplete="off" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br></br>
          <div className="btn-box">
            <span>
              Don't have an account SignUp
              <Link to="signup" className="link">
                Here
              </Link>
            </span>
            <br />
            <br />
            <button type="submit" className="btn btn-success btn-md">
              Login
            </button>
          </div>
        </form>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
      </div>
    </div>
  );
}

export default Login;
