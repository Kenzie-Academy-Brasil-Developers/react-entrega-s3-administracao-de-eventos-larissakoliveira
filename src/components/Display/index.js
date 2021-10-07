import Button from '@material-ui/core/Button';
import { useHome } from "../../Providers/Home"
import {Container, Card} from './styles'
import { makeStyles } from '@material-ui/styles';

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

const Display = () => {

  const { products } = useHome()

  const classes = useStyles();

  return (
    <Container>
    {products.map((item)=> (
        <Card>
        <img src={item.image_url} alt={item.name}/>
        <h3>Fabricação: {item.first_brewed}</h3>
        <details>{item.description}</details>
        <h3>Volume: {item.volume.value} {item.volume.unit}</h3>
        <Button className={classes.root}>+ Casamento</Button>
        <Button className={classes.root}>+ Confraternização</Button>
        <Button className={classes.root}>+ Formatura</Button>
        </Card>
    ))}
    </Container>
  );
};

export default Display;