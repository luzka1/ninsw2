import { Linkedin } from "lucide-react";
import Container from "../UI/Container";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-6 2xl:py-12 text-white text-sm">
      <Container className="w-full">
        <ul className="w-full flex items-center gap-12">
          <li>Desenvolvido por: lucasgsantos1727@gmail.com</li>
          <li>
            © Nintendo. Todas as imagens utilizadas são do{" "}
            <a
              className="text-blue-900"
              href="https://www.nintendo.com/pt-br/gaming-systems/switch-2/features/"
            >
              site oficial da nintendo
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/lvkas/">
              <Linkedin />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
