import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "../../constants/index"; // adjust path if needed

export default function HorizontalScroll({ onProgress }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  scrollYProgress.on("change", (v) => onProgress?.(v));

  return (
    <div ref={containerRef} className="relative h-[500vh] pt-10">
      
      <div className="sticky top-55 h-[50vh] flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-16">
          {skills.map((skill) => (
            <TiltCard key={skill.index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ======================
   SAFE 3D TILT CARD
====================== */

function TiltCard({ skill }) {
  const ref = useRef(null);
  const isTouch =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleMove = (e) => {
    if (isTouch || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="w-[60vw] shrink-0 transition-transform duration-300  ease-out will-change-transform"
    >
      <div className="w-[60vw] h-[48vh] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative">

  {/* Background Image */}
  <img
    src={skill.image}
    alt={skill.heading}
    className="absolute inset-0 w-full h-full object-cover opacity-60 saturate-75"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10" />

  {/* Content */}
  <div className="relative z-10 h-full p-3 sm:p-8 flex flex-col justify-between">
    
    {/* Index */}
    <span className="text-sm text-text-primary font-mono">
      {skill.index}
    </span>

    {/* Heading */}
    <h3 className="text-3xl font-bold text-text-primary">
      {skill.heading}
    </h3>

    {/* Title */}
    <h4 className="text-xl text-indigo-400 font-mono">
      {skill.title}
    </h4>

    {/* Description */}
    <p className="text-text-secondary text-xl leading-7 font-mono">
      {skill.description}
    </p>

    {/* Accent bar */}
    <div className="mt-3 h-0.5 w-full rounded-full bg-blue-400/50 shadow-[0_0_6px_rgba(96,165,250,0.25)]" />

  </div>
</div>

    </div>
  );
}
