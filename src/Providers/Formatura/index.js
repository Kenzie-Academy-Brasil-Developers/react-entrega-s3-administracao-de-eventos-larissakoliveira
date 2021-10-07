import { createContext, useContext, useState } from "react";

const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {

  return (
    <FormaturaContext.Provider value={{ }}>
      {children}
    </FormaturaContext.Provider>
  );
};

export const useCounter = () => useContext(FormaturaContext);