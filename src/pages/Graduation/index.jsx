import Display from "../../components/Display";
import Menu from "../../components/Menu";
import { useGraduation } from "../../Providers/Graduation";
import { GraduationBody } from './styles'


const Graduation = () => {

  const { drinksGraduationList} = useGraduation()

  return (
    <GraduationBody>
      <Menu/>
      <Display drinksGraduationList={drinksGraduationList}/>
    </GraduationBody>
  );
};

export default Graduation;

