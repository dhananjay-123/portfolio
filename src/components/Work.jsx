import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { topicsData } from "../constants"; // your dummy data

function Work() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const sectionHeight = 200 + topicsData.length * 280;
  const stickyOffset = 80 / sectionHeight;

  const cardTimeline = topicsData.map((_, i) => {
    const start = 200 + i * 280;
    const end = 200 + (i + 1) * 280;
    return [start, end];
  });
  const timeline = [[0, 150], ...cardTimeline];

  const animation = timeline.map(([start, end], index) => {
    if (index === timeline.length - 1) return { scale: 1, opacity: 1 };

    const startP = start / sectionHeight + stickyOffset;
    const endP = end / sectionHeight + stickyOffset;

    return {
      scale: useTransform(smoothScroll, [startP, endP], [1, 0.8]),
      opacity: useTransform(smoothScroll, [startP, endP, endP + 0.05], [1, 0.4, 0]),
    };
  });

  return (
    <div
      ref={targetRef}
      className="w-full pt-1 bg-bg-primary justify-center px-7 sm:px-24 lg:px-40 relative pb-[18px]"
    >
      {/* Title */}
      <motion.div
        style={{ scale: animation[0].scale, opacity: animation[0].opacity }}
        className="text-text-primary text-5xl sticky top-20 lg:text-7xl overflow-clip items-center h-[200px] z-10 flex justify-center"
      >
        <h1 className="w-full h-max">
          My Past <br />
          <span className="ml-20 lg:ml-52">Experiences</span>
        </h1>
      </motion.div>

      {/* Cards */}
      <div>
        {topicsData.map((item, index) => (
          <motion.div
            key={index}
            style={{
              scale: animation[index + 1].scale,
              opacity: animation[index + 1].opacity,
            }}
            className="z-1 w-full h-70 mb-30 justify-center"
          >
            {/* Skill/Tools Card Theme */}
            <div className="relative p-6 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col gap-4">
              {/* Index */}
              <span className="text-sm text-white/50 font-mono">
                0{item.index}
              </span>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {item.heading}
              </h2>

              {/* Title */}
              <h3 className="text-lg text-indigo-300">{item.title}</h3>

              {/* Small / Utility / Description */}
              <p className="text-white/70">{item.small}</p>
              <p className="text-white/80">{item.utility}</p>
              <p className="text-white/80">{item.description}</p>

              {/* Accent Bar */}
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;
