import "./navMobile.scss";
import { BurgerBarContext } from "../../../context/burgerBarContextProvider/burgerBarContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBurger } from "../navBurger/navBurger";

export const NavMobile = () => {
  const { open, setOpen } = useContext(BurgerBarContext);

  return (
    <div className={open ? "navmobile--open" : "navmobile--closed"}>
      <div
        className={
          open ? "navmobile__wrapper--open" : "navmobile__wrapper--closed"
        }
      >
        <div className="logo__wrapper">
          <Link to="/" className={open ? "logo--open" : "logo--closed"}>
            MW
          </Link>
        </div>
        <NavBurger />
        <ul
          className={open ? "navmobile__list--open" : "navmobile__list--closed"}
        >
          <Link
            class="navmobile__link"
            onClick={() => setOpen(!open)}
            to="/design"
          >
            Design
          </Link>
          <Link
            class="navmobile__link"
            onClick={() => setOpen(!open)}
            to="/art"
          >
            Art
          </Link>
          <Link
            class="navmobile__link"
            onClick={() => setOpen(!open)}
            to="/code"
          >
            Code
          </Link>
          <Link
            class="navmobile__link"
            onClick={() => setOpen(!open)}
            to="/about"
          >
            About
          </Link>
        </ul>
      </div>
    </div>
  );
};
