import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import GradientText from "../GradientText";

const workExperience = [
  {
    position: "Frontend Web Developer",
    company: "Freelance",
    duration: "Jan 2022",
  },
  {
    position: "Intern",
    company: "Tech Solutions",
    duration: "Jun 2021 - Dec 2021",
  },
  {
    position: "Web Development Intern",
    company: "Creative Minds",
    duration: "Jan 2021 - May 2021",
  },
  {
    position: "Intern",
    company: "Innovatech",
    duration: "Jun 2020 - Dec 2020",
  },
];

const Timeline = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 text-white font-mono">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-24 tracking-wider">
        <GradientText
          colors={["#FFFFFF", "#E4E4E7", "#C7C7CD", "#A1A1AA", "#6B6B70"]}
          animationSpeed={2.5}
          className="text-4xl"
        >
          My Past Work
        </GradientText>
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative space-y-24">

        {/* Vertical Line (connects first & last dots automatically) */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 md:top-18 bottom-24 sm:bottom-[-12px] w-[3px]">
          <div
            className="w-full h-full 
            bg-gradient-to-b from-blue-400 via-blue-300 to-white 
            opacity-80 rounded-full 
            shadow-[0_0_20px_rgba(59,130,246,0.7)]"
          />
        </div>

        {/* Timeline Items */}
        {workExperience.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Middle Dot */}
              <div
                className="absolute left-4 md:left-1/2 md:-translate-x-1/2 
                w-4 h-4 rounded-full bg-white 
                shadow-[0_0_15px_#60a5fa] 
                animate-pulse z-10"
              />

              {/* Tilt Card */}
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                glareEnable
                glareMaxOpacity={0.15}
                className={`mt-12 md:mt-0 w-full md:w-5/12 ${
                  isLeft
                    ? "md:mr-auto md:text-right"
                    : "md:ml-auto md:text-left"
                }`}
              >
                <div
                  className="relative bg-white/5 backdrop-blur-xl 
                  border border-white/10 
                  rounded-xl p-6
                  shadow-[0_10px_35px_rgba(0,0,0,0.6)] 
                  hover:shadow-[0_10px_45px_rgba(59,130,246,0.6)]
                  transition-all duration-500"
                >
                  {/* Accent Side Bar */}
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-white rounded-l-xl opacity-70" />

                  <div className="pl-4">
                    {/* Duration */}
                    <span className="text-xs text-blue-400 tracking-widest">
                      {item.duration}
                    </span>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-white/10 my-3" />

                    {/* Position */}
                    <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                      {item.position}
                    </h3>

                    {/* Company */}
                    <p className="text-gray-400 text-sm mt-2 tracking-wide">
                      @ {item.company}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;