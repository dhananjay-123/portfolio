import { motion, useScroll } from "framer-motion";

function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className=" h-[3px] relative z-50 ">
      {/* Track (full progress line) */}
      <div className="absolute inset-0 bg-gray-500" />

      {/* Fill (animated progress) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export default ProgressBar;
