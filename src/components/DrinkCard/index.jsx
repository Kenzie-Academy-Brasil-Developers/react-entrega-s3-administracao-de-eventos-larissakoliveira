import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Card } from "./styles";
import { useWedding } from "../../Providers/Wedding";
import { useGathering } from "../../Providers/Gathering";
import { useGraduation } from "../../Providers/Graduation";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #9c27b0 90%)",
    border: 0,
    borderRadius: 5,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    width: 170,
    padding: "0 7px",
    "&:hover": {
      backgroundColor: "white",
      color: "#3c52b2",
    },
  },
});

const DrinkCard = ({ drink, type }) => {
  const classes = useStyles();

  const { addDrinksToWedding, removeDrinkFromWedding } = useWedding();
  const { addDrinksToGraduation } = useGraduation();
  const { addDrinksToGathering } = useGathering();

  return (
    
    <Card>
      <img src={drink.image_url} alt={drink.name} />
      <h3>{drink.name}</h3>
      <h3>Fabricação: {drink.first_brewed}</h3>
      <details>{drink.description}</details>
      <h3>Volume: {drink.volume.value} {drink.volume.unit}</h3>
      
        {type === 'events' ?
        <>
      <Button
        onClick={() => addDrinksToWedding(drink)}
        className={classes.root}
      >
        + Casamento
      </Button>
      <Button
        onClick={() => addDrinksToGathering(drink)}
        className={classes.root}
      >
        + Confraternização
      </Button>
      <Button
        onClick={() => addDrinksToGraduation(drink)}
        className={classes.root}
      >
        + Formatura
      </Button>
        </>
      :
      
      <Button
        onClick={() => removeDrinkFromWedding(drink)}
        className={classes.root}
      >
        Remover
      </Button>}
    </Card>
  );
};

export default DrinkCard;
