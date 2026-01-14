import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // professional easing
    },
  },
};

const FuturisticHeading = () => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // magnetic motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 80, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 28 });

  const handleMouseMove = (e) => {
    // skip on touch devices or reduced motion
    if (shouldReduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;

    // clamp movement (prevents jitter)
    const clamp = (v, max = 20) => Math.max(-max, Math.min(v, max));

    x.set(clamp(mx * 0.02));
    y.set(clamp(my * 0.02));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate="visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={
        shouldReduceMotion ? undefined : { x: smoothX, y: smoothY }
      }
      className="relative inline-block will-change-transform"
    >
      <h1
        className="
          glass-heading
          text-5xl lg:text-7xl
          font-semibold
          tracking-tight
          text-text-primary
          font-[Inter]
        "
      >
        Frontend{" "}
        <span className="text-text-muted">Web</span>{" "}
        Developer
      </h1>

      {/* soft glass glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-2xl bg-white/5"
      />
    </motion.div>
  );
};

export default FuturisticHeading;
