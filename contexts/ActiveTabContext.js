// ActiveTabContext.js
import React, { createContext, useState } from "react";

const ActiveTabContext = createContext();

export const ActiveTabProvider = ({ children }) => {
  const [activeIcon, setActiveIcon] = useState("Home"); 

  return (
    <ActiveTabContext.Provider value={{ activeIcon, setActiveIcon }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabContext;


