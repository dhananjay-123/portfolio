import { useState } from "react";
import { bg } from "../assets";
import { motion, useScroll, useTransform } from "framer-motion";

import HorizontalScroll from "../components/HorizontalScroll/HorizontalScroll";

import GradientText from "./GradientText";
import TechStack from "./TechStack";




const About = () => {
  const [progress, setProgress] = useState(0);
  const { scrollY } = useScroll();
  const bgTranslateY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="flex flex-col">
      <motion.div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${bg})`,
          y: bgTranslateY,
        }}
      />
      <section className="w-full pt-20 flex justify-center flex-col sm:px-24 lg:px-40 px-7 pb-16">

        {/* EXPERIENCE */}

        {/* ================= SKILLS SECTION ================= */}
        <div className="relative mt-24 pb-40 ">

          {/* Sticky Header (ENDS with this wrapper) */}
          <div className="sticky top-25 sm:top-35 z-0 flex items-center gap-3 px-4 bg-grid/80 backdrop-blur-md ">
            <h1 className="text-text-primary text-3xl lg:text-5xl w-1/2 font-bold font-[Inter]">
              <GradientText
  colors={["#FFFFFF", "#E4E4E7", "#C7C7CD", "#A1A1AA", "#6B6B70"]
}
  animationSpeed={2.5}
  
  className="custom-class"
>
  Skills and Tools
</GradientText>
            </h1>

          </div>

          {/* Horizontal Scroll */}
          <div className="sticky top-20">
            <HorizontalScroll onProgress={setProgress} />
          </div>



        </div>
        {/* =============== END SKILLS SECTION =============== */}



      </section>

      <TechStack />
      {/* <div
        className="w-full h-screen flex justify-center flex-col text-text-primary"
      >
        <InfiniteMenu items={technologies}
          scale={1} />
      </div> */}

    </div>
  );
};

export default About;
