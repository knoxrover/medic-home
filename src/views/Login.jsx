import { useState } from "react";
import "../asserts/css/login.css";

function Login() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form">
      <div class="card">
        <form>
          <h2 class="title"> Log in</h2>
          <div class="or"></div>
          <div class="email-login">
            <label for="email"> Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button class="cta-btn">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
