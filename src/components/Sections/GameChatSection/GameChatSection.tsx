import Container from "@/components/UI/Container";
import camera from "/assets/ninsw2-camera.png";

export default function GameChatSection() {
  return (
    <section className="py-12 h-dvh">
      <div className="w-full">
        <img src={camera} alt="Câmera do nintendo switch 2 (item separado)" />
      </div>
    </section>
  );
}
