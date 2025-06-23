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
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
    scale: " ",
  },
  {
    title: "Liquidez inmediata",
    items: [
      "Recibe el dinero directamente en tu cuenta",
      "Sin restricciones para usar el capital",
      "Sin pausas ni trámites adicionales",
    ],
    video: "https://www.youtube.com/embed/PLUZDtJCdDM",
    scale: " mt-[420px] opacity-0",
  },
  {
    title: "Crédito a la medida",
    items: [
      "Montos adaptados a tus necesidades",
      "Capital de trabajo, proveedores o expansión",
      "Solicita una vez, úsalo ágilmente",
    ],
    video: "https://www.youtube.com/embed/hKfcZCH1QrM",
    scale: " mt-[420px] opacity-0",
  },
];

export default function CardStack() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section_card",
        start: "top top",
        end: "+=2000", // Ajusta el largo del scroll bloqueado
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to("#card1", {
      scale: 0.95,
      duration: 0.7,
      ease: "power1.inOut",
    })
      .to(
        "#card2",
        {
          opacity: 0.5,
          duration: 0.7,
          ease: "power1.inOut",
        },
        "<"
      )
      .to("#card2", {
        y: -390,
        opacity: 1,
        duration: 0.7,
        ease: "power1.inOut",
      })
      .to("#card2", {
        scale: 0.95,
        duration: 0.7,
        ease: "power1.inOut",
      })
      .to(
        "#card1",
        {
          scale: 0.9,
          duration: 0.7,
          ease: "power1.inOut",
        },
        "<"
      )
      .to("#card3", {
        opacity: 0.5,
        duration: 0.7,
        ease: "power1.inOut",
      })
      .to("#card3", {
        y: -360,
        opacity: 1,
        duration: 0.7,
        ease: "power1.inOut",
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <section
      id="section_card"
      className="relative bg-black text-white py-20 px-4 overflow-hidden text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 ">
        Características del <br /> Crédito PyME Kapital
      </h2>

      <div className="relative max-w-6xl mx-auto flex flex-col gap-16 min-h-[400px] mb-20">
        {cards.map((card, i) => (
          <div
            key={i}
            id={"card" + (i + 1)}
            className={"absolute w-full -z-10 " + card.scale}
          >
            <div className="bg-[#23282b] text-white rounded-2xl shadow-xl/30  flex flex-col md:flex-row  min-h-[400px] overflow-hidden">
              <div className="md:w-1/2 flex flex-col justify-center text-left p-6 md:p-10 z-10 relative bg-[#23282b]">
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
                  src={`${card.video}?mute=1&controls=0&loop=1`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-black z-50 h-[300px]">
        <button className="mt-10 mb-4 bg-black border text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          Quiero mi crédito PyME
        </button>
      </div>
    </section>
  );
}
