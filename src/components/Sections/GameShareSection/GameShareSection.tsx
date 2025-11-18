import Container from "@/components/UI/Container";
import { motion } from "motion/react";

import switch2 from "/assets/sw2jamboree.png";
import switchOled from "/assets/oled.png";
import switchLite from "/assets/lite.png";
import { Wifi } from "lucide-react";
import { Reveal } from "@/components/UI/Reveal";

export default function GameShareSection() {
  return (
    <section className="py-12 lg:min-h-dvh flex">
      <Container>
        <div className="w-full flex flex-col justify-center items-center gap-12">
          <div>
            <Reveal color="none">
              <h1 className="title">
                Compartilhe seus jogos localmente
              </h1>

              <p className="paragraph">
                GameShare local permite multijogador com apenas uma cópia do
                jogo, transmitindo o jogo de um Switch 2 para outros consoles
                nas proximidades (Switch 2 ou Switch). O convidado apenas
                participa enquanto a sessão estiver ativa. Simples, prático e
                rápido e o melhor: nada de download!
              </p>
            </Reveal>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="w-1/2">
                <motion.img
                  initial={{ opacity: 0, y: 75 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    stiffness: 100,
                    ease: "easeInOut",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
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
                <motion.img
                  initial={{ opacity: 0, y: 25 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    stiffness: 100,
                    ease: "easeInOut",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  src={switch2}
                  className="w-full object-contain drop-shadow-xl"
                  alt="nintendo switch 2"
                />
              </div>
              <div className="flex-1/3">
                <motion.img
                  initial={{ opacity: 0, y: 25 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                    stiffness: 100,
                    ease: "easeInOut",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  src={switchOled}
                  className="w-full object-contain drop-shadow-xl"
                  alt="nintendo switch oled"
                />
              </div>
              <div className="flex-1/3 flex items-center justify-center">
                <motion.img
                  initial={{ opacity: 0, y: 25 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    stiffness: 100,
                    ease: "easeInOut",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  src={switchLite}
                  className="w-[80%] object-contain drop-shadow-xl"
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
