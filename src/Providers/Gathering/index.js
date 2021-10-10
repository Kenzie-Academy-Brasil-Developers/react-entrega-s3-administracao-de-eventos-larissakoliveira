import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const GatheringContext = createContext();

export const GatheringProvider = ({ children }) => {

  const [drinksGatheringList, setDrinksGatheringList] = useState([])

  const drinksGatheringStorage = JSON.parse(localStorage.getItem("drinksGatheringStorage")) || [];

  const addDrinksToGathering = (drink) => {
    setDrinksGatheringList([...drinksGatheringList, drink])
    localStorage.setItem("drinksGatheringStorage", JSON.stringify(drinksGatheringList));
    return toast.success('Bebida adicionada a CONFRATERNIZAÇÃO')
  }

  const removeDrinkFromGathering = (removedDrink) => {
    const newListAfterRemovingDrink = drinksGatheringList.filter((drink)=> drink !== removedDrink)
    setDrinksGatheringList(newListAfterRemovingDrink)
    localStorage.setItem("drinksGatheringStorage", JSON.stringify(drinksGatheringStorage))
    return toast.error('Bebida removida')
  }
  
  return (
    <GatheringContext.Provider value={{ drinksGatheringList, removeDrinkFromGathering, setDrinksGatheringList, addDrinksToGathering }}>
      {children}
    </GatheringContext.Provider>
  );
};

export const useGathering = () => useContext(GatheringContext);