import camera from "/assets/ninsw2-camera.png";
import { motion } from "motion/react";

export default function GameChatSection() {
  return (
    <section className="py-12 h-dvh flex">
      <div className="w-1/2 h-full">
        <div className="h-full w-full flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ delay: 0.5 }}
            className="h-full"
            src={camera}
            alt="Nova câmera do nintendo switch 2 (peça vendida separadamente)"
          />
        </div>
      </div>

      <div className="w-1/2 h-full md:pr-16 lg:pr-32">
        <div className="h-full w-full">
          <div>
            <h1 className="title">Conheça o GameChat!</h1>
            <p className="paragraph">
              Agora você pode conversar por voz, compartilhar sua tela e se
              conectar por vídeo enquanto joga.
            </p>
          </div>

          <div className="">
            <p className="paragraph">
              Seus amigos e familiares nunca estão longe com o GameChat. Basta
              apertar o botão C do Joy-Con 2 direito e iniciar um bate-papo
              online com seus amigos no Nintendo Switch 2 quando quiser.
              <br />
              <br />
              O console Nintendo Switch 2 tem um microfone embutido que pode
              captar sua voz, mesmo que você esteja longe. Sua voz será
              transmitida em alto e bom som para seus amigos.
              <br />
              <br />
              Compartilhe sua tela em tempo real, mesmo que estejam jogando
              jogos diferentes. Forme uma equipe no mesmo jogo ou assista aos
              seus amigos jogando outros jogos. O objetivo é se divertir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
