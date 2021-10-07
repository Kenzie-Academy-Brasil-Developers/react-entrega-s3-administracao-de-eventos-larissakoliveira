//import Menu from "./styles";
import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useHome } from "../../Providers/Home";
import { HomeBody } from "./styles";

const Home = () => {
  const { products } = useHome();
  console.log(products);
  return (
    <HomeBody>
      <Menu/>
      <h1>Escolha as bebidas para o evento</h1>
      <Display />
    </HomeBody>
  );
};

export default Home;
