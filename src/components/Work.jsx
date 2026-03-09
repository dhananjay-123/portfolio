import { useRef } from "react";
import { bg } from "../assets";

import { motion, useScroll, useTransform } from "framer-motion";






import ScrollAnimation from "./ScrollAnimation/ScrollAnimation";

import Timeline from "./TimeLine/Timeline";
const Work = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();

  // Background subtle parallax (slow movement)
  const bgTranslateY = useTransform(scrollY, [0, 1000], [0, 150]);



  return (
    <div 
    
    className="w-[100vw] overflow-clip">
      <motion.div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          y: bgTranslateY,
        }}
      />
     

        <Timeline />

      <div

        className="w-full relative flex justify-center h-670 sm:h-auto "

      >



        {/* Cards */}
        <ScrollAnimation />

      </div>


    </div>

  );
}

export default Work;
