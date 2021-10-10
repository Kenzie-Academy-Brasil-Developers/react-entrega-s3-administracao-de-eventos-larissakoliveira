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

  const removeDrinkFromGraduation = (removedDrink) => {
    const newListAfterRemovingDrink = drinksGraduationList.filter((drink)=> drink !== removedDrink)
    setDrinksGraduationList(newListAfterRemovingDrink)
    localStorage.setItem("drinksGraduationList", JSON.stringify(drinksGraduationStorage))
    return toast.error('Bebida removida')
  }

  return (
    <GraduationContext.Provider value={{ drinksGraduationList, removeDrinkFromGraduation, setDrinksGraduationList, addDrinksToGraduation}}>
      {children}
    </GraduationContext.Provider>
  );
};

export const useGraduation = () => useContext(GraduationContext);