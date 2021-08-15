import upImg from "../asserts/img/up.png";
import logoImg from "../asserts/img/logo.jpg";
import fbLogo from "../asserts/img/fb.png";
import instaLogo from "../asserts/img/insta.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="logo-footer">
            <img src={logoImg} alt="logo" />
            <h2>Medi Home</h2>
          </div>
          <div className="address">
            <p>
              Address: Near Canara Bank, Kandoliya Road, Pauri 246001, Pauri
              Garhwal, Uttarakhand, India
            </p>
            <p>Phone: +917417071183</p>
            <p>Email: medihome.mh@gmail.com</p>
          </div>
        </div>
        <ul className="social-media">
          <li>
            <a href="/">
              <img className="social-logo" src={fbLogo} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="social-logo" src={instaLogo} alt="" />
            </a>
          </li>
        </ul>
        <p className="copyright-msg">Copyright © 2021 Medi Home</p>

        <a href="#top">
          <div className="going-top">
            <img src={upImg} alt="up" />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
