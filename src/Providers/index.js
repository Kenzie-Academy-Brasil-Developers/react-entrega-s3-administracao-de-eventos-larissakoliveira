import { WeddingProvider } from "./Wedding";
import { GatheringProvider } from "./Gathering";
import { GraduationProvider } from "./Graduation";
import { HomeProvider } from "./Home";

const Providers = ({ children }) => {
  return (
    <WeddingProvider>
        <GraduationProvider>
            <GatheringProvider>
              <HomeProvider>
                {children}
              </HomeProvider>
            </GatheringProvider>
        </GraduationProvider>
    </WeddingProvider>
  );
};

export default Providers;