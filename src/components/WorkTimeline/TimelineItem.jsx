import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function TimelineItem({
  title,
  company,
  date,
  description,
  index,
}) {
  const ref = useRef(null);
  const isLeft = index % 2 === 0;

  // mouse-based 3D tilt
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(y - centerY) / 18);
    rotateY.set((x - centerX) / 18);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={ref}
      className={`relative flex sm:flex-row ${
        isLeft ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* glow pulse dot */}
      <motion.div
        className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 z-20"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-400 to-pink-500" />

        <motion.div
          className="absolute inset-0 rounded-full border border-pink-400/60"
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />

        <div className="absolute inset-0 rounded-full blur-md bg-pink-500/40" />
      </motion.div>

      {/* card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX,
          rotateY,
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05, z: 40 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className={`mt-8 sm:w-1/2 ${
          isLeft ? "sm:pr-14 text-right" : "sm:pl-14"
        }`}
      >
        <div
          className="
            relative
            rounded-2xl
            p-6
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            overflow-hidden
          "
          style={{ transform: "translateZ(30px)" }}
        >
          {/* glass highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <p className="text-xs text-text-muted">{date}</p>
          <h3 className="text-lg font-semibold mt-1 text-white">{title}</h3>
          <p className="text-sm text-text-muted">{company}</p>

          <p className="mt-3 text-sm leading-relaxed text-white/90">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
