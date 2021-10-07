import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
//import api from '../../services/api'

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const showProducts = () => {
        axios
          .get('https://api.punkapi.com/v2/beers')
          .then((response) => {
            setProducts(response.data);
           })
          .catch((err) => console.log(err))
      };
      useEffect(() => {
        showProducts();
      }, [products]);

  return (
    <HomeContext.Provider value={{ products }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);