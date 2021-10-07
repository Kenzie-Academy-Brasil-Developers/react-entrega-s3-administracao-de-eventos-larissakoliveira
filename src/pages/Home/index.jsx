//import Menu from "./styles";
import { useEffect } from "react";
import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useHome } from "../../Providers/Home";
import { HomeBody } from "./styles";

const Home = () => {
  const { products, showProducts } = useHome();
  

  useEffect(() => {
    showProducts();
  }, []);

  return (
    <HomeBody>
      <Menu/>
      <h1>Escolha as bebidas para o evento</h1>
      {products.length > 0 &&
      <Display products={products} />}
    </HomeBody>
  );
};

export default Home;