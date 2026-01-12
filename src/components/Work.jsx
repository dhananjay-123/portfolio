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
        <h1 className="w-full">
          My Past <br />
          <span className="ml-20 lg:ml-52">Experiences</span>
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="relative">
        {topicsData.map((item, index) => {

          if(index===topicsData.length-1) return[1,1]
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
                <span className="text-sm text-white/50 font-mono">
                  0{item.index}
                </span>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {item.heading}
                </h2>

                {/* Title */}
                <h3 className="text-lg text-indigo-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/70">{item.small}</p>
                <p className="text-white/80">{item.utility}</p>
                <p className="text-white/80">{item.description}</p>

                <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
              </div>
            </motion.div>
          );
        })}
        
      </div>
       <div className="sticky top-[200px] mb-40">
          <div className="p-6 sm:p-10 rounded-2xl bg-white/5 border border-white/10 shadow-2xl flex flex-col gap-4 m-0">
            <span className="text-sm text-white font-mono">00</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              More Coming
            </h2>
            <h3 className="text-lg text-indigo-300">Stay Tuned</h3>
            <p className="text-white/70">
              This space is reserved for future experiences.
            </p>
            <p className="text-white/80">Keep scrolling to see more updates!</p>
            <p className="text-white/80">Exciting things are on the way.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
          </div>
        </div>
      </div>
      
  );
}

export default Work;
