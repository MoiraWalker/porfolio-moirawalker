import { NavBurger } from "../navBurger/navBurger";
import { NavDesktop } from "../navDesktop/navDesktop";
import React from "react";
import { NavMobile } from "../navMobile/navMobile";
import { useState, useEffect } from "react";

export const NavApp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 740;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  {
    return width > 700 ? <NavDesktop /> : <NavMobile />;
  }
};
