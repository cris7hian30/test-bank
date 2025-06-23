// src/components/FinalCTA.tsx
import React from "react";

interface FinalCTAProps {
  headline?: string;
  subheadline?: string;
  primaryText?: string;
  primaryAction?: () => void;
  secondaryText?: string;
  secondaryAction?: () => void;
}

export default function FinalCTA({
  headline = "Conoce cómo financiar tu empresa con Kapital",
  subheadline = "Recibe la llamada de un asesor",
  primaryText = "Recibir llamada",
  primaryAction,
  secondaryText = "Abrir cuenta",
  secondaryAction,
}: FinalCTAProps) {
  return (
    <section className="bg-black text-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{headline}</h2>
      <p className="text-gray-300 mb-8">{subheadline}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={primaryAction}
          className="bg-white text-black py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          {primaryText}
        </button>
        <button
          onClick={secondaryAction}
          className="border border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          {secondaryText}
        </button>
      </div>
    </section>
  );
}
