
import { useHome } from "../../Providers/Home";
import DrinkCard from "../DrinkCard";
import {Container} from './styles'


const Display = ({products}) => {

  //const { products } = useHome()

  console.log(products)

  return (
    <Container>
    {products.map((drink)=> (
      <DrinkCard drink={drink}/>
    ))}
    </Container>
  );
};

export default Display;