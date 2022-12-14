import "./navDesktop.scss";
import { Link } from "react-router-dom";

export const NavDesktop = () => {
  return (
    <div className="navdesktop">
      <div className="logo__wrapper">
        <Link to="/" className="logo">
          MW
        </Link>
      </div>
      <ul className="navdesktop__list">
        <Link class="navdesktop__link" to="/design">
          Design
        </Link>
        <Link class="navdesktop__link" to="/art">
          Art
        </Link>
        <Link class="navdesktop__link" to="/code">
          Code
        </Link>
        <Link class="navdesktop__link" to="/about">
          About
        </Link>
      </ul>
    </div>
  );
};
