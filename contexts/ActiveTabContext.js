// ActiveTabContext.js
import React, { createContext, useState } from "react";

const ActiveTabContext = createContext();

export const ActiveTabProvider = ({ children }) => {
  const [activeIcon, setActiveIcon] = useState("Home"); // Mettez ici la valeur par défaut de l'onglet actif

  return (
    <ActiveTabContext.Provider value={{ activeIcon, setActiveIcon }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabContext;
