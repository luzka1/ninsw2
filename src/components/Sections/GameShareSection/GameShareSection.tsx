import Container from "@/components/UI/Container";
import { motion } from "motion/react";

import switch2 from "/assets/ninsw2-pic-2.png";
import switchOled from "/assets/oled.webp";
import switchLite from "/assets/lite.png";
import { Wifi } from "lucide-react";
import { Reveal } from "@/components/UI/Reveal";

export default function GameShareSection() {
  return (
    <section className="py-24 h-dvh flex">
      <Container>
        <div className="w-full flex flex-col justify-center items-center gap-12">
          <div>
            <Reveal color="none">
              <h1 className="title">Compartilhe seus jogos localmente</h1>

              <p className="paragraph">
                GameShare local permite multijogador com apenas uma cópia do
                jogo, transmitindo o jogo de um Switch 2 para outros consoles
                nas proximidades (Switch 2 ou Switch). O convidado apenas
                participa enquanto a sessão estiver ativa. Simples, prático e
                rápido — nada de download!
              </p>
            </Reveal>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="w-1/2">
                <img
                  className="w-full h-full object-contain drop-shadow-xl"
                  src={switch2}
                  alt="nintendo switch 2"
                />
              </div>
            </div>

            <div className="my-12">
              <Wifi className="rotate-180 animate-pulse h-24 w-24 text-bgRed" />
            </div>

            <div className="flex gap-12">
              <div className="flex-1/3">
                <img
                  src={switch2}
                  className="w-full object-contain drop-shadow-xl"
                  alt="nintendo switch 2"
                />
              </div>
              <div className="flex-1/3">
                <img
                  src={switchOled}
                  className="w-full object-contain drop-shadow-xl"
                  alt="nintendo switch oled"
                />
              </div>
              <div className="flex-1/3">
                <img
                  src={switchLite}
                  className="w-full object-contain drop-shadow-xl"
                  alt="nintendo switch lite"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
