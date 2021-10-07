import { createContext, useContext, useState } from "react";

const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {

  return (
    <CasamentoContext.Provider value={{ }}>
      {children}
    </CasamentoContext.Provider>
  );
};

export const useCasamento = () => useContext(CasamentoContext);