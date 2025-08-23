import WaysToPlayComponent from "@/components/Sections/WayToPlaySection/WaysToPlayComponent";
import Container from "@/components/UI/Container";
import { Reveal } from "@/components/UI/Reveal";

type ComponentTypes = {
  img: string;
  alt: string;
  title: string;
  text: string;
};

export default function WayToPlaySection() {
  const items: ComponentTypes[] = [
    {
      img: "/assets/NintendoSwitch2_Lifestyle_cut_01_0313.jpg",
      alt: "Nintendo Switch 2 Docked Mode",
      title: "Modo Tv",
      text: "Ao conectar o Switch 2 à dock, você joga na TV com resolução 4K e som 3D. Ideal para partidas locais ou aventuras solo mais cinematográficas. Os Joy-Con 2 e o desempenho melhorado garantem jogabilidade fluida e visual impressionante. É a forma mais completa de curtir seus jogos em tela grande.",
    },
    {
      img: "/assets/lifestyle-tableTop.avif",
      alt: "Nintendo Switch 2 SemiPortable Mode",
      title: "Modo Semiportátil",
      text: "Com o suporte traseiro ajustável, o console pode ser apoiado sobre uma mesa enquanto os Joy-Con ficam livres para jogar. Ótimo para dividir a tela com amigos em viagens, cafés ou encontros. A tela de 7,9 com HDR garante ótima visibilidade mesmo longe da TV. É perfeito para jogar em movimento, com qualidade e conforto.",
    },
    {
      img: "/assets/29145.jpeg",
      alt: "Nintendo Switch 2 Portable Mode",
      title: "Modo Portátil",
      text: "Neste modo, o console vai com você. Com tela de 120 Hz, bateria durável e controles firmes com encaixe magnético, o Switch 2 entrega desempenho de console no formato mais prático.",
    },
  ];

  return (
    <section className="py-24 h-dvh">
      <Container className="">
        <div className="flex flex-col gap-12">
          <div>
            <Reveal color="none">
              <h1 className="title">Escolha seu modo de jogar</h1>

              <p className="paragraph">
                Assim como os consoles Nintendo Switch anteriores, você pode
                aproveitar seus jogos a qualquer hora e em qualquer lugar no
                modo TV, no modo semiportátil ou no modo portátil.
              </p>
            </Reveal>
          </div>

          <div className="flex justify-between">
            {items.map((item, index) => {
              return <WaysToPlayComponent key={index} item={item} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
