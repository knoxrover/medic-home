import upImg from "../asserts/img/up2.png";
import logoImg from "../asserts/img/logo.jpg";

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
              Address: Near xyz chowk, Pauri 246001, Pauri Garhwal, Uttarakhand,
              India
            </p>
            <p>Phone: +911234567890</p>
            <p>Email: xyz@gmail.com</p>
          </div>
        </div>
        <ul className="social-media">
          <li>
            <a href="/">Logo1</a>
          </li>
          <li>
            <a href="/">Logo2</a>
          </li>
          <li>
            <a href="/">Logo3</a>
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
