import { motion } from "motion/react";
import Container from "@/components/UI/Container";

import mario from "/assets/mario-2x.avif";
import { Reveal } from "@/components/UI/Reveal";

export default function EvolutionSection() {
  return (
    <motion.section className="py-12 relative">
      <Container>
        <div className="flex">
          <div className="flex-1/2 flex flex-col items-center justify-center gap-12">
            <Reveal color="red">
              <h1 className="title">
                A próxima evolução do console Nintendo Switch chegou!
              </h1>
            </Reveal>
            <div>
              <Reveal color="red">
                <p className="paragraph">
                  Dê vida aos jogos em uma tela maior com resolução de 1080
                  pixels ou conecte uma TV e jogue em resolução de até 4K. O
                  suporte para HDR e taxas de quadros de até 120 qps permitem
                  que você desfrute de cores vivas, clareza e uma jogabilidade
                  suave.
                  <br />
                  <br />
                </p>
              </Reveal>

              <Reveal color="red">
                <p className="paragraph">
                  Encaixe os novos controles Joy-Con™ 2 com os conectores
                  magnéticos. Cada controle pode ser usado como um mouse em
                  jogos compatíveis.
                  <br />
                  <br />
                </p>
              </Reveal>

              <Reveal color="red">
                <p className="paragraph">
                  Vivencie novas experiências com jogos exclusivos, como Mario
                  Kart™ World, apenas no console Nintendo Switch 2. E tem mais!
                  Você ainda pode curtir jogos compatíveis da sua biblioteca do
                  Nintendo Switch.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="flex-1/2">
            <motion.img
              src={mario}
              initial={{ x: 300, opacity: 0, rotateY: 180 }}
              whileInView={{
                x: 200,
                opacity: 100,
                rotateY: 180,
              }}
              transition={{ type: "spring", delay: 0.5, stiffness: 50 }}
              alt="Mario com design do novo jogo (Mario Kart World)"
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
