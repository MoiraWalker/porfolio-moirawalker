import React from "react";
import "./HomePage.scss";
import { P5 } from "../../components/P5/P5";
import { BurgerBarContext } from "../../context/burgerBarContextProvider/burgerBarContextProvider";
import { useContext } from "react";

const HomePage = () => {
  const { open, setOpen } = useContext(BurgerBarContext);
  return (
    <div className="home-page page">
      <div class="page__title">
        <h1>Moira</h1>
        <h1>Walker</h1>
      </div>
      <P5 />
    </div>
  );
};
export default HomePage;
