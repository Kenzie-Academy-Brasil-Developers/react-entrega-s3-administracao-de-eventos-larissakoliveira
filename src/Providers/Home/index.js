import apiDrinks from '../../services/apiDrinks'
import { createContext, useContext, useState } from "react";


const HomeContext = createContext();

export const HomeProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const showProducts = () => {
      apiDrinks.get()
          .then((response) => {
            setProducts(response.data);
           })
          .catch((err) => console.log(err))
      };

  return (
    <HomeContext.Provider value={{ products, showProducts}}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);