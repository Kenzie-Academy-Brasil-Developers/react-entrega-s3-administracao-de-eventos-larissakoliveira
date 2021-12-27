import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import kenzieImg from '../../assets/kenzie.jpg'
import { useHistory } from "react-router";
import { useGraduation } from "../../Providers/Graduation";
import { useGathering } from "../../Providers/Gathering";
import { useWedding } from "../../Providers/Wedding";
import {useMediaQuery} from '@mui/material';
import wedding from '../../assets/wedding.png'
import gathering from '../../assets/gathering.png'
import graduation from '../../assets/graduation.png'



const Menu = () => {

   const largerThan500 = useMediaQuery('(min-width: 500px)');

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const { drinksWeddingList } = useWedding();
  const { drinksGatheringList } = useGathering();
  const { drinksGraduationList } = useGraduation();
      

  return (
    
    largerThan500 ? 

    <AppBar color='secondary' position="sticky">
      <Toolbar sx={{
    display:'flex',
    flexDirection:'column',
    textSize:'25px'
  }}>
        <MenuItem onClick={() => sendTo("/")}><img src={kenzieImg} alt='kenzie'/></MenuItem>
        <MenuItem onClick={() => sendTo("/wedding")}>Casamento {drinksWeddingList.length}</MenuItem>
        <MenuItem onClick={() => sendTo("/gathering")}>Confraternização {drinksGatheringList.length} </MenuItem>
        <MenuItem onClick={() => sendTo("/graduation")}>Formatura {drinksGraduationList.length} </MenuItem>
      </Toolbar>
    </AppBar>

    :

    <AppBar color='secondary' position="sticky">
       <MenuItem onClick={() => sendTo("/")}><img src={kenzieImg} alt='kenzie'/></MenuItem>
    <Toolbar>
      <MenuItem onClick={() => sendTo("/wedding")}><img src={wedding} alt='wedding'/>  &nbsp;	&nbsp;{drinksWeddingList.length}</MenuItem>
      <MenuItem onClick={() => sendTo("/gathering")}><img src={gathering} alt='wedding'/> &nbsp; &nbsp; {drinksGatheringList.length} </MenuItem>
      <MenuItem font-size="20px" onClick={() => sendTo("/graduation")}><img src={graduation} alt='wedding'/> &nbsp; &nbsp; {drinksGraduationList.length} </MenuItem>
    </Toolbar>
  </AppBar>

  );
};

export default Menu;