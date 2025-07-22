import { motion } from "motion/react";
import { Reveal } from "../../UI/Reveal";

import nsw2 from "/assets/ninsw2-pic-2.png";
import mkworld from "/assets/mkworld.mp4";

const photos: { url: string; alt: string }[] = [
  {
    url: "/assets/lifestyle-tableTop.avif",
    alt: "nintendo switch apoiado em uma mesa e os joy-con sendo segurados por um homem",
  },
  {
    url: "/assets/Features-Sayhello-Collage2-Image-12.avif",
    alt: "um homem e uma mulher sentados em um sofa jogando",
  },
  {
    url: "/assets/Features-Sayhello-Collage2-Image-11.avif",
    alt: "duas pessoas segurando controles com o console apoiado em uma mesa",
  },
  {
    url: "/assets/Features-Sayhello-Collage2-Image-7.avif",
    alt: "nintendo switch 2 no modo docker e conectado com a camera do switch 2",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-radial flex flex-col from-slate-950 from-40% to-zinc-950 gap-72 py-24">
      <div className="flex flex-col justify-center items-center gap-14">
        <div>
          <Reveal color="none">
            <h1 className="title text-white">Um console maior e melhor!</h1>
          </Reveal>
        </div>

        <motion.div
          className="w-2/3  h-fit relative"
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{
            type: "spring",
            ease: "easeOut",
            duration: 2,
            delay: 0.2,
          }}
        >
          <img src={nsw2} alt="imagem estatica do nintendo switch 2" />
          <video
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            src={mkworld}
            autoPlay
            loop
            width="60%"
            height="auto"
          />
        </motion.div>

        <div className="w-2/3">
          <Reveal color="none">
            <p className="paragraph text-white">
              Aproximadamente 4,5 pol (11,43 cm) de altura, 10,7 pol (27,2 cm)
              de largura e 0,55 pol (1,4 cm) de espessura (com os controles
              Joy-Con™ 2 encaixados). *A espessura máxima das pontas das regiões
              salientes dos botões ZL/ZR é de 1,2 pol (3 cm).
            </p>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-14">
        <div>
          <Reveal color="none">
            <h1 className="title text-white">E com amigos é sempre melhor!</h1>
          </Reveal>
        </div>

        <motion.div
          className="w-2/3 h-[600px] relative grid grid-rows-2 grid-cols-[1fr_2fr] gap-4"
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{
            type: "spring",
            ease: "easeOut",
            duration: 2,
            delay: 0.2,
          }}
        >
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo.url}
                className="w-full h-full rounded-4xl object-cover"
                alt={photo.alt}
              />
            </div>
          ))}
        </motion.div>

        <div className="w-2/3">
          <Reveal color="none">
            <p className="paragraph text-white">
              Comece um bate-papo com seus amigos a qualquer hora com o botão C!
              Compartilhe a tela do seu jogo enquanto conversa para ver o que
              está rolando. Para um toque ainda mais especial, veja os rostos
              uns dos outros ao se conectar com a câmera do Nintendo Switch 2 ou
              outras câmeras USB-C® compatíveis (vendidas separadamente).
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
