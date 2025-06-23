// src/components/EcosystemProducts.tsx
import React from "react";

interface Product {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageSrc: string;
  imageAlt?: string;
}

const products: Product[] = [
  {
    title: "Crédito FLEX",
    description:
      "El único crédito revolvente para pago a proveedores, obtén hasta 50 MDP para financiar tus facturas en 2, 3, 6, 9 o 12 meses.",
    linkText: "Conocer FLEX",
    linkUrl: "#",
    imageSrc: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    imageAlt: "Tarjeta Crédito FLEX",
  },
  {
    title: "Banca Kapital",
    description:
      "Opera, crece y entiende tu empresa con la banca Kapital, impulsada con Inteligencia Artificial.",
    linkText: "Conocer la Banca",
    linkUrl: "#",
    imageSrc: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    imageAlt: "Pantalla de Banca Kapital",
  },
  {
    title: "Factoraje",
    description:
      "No esperes 30, 60, 90 días para cobrar tus facturas, con Kapital cobra hoy mismo.",
    linkText: "Conocer Factoraje",
    linkUrl: "#",
    imageSrc: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    imageAlt: "Interfaz de Factoraje",
  },
];

export default function EcosystemProducts() {
  return (
    <section className="bg-black text-white pt-100 pb-30 px-4">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
        Otros productos del ecosistema Kapital
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {products.map((prod, i) => (
          <div
            key={i}
            className="bg-[#23282b] rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="h-40 md:h-48 w-full overflow-hidden">
              <img
                src={prod.imageSrc}
                alt={prod.imageAlt}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{prod.title}</h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {prod.description}
              </p>
              <a
                href={prod.linkUrl}
                className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
              >
                {prod.linkText}
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
