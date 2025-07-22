import { ShoppingBasket } from "lucide-react";
import NintendoLogo from "@/components/UI/NintendoLogo";
import { Button } from "@/components/UI/Button";

import EvolutionSection from "@/components/Sections/EvolutionSection/EvolutionSection";
import Container from "./components/UI/Container";
import FeaturesSection from "@/components/Sections/FeaturesSection/FeaturesSection";
import BannerSection from "./components/Sections/BannerSection/BannerSection";

function App() {
  return (
    <div className="flex flex-col relative">
      <header className="py-8 absolute w-full z-10">
        <Container>
          <ul className="flex w-full items-center justify-between">
            <li>
              <NintendoLogo color="white" />
            </li>
            <li>
              <Button>
                <ShoppingBasket className="" /> Comprar
              </Button>
            </li>
          </ul>
        </Container>
      </header>

      <BannerSection />

      <EvolutionSection />

      <FeaturesSection />
    </div>
  );
}

export default App;
