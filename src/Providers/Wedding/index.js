import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {

  const [drinksWeddingList, setDrinksWeddingList] = useState([])

  const drinksWeddingStorage = JSON.parse(localStorage.getItem("drinksWeddingStorage")) || [];

  const addDrinksToWedding = (drink) => {
    setDrinksWeddingList([...drinksWeddingList, drink])
    localStorage.setItem("drinksWeddingStorage", JSON.stringify(drinksWeddingStorage));
    return toast.success('Bebida adicionada ao CASAMENTO')
  }

  return (
    <WeddingContext.Provider value={{ drinksWeddingList, addDrinksToWedding, setDrinksWeddingList }}>
      {children}
    </WeddingContext.Provider>
  );
};

export const useWedding = () => useContext(WeddingContext);