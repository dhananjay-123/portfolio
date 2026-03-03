import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import GradientText from "./GradientText";
import { technologies } from "../constants";

const TechStack = () => {
  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-8 md:px-16 text-white font-mono">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 sm:mb-20 tracking-wider">
        <GradientText
          colors={["#FFFFFF", "#E4E4E7", "#C7C7CD", "#A1A1AA", "#6B6B70"]}
          animationSpeed={2.5}
        >
          Tech Stack
        </GradientText>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              glareEnable
              glareMaxOpacity={0.12}
            >
              <a
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 sm:p-6 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.5)] transition-all duration-500 flex flex-col">

                  {/* Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title + Percentage */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-base sm:text-lg font-semibold tracking-wide">
                      {tech.title}
                    </h3>

                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-xs text-blue-400"
                    >
                      {tech.level}%
                    </motion.span>
                  </div>

                  {/* Skill Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-white shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    />
                  </div>

                  {/* Description (Hidden on Mobile) */}
                  <p className="hidden sm:block text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
                    {tech.description}
                  </p>

                </div>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;