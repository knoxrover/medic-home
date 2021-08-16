import React, { Component } from "react";
import "../asserts/css/login.css";
import closeImg from "../asserts/img/close.svg";

class Login extends Component {
  state = { loggedIn: false };

  render() {
    const showLoginHandler = this.props.showLoginHandler;
    return (
      <div className="login-form">
        <div class="card">
          <button className="pop-up-close" onClick={() => showLoginHandler()}>
            <img src={closeImg} alt="" />
          </button>
          <form>
            <h2 class="title"> Log in</h2>
            <div class="or"></div>
            <div class="email-login">
              <label for="email"> Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                name="uname"
                required
              />
              <label for="psw">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>
            <button class="cta-btn">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
