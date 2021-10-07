import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import kenzieImg from '../../assets/kenzie.jpg'
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  //const cart = useSelector((store) => store.cart);

  const sendTo = (path) => {
    history.push(path);
  };

  //const totalItemsCart = cart.length === 0 ? '' : cart.length

  return (
    
    <AppBar color='secondary' position="sticky">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}><img src={kenzieImg} alt='kenzie'/></MenuItem>
        <MenuItem onClick={() => sendTo("/casamento")}>Casamento</MenuItem>
        <MenuItem onClick={() => sendTo("/confraternizacao")}>Confraternização</MenuItem>
        <MenuItem onClick={() => sendTo("/formatura")}>Formatura</MenuItem>
    
      </Toolbar>
      
    </AppBar>
  );
};

export default Menu;