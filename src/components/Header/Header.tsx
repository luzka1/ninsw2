import { ShoppingBasket } from "lucide-react";
import Container from "@/components/UI/Container";
import NintendoLogo from "@/components/UI/NintendoLogo";
import { Button } from "@/components/UI/Button";

export default function Header() {
  return (
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
  );
}
