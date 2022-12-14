import { NavBurger } from "../navBurger/navBurger";
import { NavDesktop } from "../navDesktop/navDesktop";
import React from "react";

export const NavApp = () => {
  return (
    <div>
      <NavBurger />
      <NavDesktop />
    </div>
  );
};
