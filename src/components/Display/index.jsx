
import DrinkCard from "../DrinkCard";
import {Container} from './styles'


const Display = ({products, drinksWeddingList, drinksGraduationList, drinksGatheringList}) => {

  return (
    <Container>
    {products.map((drink)=> (
      <DrinkCard drink={drink}key={drink.id}/>
    ))}
    </Container>
  );
};

export default Display;
