// src/components/RegulatorSection.tsx
import React from "react";

const regulators = [
  {
    name: "Banco de México",
    logoSrc:
      "https://www.banxico.org.mx/DIBM/resources/img/logoBM-Monograma.png",
    logoAlt: "Logo Banco de México",
  },
  {
    name: "IPAB",
    logoSrc:
      "https://www.banxico.org.mx/DIBM/resources/img/logoBM-Monograma.png",
    logoAlt: "Logo IPAB",
  },
  {
    name: "CNBV",
    logoSrc:
      "https://www.banxico.org.mx/DIBM/resources/img/logoBM-Monograma.png",
    logoAlt: "Logo CNBV",
  },
  {
    name: "Buró de Entidades Financieras",
    logoSrc:
      "https://www.banxico.org.mx/DIBM/resources/img/logoBM-Monograma.png",
    logoAlt: "Logo Buró de Entidades Financieras",
  },
];

export default function RegulatorSection() {
  return (
    <section className="bg-black text-white pt-24 pb-24 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-regular mb-12">
        Kapital Bank es una empresa regulada, por lo que tu dinero es gestionado
        con los más altos estándares de seguridad financiera.
      </h2>
      <div className="mt-8 flex flex-wrap justify-center items-center space-x-8 space-y-4">
        {regulators.map((reg) => (
          <div key={reg.name} className="flex-shrink-0">
            <img
              src={reg.logoSrc}
              alt={reg.logoAlt}
              className="h-12 md:h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
