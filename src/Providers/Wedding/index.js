import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {

  const drinksWeddingStorage = JSON.parse(localStorage.getItem("drinksWeddingStorage")) || []

  const [drinksWeddingList, setDrinksWeddingList] = useState(drinksWeddingStorage)

  const addDrinksToWedding = (drink) => {
    setDrinksWeddingList([...drinksWeddingList, drink])
    localStorage.setItem("drinksWeddingStorage", JSON.stringify(drinksWeddingList))
    return toast.success('Bebida adicionada ao CASAMENTO')
  }

  const removeDrinkFromWedding = (removedDrink) => {
    const newListAfterRemovingDrink = drinksWeddingList.filter((drink)=> drink !== removedDrink)
    setDrinksWeddingList(newListAfterRemovingDrink)
    localStorage.setItem("drinksWeddingStorage", JSON.stringify(newListAfterRemovingDrink))
    return toast.error('Bebida removida')
  }

  return (
    <WeddingContext.Provider value={{ drinksWeddingList, addDrinksToWedding, setDrinksWeddingList, removeDrinkFromWedding }}>
      {children}
    </WeddingContext.Provider>
  );
};

export const useWedding = () => useContext(WeddingContext);