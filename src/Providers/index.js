import { CasamentoProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { FormaturaProvider } from "./Formatura";
import { HomeProvider } from "./Home";

const Providers = ({ children }) => {
  return (
    <CasamentoProvider>
        <FormaturaProvider>
            <ConfraternizacaoProvider>
              <HomeProvider>
                {children}
              </HomeProvider>
            </ConfraternizacaoProvider>
        </FormaturaProvider>
    </CasamentoProvider>
  );
};

export default Providers;