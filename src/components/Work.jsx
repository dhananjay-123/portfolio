import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { topicsData } from "../constants";

function Work() {
  const targetRef = useRef(null);

  /* 1️⃣ Use scrollYProgress (0 → 1) */
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  /* 2️⃣ Title animation */
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={targetRef}
      className="w-full bg-bg-primary px-7 sm:px-24 lg:px-40 relative overflow-clip"
      style={{ height: `${(topicsData.length) * 120}vh` }} // gives scroll space
    >
      {/* Title */}
      <motion.div
        style={{ scale: titleScale, opacity: titleOpacity }}
        className="text-text-primary text-5xl lg:text-7xl sticky top-10 h-[200px] flex items-center"
      >
        <h1 className="w-full text-text-primary font-[Inter] font-bold">
          My Past <br />
          <span className="ml-20 lg:ml-52">Experiences</span>
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="relative h-[70%]">
        {topicsData.map((item, index) => {

          if (index === topicsData.length - 1) return null
          /* 3️⃣ Each card owns a slice of scroll */
          const start = index / topicsData.length;
          const end = (index + 1) / topicsData.length;

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1, 0.85]
          );

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [1, -1]
          );

          return (
            <motion.div
              key={index}
              style={{ scale, opacity }}
              className="sticky top-[200px] mb-40"
            >
              <div className="p-6 sm:p-10 rounded-2xl bg-white/10 border border-white/20 shadow-2xl flex flex-col gap-4 backdrop-blur-md m-0">
                {/* Index */}
                <span className="text-sm text-text-primary font-mono">
                  {item.index}
                </span>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {item.heading}
                </h2>

                {/* Title */}
                <h3 className="text-lg text-indigo-500 font-mono">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary font-mono">{item.small}</p>
                <p className="text-text-secondary  font-mono">{item.utility}</p>
                <p className="text-text-secondary  font-mono">{item.description}</p>

                <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
              </div>
            </motion.div>
          );
        })}

      </div>
      <div className="sticky top-[200px] mb-40">
        <div className="p-6 sm:p-10 rounded-2xl bg-white/10 border border-white/20 shadow-2xl flex flex-col gap-4 backdrop-blur-md m-0">

          <span className="text-sm text-text-primary font-mono">00</span>

          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
            Early Foundations
          </h2>

          <h3 className="text-lg text-indigo-300 font-mono">
            Where It All Began
          </h3>

          <p className="text-text-secondary font-mono">
            This phase marks the starting point of my journey, before the experiences listed above.
          </p>

          <p className="text-text-secondary font-mono">
            It represents continuous learning, experimentation, and growth over time.
          </p>

          <p className="text-text-secondary font-mono">
            <span className="text-text-primary font-semibold">
              Scroll ahead
            </span>{" "}
            to move through the timeline and uncover how these foundations evolved into real-world experience.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
        </div>
      </div>
    </div>

  );
}

export default Work;
