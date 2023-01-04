import React from "react";
import "./HomePage.scss";
import { P5 } from "../../components/P5/P5";
import { BurgerBarContext } from "../../context/burgerBarContextProvider/burgerBarContextProvider";
import { useContext } from "react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { open, setOpen } = useContext(BurgerBarContext);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 740;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className="home-page page">
      <div class="page__title">
        <h1>Moira</h1>
        <h1>Walker</h1>
      </div>
      {width > 740 && <P5 />}
    </div>
  );
};
export default HomePage;
