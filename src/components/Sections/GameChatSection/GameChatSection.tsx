import Container from "@/components/UI/Container";

import cameraWSystem from "/assets/Camera-with-system.avif";
import bg1 from "/assets/Say-hello-to-GameChat-large-photo.avif";
import { Button } from "../../UI/Button";

export default function GameChatSection() {
  return (
    <section className="bg-red-600 py-12 h-[60vh] text-white">
      <Container>
        <div className="w-full h-full flex items-center justify-center gap-12">
          <div className="h-full flex-1/3 flex flex-col bg-white shadow-xl/20 rounded-4xl p-4 text-title">
            <div className="">
              <img className="rounded-3xl w-full h-full" src={bg1} />
            </div>
            <div className="flex flex-col pt-4 px-4 justify-between h-full">
              <h2 className="text-title font-bold text-xl">
                Todos juntos, a qualquer hora e em qualquer lugar
              </h2>

              <p>
                Agora você pode conversar por voz, compartilhar sua tela e se
                conectar por vídeo enquanto joga.
              </p>

              <Button className="-mx-4" variant={"destructive"}>
                Veja mais!
              </Button>
            </div>
          </div>
          <div className="h-full flex-1/2">
            <img
              src={cameraWSystem}
              className="h-full w-full object-contain"
              alt="Controle direito fora do console segurado por uma mão"
            />
          </div>
          <div className="h-full flex-1/3 flex flex-col bg-white shadow-xl/20 rounded-4xl p-4 text-title">
            <div className="">
              <img className="rounded-3xl w-full h-full" src={bg1} />
            </div>
            <div className="flex flex-col pt-4 px-4 justify-between h-full">
              <h2 className="text-title font-bold text-xl">
                Todos juntos, a qualquer hora e em qualquer lugar
              </h2>

              <p>
                Agora você pode conversar por voz, compartilhar sua tela e se
                conectar por vídeo enquanto joga.
              </p>

              <Button className="-mx-4" variant={"destructive"}>
                Veja mais!
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
