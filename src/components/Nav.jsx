import logoImg from "../asserts/img/logo.jpg";
import hamImg from "../asserts/img/hamburger.svg";
import { useState } from "react";

function Nav() {
  const [ham, setHam] = useState(0);
  function menu() {
    if (ham === 0) setHam(1);
    else setHam(0);
  }

  return (
    <nav>
      <div className="nav">
        <div className="logo-name">
          <img className="nav-logo" src={logoImg} alt="logo" />
          <h2 className="title">Medi Home</h2>
        </div>
        {/* <div className="hamburger-menu" onClick={() => menu()}>
          <img src={hamImg} alt="" />
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
          <li>
            <a className="section1" href="/">
              Section1
            </a>
          </li>
          <li>
            <a className="section2" href="/">
              Section2
            </a>
          </li>
          <li>
            <a className="login" href="/">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
