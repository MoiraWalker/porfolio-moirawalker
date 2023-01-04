import "./navBurger.scss";
import { NavMobile } from "../navMobile/navMobile";
import { BurgerBarContext } from "../../../context/burgerBarContextProvider/burgerBarContextProvider";
import { useContext } from "react";

export const NavBurger = () => {
  const { open, setOpen } = useContext(BurgerBarContext);

  return (
    <>
      <div
        className={open ? "burger--open" : "burger--closed"}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div
          className={
            open
              ? "burger-bar burger-bar-top--open"
              : "burger-bar burger-bar-top--closed"
          }
        ></div>
        <div
          className={
            open
              ? "burger-bar burger-bar-middle--open"
              : "burger-bar burger-bar-middle--closed"
          }
        ></div>
        <div
          className={
            open
              ? "burger-bar burger-bar-bottom--open"
              : "burger-bar burger-bar-bottom--closed"
          }
        ></div>
      </div>
    </>
  );
};
