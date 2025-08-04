import pic from "/assets/lifestyle-tableTop.avif";

export default function SemiPortable() {
  return <div className="w-lg h-full bg-white rounded-4xl shadow-2xl flex flex-col gap-12 px-12 py-4">
    <div className="w-full h-1/2">
      <img src={pic} alt="Nintendo Switch 2 Portable Mode" className="w-full h-full object-contain" />
    </div>

    <div className="w-full h-1/2">
      <h2 className="subtitle">Modo Semi-Portátil</h2>
      <p className="paragraph">
        Com o suporte traseiro ajustável, o console pode ser apoiado sobre uma mesa enquanto os Joy-Con ficam livres para jogar. Ótimo para dividir a tela com amigos em viagens, cafés ou encontros. A tela de 7,9" com HDR garante ótima visibilidade mesmo longe da TV. É perfeito para jogar em movimento, com qualidade e conforto.
      </p>
    </div>
  </div>;
}
