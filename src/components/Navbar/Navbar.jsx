import "./styles.css";
import logo from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <ul className="nav-links">
          <a href="/">
            <li>Events</li>
          </a>
          <a href="/">
            <li>Invites</li>
          </a>
          <a href="/">
            <li>About</li>
          </a>
        </ul>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
