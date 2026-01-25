import { motion } from "framer-motion";

export function StoryOverlay({ progress }) {
  const blocks = [
    { at: 0.0, align: "center", title: "WpDev Mouse", sub: "Engineered control." },
    { at: 0.25, align: "left", title: "Precision Sensor", sub: "Every micron matters." },
    { at: 0.6, align: "right", title: "Layered Design", sub: "Built from the inside out." },
    { at: 0.9, align: "center", title: "Assembled. Ready.", sub: "Scroll back to replay." },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {blocks.map((b, i) => {
        const visible = Math.abs(progress - b.at) < 0.08;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`absolute top-1/2 ${
              b.align === "left"
                ? "left-16 text-left"
                : b.align === "right"
                ? "right-16 text-right"
                : "left-1/2 -translate-x-1/2 text-center"
            }`}
          >
            <h2 className="text-4xl font-medium tracking-tight text-black/90">
              {b.title}
            </h2>
            <p className="mt-2 text-sm tracking-tight text-black/60">
              {b.sub}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
