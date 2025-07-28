
import Header from "@/components/Header/Header";
import EvolutionSection from "@/components/Sections/EvolutionSection/EvolutionSection";
import FeaturesSection from "@/components/Sections/FeaturesSection/FeaturesSection";
import BannerSection from "./components/Sections/BannerSection/BannerSection";

function App() {
  return (
    <div className="flex flex-col relative">
      <Header />
      
      <BannerSection />

      <EvolutionSection />

      <FeaturesSection />
    </div>
  );
}

export default App;
