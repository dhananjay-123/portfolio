import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Timeline({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      {/* base line */}
      <div className="absolute left-4 sm:left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

      {/* animated progress line */}
      <motion.div
        style={{ height }}
        className="absolute left-4 sm:left-1/2 top-0 w-[2px] 
                   bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 
                   -translate-x-1/2 origin-top"
      />

      <div className="flex flex-col gap-24">{children}</div>
    </div>
  );
}
