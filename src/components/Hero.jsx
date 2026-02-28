import { bg } from "../assets";
import { Description } from "../constants";

import Paragraph from "./TextVariations/Paragraph";
import FuturisticHeading from "./TextVariations/FuturisticHeading";

import { FiBriefcase, FiMapPin, FiClock } from "react-icons/fi";
import HeroCards from "./HeroCards/HeroCards";
import HeroScroll from "./HeroScroll/HeroScroll";

import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  // Global scroll tracking (reliable)
  const { scrollY } = useScroll();

  // Background subtle parallax (slow movement)
  const bgTranslateY = useTransform(scrollY, [0, 1000], [0, 150]);

  // Heading reveal BEFORE it appears
  const headingY = useTransform(scrollY, [200, 700], [120, 0]);
  const headingOpacity = useTransform(scrollY, [200, 600], [0, 1]);

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* FIXED BACKGROUND LAYER (NO MORE ZOOMING) */}
      <motion.div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          y: bgTranslateY,
        }}
      />

      {/* Optional gradient for smooth blend */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-black/60 to-black" />

      {/* SECTION 1 — Scroll Intro */}
      <section className="w-full min-h-screen">
        <HeroScroll />
      </section>

      {/* SECTION 2 — Content */}
      <section className="relative w-full min-h-screen pt-1 justify-center p-7 sm:px-24 lg:px-40">
        
        {/* Parallax Heading (appears after scroll) */}
        <motion.div
          className="pl-5 pr-5 pt-10"
          style={{
            y: headingY,
            opacity: headingOpacity,
          }}
        >
          <div className="pl-5 pr-5 pt-10">
            <FuturisticHeading />
          </div>
        </motion.div>

        {/* Status / Location / Timezone */}
        <div
          className="
            text-accent-success
            font-mono
            pt-17
            flex flex-col-reverse
            lg:flex-row-reverse
            gap-y-3
            lg:items-center
            justify-center
          "
        >
          <div className="flex items-center gap-2">
            <FiBriefcase className="text-accent-success text-sm" />
            <span>OPEN TO WORK</span>
          </div>

          <div className="w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500" />

          <div className="flex items-center gap-2 text-text-muted">
            <FiMapPin className="text-text-muted text-sm" />
            <span>Gwalior, India</span>
          </div>

          <div className="w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500" />

          <div className="flex items-center gap-2 text-text-muted">
            <FiClock className="text-text-muted text-sm" />
            <span>IST (UTC+05:30)</span>
          </div>
        </div>

        {/* Description + Cards */}
        <div className="flex lg:pt-20 flex-col lg:flex-row lg:text-2xl items-center">
          <div className="lg:w-[40%]">
            <Paragraph value={Description} />
          </div>

          <div className="w-full h-[70vh] lg:h-[100vh] lg:w-[60%] flex justify-center items-center">
            <HeroCards />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;