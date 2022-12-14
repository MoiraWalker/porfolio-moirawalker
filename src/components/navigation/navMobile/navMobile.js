import "./navMobile.scss";
import { BurgerBarContext } from "../../../context/burgerBarContextProvider/burgerBarContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const NavMobile = () => {
  const { open, setOpen } = useContext(BurgerBarContext);

  return (
    <div className="navmobile">
      <div className="logo__wrapper">
        <Link to="/" className={open ? "logo--open" : "logo--closed"}>
          MW
        </Link>
      </div>
      <ul
        className={open ? "navmobile__list--open" : "navmobile__list--closed"}
      >
        <Link class="navmobile__link" to="/design">
          Design
        </Link>
        <Link class="navmobile__link" to="/art">
          Art
        </Link>
        <Link class="navmobile__link" to="/code">
          Code
        </Link>
        <Link class="navmobile__link" to="/about">
          About
        </Link>
      </ul>
    </div>
  );
};
