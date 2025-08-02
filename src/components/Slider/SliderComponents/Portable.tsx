import pic from "/assets/ninsw2-pic-1.png";

export default function Portable() {
  return <div className="w-3xl h-full bg-white rounded-4xl shadow-2xl flex flex-col gap-12 px-12 py-4">
    <div className="w-full h-1/2">
      <img src={pic} alt="Nintendo Switch 2 Portable Mode" className="w-full h-full object-contain" />
    </div>

    <div className="w-full h-1/2">
      <h2 className="subtitle">Modo Portátil</h2>
      <p className="paragraph">
        Neste modo, o console vai com você. Com tela de 120 Hz, bateria durável e controles firmes com encaixe magnético, o Switch 2 entrega desempenho de console no formato mais prático. É perfeito para jogar em movimento, com qualidade e conforto.
      </p>
    </div>
  </div>;
}
