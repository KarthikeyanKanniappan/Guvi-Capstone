import React, { useState } from "react";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import meet from "../../Asset/meet.svg";
import work from "../../Asset/work.svg";
const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const SignInHandleClick = (e) => {
    e.preventDefault();
    setSignIn(true);
  };
  const SignUpHandleClick = (e) => {
    e.preventDefault();
    setSignIn(false);
  };
  return (
    <>
      <div className={`cont ${signIn ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <PersonIcon className="i" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <LockIcon className="i" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn-solid" />
            </form>
            <form action="" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <PersonIcon className="i" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <EmailIcon className="i" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <LockIcon className="i" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className={`btn-solid }`} />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Welcome</h3>
              <p>An hour of planning can save you 10 hours of doing.</p>
              <button
                className="btn-solid transparent"
                id="sign-up-btn"
                onClick={SignInHandleClick}
              >
                Sign up
              </button>
            </div>
            <img src={meet} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Welcome</h3>
              <p>
                Productivity is never an accident. it is always the result of
                commitment to excellence,intelligent planning, and focused
                effort.
              </p>
              <button
                className="btn-solid transparent"
                onClick={SignUpHandleClick}
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src={work} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
