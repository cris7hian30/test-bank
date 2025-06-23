// src/components/FAQSection.tsx
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Para qué puedo usar el Crédito FLEX?",
    answer:
      "El crédito está diseñado para financiar capital de trabajo, como cubrir gastos operativos, adquirir inventario, pagar servicios o hacer mejoras que impulsen el crecimiento de tu negocio.",
  },
  {
    question: "¿Cómo funciona el crédito revolvente?",
    answer:
      "Con un crédito revolvente dispones de un monto autorizado y conforme pagas, esa línea se libera nuevamente, permitiéndote usarla tantas veces como lo necesites dentro del periodo pactado.",
  },
  {
    question: "¿Qué plazos puedo elegir para pagar cada disposición?",
    answer:
      "Puedes seleccionar plazos de 2, 3, 6, 9 o 12 meses según tus necesidades operativas y flujo de caja.",
  },
  {
    question: "¿Qué sucede si quiero liquidar el crédito antes del plazo?",
    answer:
      "Si liquidás antes del 70% del plazo acordado, se cobra una comisión; después de ese punto, no aplican penalizaciones por liquidación anticipada.",
  },
  {
    question: "¿Cómo se realiza el pago a proveedores?",
    answer:
      "Al disponer del crédito, asignas los recursos directamente a la cuenta de tu proveedor desde nuestra plataforma, sin trámites adicionales.",
  },
];

export default function FAQSection() {
  // Índices de preguntas abiertas
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  // Refs para cada respuesta
  const answerRefs = useRef<HTMLDivElement[]>([]);

  // Handler de toggle
  const toggle = (i: number) => {
    const isOpen = openSet.has(i);
    const el = answerRefs.current[i];
    if (!el) return;

    if (isOpen) {
      // cerrar
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setOpenSet((prev) => {
        const next = new Set(prev);
        next.delete(i);
        return next;
      });
    } else {
      // abrir
      const fullHeight = el.scrollHeight;
      gsap.to(el, {
        height: fullHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setOpenSet((prev) => new Set(prev).add(i));
    }
  };

  // Inicializar heights en 0
  useEffect(() => {
    answerRefs.current.forEach((el) => {
      if (el) {
        gsap.set(el, { height: 0, opacity: 0 });
      }
    });
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
        Preguntas frecuentes del Crédito FLEX
      </h2>

      <div className="max-w-3xl mx-auto">
        {faqData.map((item, i) => {
          const isOpen = openSet.has(i);
          return (
            <div key={i} className="mb-4">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-4 bg-[#23282b] rounded-xl"
              >
                <span className="text-left">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                ref={(el) => {
                  if (el) answerRefs.current[i] = el;
                }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-[#1f1f1f] rounded-b-xl">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
