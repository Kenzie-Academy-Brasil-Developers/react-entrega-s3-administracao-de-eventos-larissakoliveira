import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useGathering } from "../../Providers/Gathering";
import { GatheringBody } from "./styles";


const Gathering = () => {

  const { drinksGatheringList } = useGathering();

  return (
    <GatheringBody>
      <Menu/>
      <Display drinksGatheringList={drinksGatheringList} />
    </GatheringBody>
  );
};

export default Gathering;

