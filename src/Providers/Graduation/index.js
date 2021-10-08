import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {

  const [drinksGraduationList, setDrinksGraduationList] = useState([])

  const drinksGraduationStorage = JSON.parse(localStorage.getItem("drinksGraduationStorage")) || [];

  const addDrinksToGraduation = (drink) => {
    setDrinksGraduationList([...drinksGraduationList, drink])
    localStorage.setItem("drinksGraduationStorage", JSON.stringify(drinksGraduationList))
    return toast.success('Bebida adicionada a FORMATURA')
  }

  return (
    <GraduationContext.Provider value={{ drinksGraduationList, setDrinksGraduationList, addDrinksToGraduation}}>
      {children}
    </GraduationContext.Provider>
  );
};

export const useGraduation = () => useContext(GraduationContext);