import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import api from '../../services/api'

import { ProductsDeletar } from "../../productsDeletar";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {

    const [products, setProducts] = useState(['teste'])

    const showProducts = () => {
        axios
          .get(api)
          .then((response) => {
            setProducts(response.data);
        //     console.log(products);
           })
          .catch((err) => console.log(err))
        //   console.log(products);
      };
      //console.log(products);
      useEffect(() => {
        showProducts();
      }, [products]);

  return (
    <HomeContext.Provider value={{ products, ProductsDeletar }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);