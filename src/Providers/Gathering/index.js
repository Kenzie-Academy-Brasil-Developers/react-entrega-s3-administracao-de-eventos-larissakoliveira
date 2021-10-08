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

  return (
    <GatheringContext.Provider value={{ drinksGatheringList, setDrinksGatheringList, addDrinksToGathering }}>
      {children}
    </GatheringContext.Provider>
  );
};

export const useGathering = () => useContext(GatheringContext);