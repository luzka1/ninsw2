import { Reveal } from "@/components/UI/Reveal";
import camera from "/assets/ninsw2-camera.png";
import { motion } from "motion/react";
import chat from "/assets/gamechat.avif";

export default function GameChatSection() {
  return (
    <section className="w-[90vw] py-12 flex flex-col lg:flex-row min-h-dvh">
      <div className="w-full lg:w-1/2 h-full">
        <div className="h-full w-full flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 100, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              ease: "easeOut",
              duration: 2,
              delay: 0.2,
            }}
            className="h-full object-contain"
            src={camera}
            alt="Nova câmera do nintendo switch 2 (peça vendida separadamente)"
          />
        </div>
      </div>

      <div className="lg:w-1/2 h-full lg:pr-32">
        <div className="h-full w-full flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col gap-2">
            <div>
              <Reveal color="red">
                <h1 className="title">
                  Conheça o GameChat!
                </h1>
              </Reveal>

              <Reveal color="red">
                <p className="subtitle text-xl 2xl:text-2xl">
                  Agora você pode conversar por voz, compartilhar sua tela e se
                  conectar por vídeo enquanto joga.
                </p>
              </Reveal>
            </div>

            <Reveal color="red">
              <p className="paragraph">
                Seus amigos e familiares nunca estão longe com o GameChat. Basta
                apertar o botão C do Joy-Con 2 direito e iniciar um bate-papo
                online com seus amigos no Nintendo Switch 2 quando quiser.
              </p>
            </Reveal>

            <br />

            <Reveal color="red">
              <p className="paragraph">
                O console Nintendo Switch 2 tem um microfone embutido que pode
                captar sua voz, mesmo que você esteja longe. Sua voz será
                transmitida em alto e bom som para seus amigos.
              </p>
            </Reveal>

            <br />

            <Reveal color="red">
              <p className="paragraph">
                Compartilhe sua tela em tempo real, mesmo que estejam jogando
                jogos diferentes. Forme uma equipe no mesmo jogo ou assista aos
                seus amigos jogando outros jogos. O objetivo é se divertir.
              </p>
            </Reveal>
          </div>

          <div className="flex items-center w-full justify-center">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 100, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                ease: "easeOut",
                duration: 2,
                delay: 0.2,
              }}
              src={chat}
              className="rounded-3xl w-[80%] shadow-xl"
              alt="Televisão com novo GameChat do nintendo switch 2 com 4 pessoas jogando"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
