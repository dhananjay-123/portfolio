import { motion, AnimatePresence } from "framer-motion";

/* Generate stars once */
const stars = Array.from({ length: 80 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 2,
}));

export default function Loader({ progress }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      <motion.div
        key="cosmic-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-50 overflow-hidden bg-black text-white"
      >
        {/* nebula glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent blur-3xl"
        />

        {/* starfield */}
        {stars.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: s.delay,
            }}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
            }}
            className="absolute rounded-full bg-white"
          />
        ))}

        {/* warp streak */}
        <motion.div
          animate={{ y: ["-120%", "120%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
        />

        {/* center UI */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">

          {/* title */}
          <motion.h1
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-xs tracking-[0.5em] uppercase text-white/70"
          >
            SYSTEM INITIALIZING
          </motion.h1>

          {/* circular loader */}
          <div className="relative w-32 h-32 flex items-center justify-center">

            {/* glow pulse */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-full h-full rounded-full bg-indigo-500/20 blur-xl"
            />

            <svg className="w-full h-full -rotate-90">
              {/* base circle */}
              <circle
                cx="64"
                cy="64"
                r={radius}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                fill="transparent"
              />

              {/* progress arc */}
              <motion.circle
                cx="64"
                cy="64"
                r={radius}
                stroke="url(#grad)"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset: offset }}
                transition={{ ease: "easeOut" }}
              />

              <defs>
  <linearGradient
    id="grad"
    gradientUnits="userSpaceOnUse"
    x1="0"
    y1="0"
    x2="128"
    y2="128"
  >
    <stop offset="0%" stopColor="#22f7ff" />   {/* holographic cyan */}
    <stop offset="45%" stopColor="#3b82f6" />  {/* electric blue */}
    <stop offset="100%" stopColor="#8b5cf6" /> {/* violet edge */}
  </linearGradient>
</defs>


            </svg>

            {/* percentage */}
            <motion.span
              key={progress}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute text-xl font-light tracking-widest"
            >
              {progress}%
            </motion.span>
          </div>

          {/* subtitle */}
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-[10px] tracking-[0.4em] text-white/50 uppercase"
          >
            Calibrating starfield
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
