// src/components/RequirementsToggle.tsx
import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

interface Requirement {
  label: string;
  desc: string;
}

const personaMorales: Requirement[] = [
  {
    label: "Antigüedad mínima del negocio",
    desc: "1 año de operación comprobable",
  },
  { label: "Historial crediticio", desc: "Buen historial y capacidad de pago" },
  {
    label: "Estados de cuenta",
    desc: "De los últimos 3 meses y de todos los bancos que operan",
  },
  {
    label: "Cumplimiento fiscal",
    desc: "Constancia de Situación Fiscal de la empresa",
  },
  {
    label: "Clave CIEC",
    desc: "Clave CIEC del SAT con acceso de solo consulta",
  },
  {
    label: "Identificación oficial",
    desc: "INE o pasaporte del representante legal y accionistas con participación del 25% o más",
  },
  {
    label: "Comprobante de domicilio",
    desc: "Recibo de luz, agua, predial o teléfono (no mayor a 3 meses)",
  },
  {
    label: "Registro Federal de Contribuyentes (RFC)",
    desc: "Constancia de Situación Fiscal del representante legal y accionistas con participación del 25% o más",
  },
  {
    label: "Escritura constitutiva",
    desc: "Acta constitutiva y protocolizaciones con registro público (en caso de existir)",
  },
];

const pfaes: Requirement[] = [
  {
    label: "Antigüedad mínima del negocio",
    desc: "1 año de operación comprobable",
  },
  { label: "Historial crediticio", desc: "Buen historial y capacidad de pago" },
  {
    label: "Estados de cuenta",
    desc: "De los últimos 3 meses y de todos los bancos que operan",
  },
  {
    label: "Cumplimiento fiscal",
    desc: "Constancia de Situación Fiscal de la empresa",
  },
  {
    label: "Clave CIEC",
    desc: "Clave CIEC del SAT con acceso de solo consulta",
  },
  {
    label: "Identificación oficial",
    desc: "INE o pasaporte del representante legal y accionistas con participación del 25% o más",
  },
  {
    label: "Comprobante de domicilio",
    desc: "Recibo de luz, agua, predial o teléfono (no mayor a 3 meses)",
  },
];

export default function RequirementsToggle() {
  const [mode, setMode] = useState<"persona" | "pfae">("persona");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const personaBtnRef = useRef<HTMLButtonElement>(null);
  const pfaeBtnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const EXTRA = 12; // px extra de padding total (6px a cada lado)
    const ind = indicatorRef.current!;
    const target =
      mode === "persona" ? personaBtnRef.current! : pfaeBtnRef.current!;
    const parent = target.parentElement! as HTMLElement;

    const btnRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    // Calculamos x relativo al contenedor + un cuarto del EXTRA a la izquierda
    const x = btnRect.left - parentRect.left - EXTRA / 2;
    // Ancho del botón + EXTRA total
    const width = btnRect.width + EXTRA;

    gsap.to(ind, {
      x,
      width,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [mode]);

  return (
    <section className="bg-black text-white py-52 px-4 pb-72">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Requisitos para solicitar Crédito PyME
      </h2>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex bg-[#23282b] rounded-full h-12 px-1">
          {/* Indicador */}
          <div
            ref={indicatorRef}
            className="absolute inset-y-1 bg-white rounded-full"
          />
          <button
            ref={personaBtnRef}
            onClick={() => setMode("persona")}
            className={`relative z-10 px-6 font-semibold transition-colors ${
              mode === "persona"
                ? "text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            Persona moral
          </button>
          <button
            ref={pfaeBtnRef}
            onClick={() => setMode("pfae")}
            className={`relative z-10 px-6 font-semibold transition-colors ${
              mode === "pfae" ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            PFAE
          </button>
        </div>
      </div>

      {/* Contenedor de tablas */}
      <div className="relative max-w-5xl mx-auto">
        {/* Persona moral */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            mode === "persona" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <dl className="flex flex-col gap-y-4 text-sm md:text-base">
            {personaMorales.map((r, i) => (
              <div
                key={i}
                className="flex justify-between py-2 border-b border-gray-700"
              >
                <dt className="font-medium">{r.label}</dt>
                <dd className="text-right">{r.desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* PFAE */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            mode === "pfae" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <dl className="flex flex-col gap-y-4 text-sm md:text-base">
            {pfaes.map((r, i) => (
              <div
                key={i}
                className="flex justify-between py-2 border-b border-gray-700"
              >
                <dt className="font-medium">{r.label}</dt>
                <dd className="text-right">{r.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
