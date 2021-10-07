import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Card } from './styles'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #9c27b0 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    width: 170,
    padding: '0 7px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#3c52b2',
  },
  },
});

const DrinkCard = ({drink}) => {
  
  const classes = useStyles()
    return (
      <Card>
      <img src={drink.image_url} alt={drink.name}/>
      <h3>Fabricação: {drink.first_brewed}</h3>
      <details>{drink.description}</details>
      <h3>Volume: {drink.volume.value} {drink.volume.unit}</h3>
      <Button className={classes.root}>+ Casamento</Button>
      <Button className={classes.root}>+ Confraternização</Button>
      <Button className={classes.root}>+ Formatura</Button>
      </Card>
    );
  };
  
  export default DrinkCard;