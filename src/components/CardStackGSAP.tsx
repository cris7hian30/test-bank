import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Plazos flexibles",
    items: [
      "Elige plazos cómodos que se ajustan al flujo de tu empresa",
      "Paga con mensualidades fijas que te dan certeza y control",
      "Consulta fechas y montos desde tu plataforma en cualquier momento",
    ],
    video: "https://www.youtube.com/embed/r-1k6ZOhE5M",
  },
  {
    title: "Liquidez inmediata",
    items: [
      "Recibe el dinero directamente en tu cuenta",
      "Sin restricciones para usar el capital",
      "Sin pausas ni trámites adicionales",
    ],
    video: "https://www.youtube.com/embed/eEzD-Y97ges",
  },
  {
    title: "Crédito a la medida",
    items: [
      "Montos adaptados a tus necesidades",
      "Capital de trabajo, proveedores o expansión",
      "Solicita una vez, úsalo ágilmente",
    ],
    video: "https://www.youtube.com/embed/-niUBSx3PKQ",
  },
];

export default function CardStack() {
  useEffect(() => {
    const cardEls = gsap.utils.toArray<HTMLElement>(".card-stack");

    // 1) Estado inicial: stacked pero con offsets y escalas 1, 0.95, 0.9
    gsap.set(cardEls, {
      y: (i) => 20 * i,
      scale: (i) => 1 - i * 0.05,
      transformOrigin: "center top",
      zIndex: (_el, i) => cards.length - i,
    });

    // 2) Timeline pausada con sólo dos labels: card2, card3
    const tl = gsap.timeline();
    // Paso 1 → traer card2
    tl.addLabel("card2")
      .to(
        cardEls[0],
        { scale: 0.95, duration: 0.5, ease: "power2.out" },
        "card2"
      )
      .fromTo(
        cardEls[1],
        { y: () => window.innerHeight, scale: 0.95 },
        { y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
        "card2"
      );

    // Paso 2 → traer card3
    tl.addLabel("card3")
      .to(
        cardEls[0],
        { scale: 0.9, y: -20 * 2, duration: 0.5, ease: "power2.out" },
        "card3"
      )
      .to(
        cardEls[1],
        { scale: 0.95, y: -20, duration: 0.5, ease: "power2.out" },
        "card3"
      )
      .fromTo(
        cardEls[2],
        { y: () => window.innerHeight, scale: 0.9 },
        { y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
        "card3"
      );

    // 3) ScrollTrigger con scrub y snap a labels
    ScrollTrigger.create({
      animation: tl,
      trigger: "#section_card",
      start: "top top",
      end: () => `+=${window.innerHeight * 2}`,
      scrub: 1,
      pin: true,
      snap: {
        snapTo: "labels", // "card2" y "card3"
        duration: { min: 0.2, max: 0.5 },
        ease: "power1.inOut",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      id="section_card"
      className="relative bg-black text-white py-20 px-4 overflow-hidden text-center"
    >
      <h2 className="text-3xl pb-24 md:text-5xl font-bold text-center mb-10\">
        Características del <br /> Crédito PyME Kapital
      </h2>

      <div className="relative max-w-6xl mx-auto flex flex-col gap-16 min-h-[400px] mb-6">
        {cards.map((card, i) => (
          <div key={i} className="card-stack absolute top-0 left-0 w-full">
            <div className="bg-[#23282b] text-white rounded-2xl shadow-xl/30 flex flex-col md:flex-row min-h-[400px] overflow-hidden">
              {/* Texto */}
              <div className="md:w-1/2 flex flex-col justify-center text-left p-6 md:p-10 z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {card.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Video */}
              <div className="relative md:w-1/2 h-[400px] md:h-auto">
                <iframe
                  src={`${
                    card.video
                  }?mute=1&controls=0&loop=1&playlist=${card.video
                    .split("/")
                    .pop()}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-black z-100 flex items-center justify-center pt-18">
        <button className="bg-black border text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          Quiero mi crédito PyME
        </button>
      </div>
    </section>
  );
}
