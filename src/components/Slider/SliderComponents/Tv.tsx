import pic from "/assets/ninsw2-pic-3.avif";

export default function Tv() {
  return <div className="w-3xl h-full bg-white rounded-4xl shadow-2xl flex flex-col gap-12 px-12 py-4">
    <div className="w-full h-1/2">
      <img src={pic} alt="Nintendo Switch 2 Portable Mode" className="w-full h-full object-contain" />
    </div>

    <div className="w-full h-1/2">
      <h2 className="subtitle">Modo TV</h2>
      <p className="paragraph">
        Ao conectar o Switch 2 à dock, você joga na TV com resolução 4K e som 3D. Ideal para partidas locais ou aventuras solo mais cinematográficas. Os Joy-Con 2 e o desempenho melhorado garantem jogabilidade fluida e visual impressionante. É a forma mais completa de curtir seus jogos em tela grande.
      </p>
    </div>
  </div>;
}
