import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "../../constants/index"; // adjust path if needed

export default function HorizontalScroll({ onProgress }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  scrollYProgress.on("change", (v) => onProgress?.(v));

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-40 h-[50vh] flex items-center overflow-hidden">
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
      className="w-[50vw] flex-shrink-0 transition-transform duration-300  ease-out will-change-transform"
    >
      <div className="w-[45vw] h-[45vh] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-3 sm:p-8 flex flex-col justify-between">
        
        {/* Index */}
        <span className="text-sm text-white/50 font-mono">
          0{skill.index}
        </span>

        {/* Heading */}
        <h3 className="text-3xl font-bold text-white">
          {skill.heading}
        </h3>

        {/* Title */}
        <h4 className="text-lg text-indigo-300">
          {skill.title}
        </h4>

        {/* Description */}
        <p className="text-white/70 leading-relaxed">
          {skill.description}
        </p>

        {/* Accent bar */}
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
      </div>
    </div>
  );
}
