import "./styles.css";
import logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61560800888332"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a
              href="https://www.instagram.com/foodiesnchefs"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/invites">Invites</a>
            </li>
            <li>
              <a href="/menus">Menus</a>
            </li>
            <li>
              <a href="/offers">Offers</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
