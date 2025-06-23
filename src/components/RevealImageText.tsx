// src/components/RevealImageText.tsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealImageTextProps {
  imageUrl: string;
  leftText: string;
  rightText: string;
  /** Altura del hero: por ejemplo "h-screen", "h-[600px]" */
  heightClass?: string;
}

export default function RevealImageText({
  imageUrl,
  leftText,
  rightText,
  heightClass = "h-screen",
}: RevealImageTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      leftRef.current,
      { x: "-100%", autoAlpha: 0 },
      {
        x: "20%",
        autoAlpha: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { x: "100%", autoAlpha: 0 },
      {
        x: "-40%",
        autoAlpha: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-x-hidden ${heightClass} bg-cover bg-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Texto izquierda */}
      <div
        ref={leftRef}
        className="absolute left-0 top-2/3 transform -translate-y-1/2 px-4 text-white text-6xl md:text-8xl font-bold"
      >
        {leftText}
      </div>

      {/* Texto derecha */}
      <div
        ref={rightRef}
        className="absolute right-0 top-1/3 transform -translate-y-1/2 px-4 text-white text-6xl md:text-8xl font-bold"
      >
        {rightText}
      </div>
    </div>
  );
}
