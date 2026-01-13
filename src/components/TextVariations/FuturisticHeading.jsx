import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const FuturisticHeading = () => {
  const ref = useRef(null);

  // very subtle magnetic motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;

    x.set(mx * 0.025);
    y.set(my * 0.025);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: smoothX, y: smoothY }}
      className="relative inline-block"
    >
      <h1
        className="
          glass-heading
          text-5xl lg:text-7xl
          font-semibold
          tracking-tight
          text-text-primary font-[Inter]
        "
      >
        Frontend{" "}
        <span className="text-text-muted">Web</span>{" "}
        Developer
      </h1>

      {/* soft glass glow */}
      <div className="absolute inset-0 -z-10 blur-2xl bg-white/5" />
    </motion.div>
  );
};

export default FuturisticHeading;
