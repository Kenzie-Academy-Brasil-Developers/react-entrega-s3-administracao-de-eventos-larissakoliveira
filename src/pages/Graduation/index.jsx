import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useGraduation } from "../../Providers/Graduation";
import { GraduationBody } from './styles'


const Graduation = () => {

  const { drinksGraduationList} = useGraduation()

  return (
    <GraduationBody>
      <Menu/>
      {drinksGraduationList > 0 &&
      <Display drinksGraduationList={drinksGraduationList}/>}
    </GraduationBody>
  );
};

export default Graduation;

