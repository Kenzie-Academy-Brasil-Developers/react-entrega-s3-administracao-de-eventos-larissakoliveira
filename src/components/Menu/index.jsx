import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import kenzieImg from '../../assets/kenzie.jpg'
import { useHistory } from "react-router";
import { useGraduation } from "../../Providers/Graduation";
import { useGathering } from "../../Providers/Gathering";
import { useWedding } from "../../Providers/Wedding";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const { drinksWeddingList } = useWedding();
  const { drinksGatheringList } = useGathering();
  const { drinksGraduationList } = useGraduation();

  return (
    
    <AppBar color='secondary' position="sticky">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}><img src={kenzieImg} alt='kenzie'/></MenuItem>
        <MenuItem onClick={() => sendTo("/wedding")}>Casamento {drinksWeddingList.length}</MenuItem>
        <MenuItem onClick={() => sendTo("/gathering")}>Confraternização {drinksGatheringList.length} </MenuItem>
        <MenuItem onClick={() => sendTo("/graduation")}>Formatura {drinksGraduationList.length} </MenuItem>
    
      </Toolbar>
      
    </AppBar>
  );
};

export default Menu;