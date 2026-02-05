import { useRef,useState,useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { topicsData } from "../../constants";
import { motion } from "framer-motion";
import GradientText from "../GradientText";


gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

export default function ScrollAnimation() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(
    () => {
      if (isMobile) return;

      const images = imageRefs.current;
      if (!images.length) return;

      const startPositions = [
        { x: "-120vw", y: "-50vh" },
        { x: "100vw", y: "-60vh" },
        { x: "-130vw", y: "60vh" },
        { x: "130vw", y: "50vh" },
        { x: "-120vw", y: "-50vh" },
        { x: "0vw", y: "-120vh" },
        { x: "10vw", y: "100vh" },
      ];
      const finalPositions = [
        { x: -120, y: 30, rotation: 8 },
        { x: 0, y: 0, rotation: -6 },
        { x: 220, y: 50, rotation: 6 },
        { x: -160, y: 130, rotation: -10 },
        { x: 160, y: 160, rotation: 10 },
        { x: 0, y: 0, rotation: 0 },
        { x: 0, y: 180, rotation: 4 },
      ];
      images.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          x: startPositions[i]?.x || 0,
          y: startPositions[i]?.y || 0,
          rotation: gsap.utils.random(-60, 60),
          scale: 0.5,
          autoAlpha: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 2}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      images.forEach((card, i) => {
        tl.to(
          card,
          {
            x: finalPositions[i]?.x || 0,
            y: finalPositions[i]?.y || 0,
            rotation: finalPositions[i]?.rotation || 0,
            scale: 1,
            zIndex: i + 1,
            ease: "power2.out",
            duration: 1,
          },
          i * 0.3
        );
      });
    },
    { scope: containerRef }
  );

     if (isMobile) {
    return (
      <section className="py-20 flex flex-col items-center gap-10 px-30 h-[500dvh] ">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-bold font-mono"
        >
          <GradientText
            colors={["#FFFFFF", "#E4E4E7", "#C7C7CD", "#A1A1AA", "#6B6B70"]
}
            animationSpeed={2}
          >
            Experienced In
          </GradientText>
        </motion.h2>
        {topicsData.map((item, i) => (
          <div className="relative w-[260px] h-[200px] rounded-xl overflow-hidden shadow-md">

  {/* background image */}
  <img
    src={item.image}
    alt={item.heading}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* content */}
  <div className="relative z-10 h-full p-4 flex flex-col justify-end text-white">

    <span className="text-xs text-indigo-400 font-mono">
      {item.index}
    </span>

    <h2 className="font-bold font-mono text-lg leading-tight">
      {item.heading}
    </h2>

    <p className="text-sm font-mono opacity-80">
      {item.title}
    </p>

  </div>
</div>

        ))}
      </section>
    );
  }
  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-screen overflow-hidden bg-grid"
    >
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-32 left-1/2 -translate-x-1/2 z-50
                   text-2xl sm:text-4xl font-bold font-mono
                   text-text-primary tracking-tight"
      >
        <GradientText
          colors={["#FFFFFF", "#E4E4E7", "#C7C7CD", "#A1A1AA", "#6B6B70"]
}
          animationSpeed={2.5}
          
          className="custom-class"
        >
          Experienced In
        </GradientText>
      </motion.h2>

      <div className="relative w-full h-screen">
        {topicsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <div
              className="relative w-[220px] sm:w-[340px]
                         p-4 sm:p-10 rounded-2xl
                         overflow-hidden
                         bg-white/10 border border-white/20
                         shadow-2xl backdrop-blur-sm"
            >
              <img
                src={item.image}
                alt={item.heading}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="absolute inset-0 w-full h-full
                           object-cover opacity-90
                           pointer-events-none"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 flex flex-col gap-3 text-white">
                <span className="text-sm text-indigo-400 font-mono">
                  {item.index}
                </span>

                <h2 className="text-2xl font-bold">
                  {item.heading}
                </h2>

                <h3 className="text-lg text-indigo-300 font-mono">
                  {item.title}
                </h3>

                <p className="hidden sm:block text-sm opacity-80">
                  {item.description}
                </p>

                <div className="mt-3 h-0.5 w-full rounded-full
                                bg-blue-400/50
                                shadow-[0_0_6px_rgba(96,165,250,0.25)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
