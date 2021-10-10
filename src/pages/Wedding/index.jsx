import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useWedding } from "../../Providers/Wedding";
import {WeddingBody} from "./styles";

const Wedding = () => {

  const { drinksWeddingList } = useWedding();
  return (
    <WeddingBody>
      <Menu/>
      <Display drinksWeddingList={drinksWeddingList} />
    </WeddingBody>
  )
};

export default Wedding;