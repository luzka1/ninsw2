import Slider from "@/components/Slider/Slider";
import Container from "@/components/UI/Container";

export default function WayToPlaySection() {
  return (
    <section className="py-24 h-dvh">
      <Container>
        <div className="">
          <h1 className="title">Escolha seu modo de jogar</h1>

          <p className="subtitle">
            Assim como os consoles Nintendo Switch anteriores, você pode
            aproveitar seus jogos a qualquer hora e em qualquer lugar no modo
            TV, no modo semiportátil ou no modo portátil.
          </p>
        </div>

        <Slider />
      </Container>
    </section>
  );
}
