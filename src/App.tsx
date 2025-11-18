import Header from "@/components/Header/Header";
import EvolutionSection from "@/components/Sections/EvolutionSection/EvolutionSection";
import FeaturesSection from "@/components/Sections/FeaturesSection/FeaturesSection";
import BannerSection from "@/components/Sections/BannerSection/BannerSection";
import GameChatSection from "@/components/Sections/GameChatSection/GameChatSection";
import WayToPlaySection from "@/components/Sections/WayToPlaySection/WayToPlaySection";
import GameShareSection from "@/components/Sections/GameShareSection/GameShareSection";
import Footer from "@/components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col relative items-center lg:items-start">
      <Header />

      <BannerSection />

      <EvolutionSection />

      <FeaturesSection />

      <GameChatSection />

      <WayToPlaySection />

      <GameShareSection />

      <Footer />
    </div>
  );
}

export default App;
