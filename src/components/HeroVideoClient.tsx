import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoClient() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={videoRef}
      className="mt-12 w-[80%] aspect-video mx-auto rounded-xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&controls=0&loop=1&playlist=ScMzIvxBSi4&showinfo=0&modestbranding=1&rel=0"
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
}
