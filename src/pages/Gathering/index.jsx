import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useGathering } from "../../Providers/Gathering";


const Gathering = () => {

  const { drinksGatheringList } = useGathering();

  return (
    <>
      <Menu/>
      {drinksGatheringList > 0 && 
      <Display drinksGatheringList={drinksGatheringList} />}
    </>
  );
};

export default Gathering;

