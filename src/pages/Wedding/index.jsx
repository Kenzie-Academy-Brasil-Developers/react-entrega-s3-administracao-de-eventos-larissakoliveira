import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useWedding } from "../../Providers/Wedding";
import Button from "@material-ui/core/Button";
import { Card } from "../../components/DrinkCard/styles";

const Wedding = () => {

  const { drinksWeddingList } = useWedding();
  console.log(drinksWeddingList)
  return (
    <>
      <Menu/>
      {/* {drinksWeddingList > 0 &&
      <Display drinksWeddingList={drinksWeddingList} />} */}
      {drinksWeddingList.map((drink)=>(
         <Card>
         <img src={drink.image_url} alt={drink.name} />
         <h3>Fabricação: {drink.first_brewed}</h3>
         <details>{drink.description}</details>
         <h3>
           Volume: {drink.volume.value} {drink.volume.unit}
         </h3>
         <Button>Remover</Button>
       </Card>
      ))}
    </>)
};

export default Wedding;

