
import DrinkCard from "../DrinkCard";
import {Container} from './styles'


const Display = ({products, drinksWeddingList, drinksGraduationList, drinksGatheringList}) => {

  return (
    <Container>
     {products &&
    products.map((drink)=> (
      <DrinkCard type='events' drink={drink}key={drink.id}/>
    ))}
      {drinksWeddingList &&
    drinksWeddingList.map((drink)=> (
      <DrinkCard type='wedding' drink={drink}key={drink.id}/>
    ))}
    {drinksGraduationList &&
    drinksGraduationList.map((drink)=> (
      <DrinkCard type='graduation' drink={drink}key={drink.id}/>
    ))}
    {drinksGatheringList &&
    drinksGatheringList.map((drink)=> (
      <DrinkCard type='gathering' drink={drink}key={drink.id}/>
    ))}
    </Container>
  );
};

export default Display;
