import { createContext, useContext, useState } from "react";

const ConfraternizacaoContext = createContext();

export const ConfraternizacaoProvider = ({ children }) => {

  return (
    <ConfraternizacaoContext.Provider value={{ }}>
      {children}
    </ConfraternizacaoContext.Provider>
  );
};

export const useConfraternizacao = () => useContext(ConfraternizacaoContext);