import logoImg from "../asserts/img/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const [ham, setHam] = useState(false);
  function menu() {
    if (ham === false) setHam(true);
    else setHam(false);
  }

  return (
    <>
      <nav>
        <div className="nav">
          <div className="logo-name">
            <img className="nav-logo" src={logoImg} alt="logo" />
            <Link to="/">
              <h2 className="title">Medi Home</h2>
            </Link>
          </div>
          {/* <div className="hamburger-menu" onClick={() => menu()}>
          <img src={hamImg} alt="menu" />
        </div> */}
          <div
            className={ham ? "hamburger-menu close" : "hamburger-menu"}
            onClick={() => menu()}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={ham ? "nav-ul show" : "nav-ul"}>
            <Link to="/">
              {" "}
              <li className="">Section1</li>
            </Link>
            <Link to="/login">
              <li className="login">Login</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
