import React, { createContext, useState } from "react";
export const BurgerBarContext = createContext({});

export const BurgerBarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <BurgerBarContext.Provider value={{ open, setOpen }}>
      {children}
    </BurgerBarContext.Provider>
  );
};
