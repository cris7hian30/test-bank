const cards = [
  {
    title: "Plazos flexibles",
    items: [
      "Elige plazos cómodos que se ajustan al flujo de tu empresa",
      "Paga con mensualidades fijas que te dan certeza y control",
      "Consulta fechas y montos desde tu plataforma en cualquier momento",
    ],
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    title: "Liquidez inmediata",
    items: [
      "Recibe el dinero directamente en tu cuenta",
      "Sin restricciones para usar el capital",
      "Sin pausas ni trámites adicionales",
    ],
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    title: "Crédito a la medida",
    items: [
      "Montos adaptados a tus necesidades",
      "Capital de trabajo, proveedores o expansión",
      "Solicita una vez, úsalo ágilmente",
    ],
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
];

export default function CardStack() {
  return (
    <section className="relative bg-black text-white py-20 px-4 overflow-hidden text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
        Características del <br /> Crédito PyME Kapital
      </h2>

      <div className="relative max-w-6xl mx-auto flex flex-col gap-16">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#23282b] text-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full min-h-[400px] overflow-hidden"
          >
            <div className="md:w-1/2 flex flex-col justify-center text-left p-6 md:p-10 z-10 relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {card.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="relative md:w-1/2 h-[400px] md:h-auto">
              <iframe
                src={`${card.video}?enablejsapi=1&mute=1&controls=0&loop=1&playlist=ScMzIvxBSi4&modestbranding=1&rel=0`}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 mb-4 bg-black border text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
        Quiero mi crédito PyME
      </button>
    </section>
  );
}
