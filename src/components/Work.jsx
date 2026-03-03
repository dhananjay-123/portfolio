import { useRef } from "react";
import { bg } from "../assets";
// import { topicsData } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";




// import { workExperience } from "../constants";

import ScrollAnimation from "./ScrollAnimation/ScrollAnimation";
import MouseScroll from "./MouseScroll/MouseScroll";
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
      {/* <h2 className="text-text-muted text-3xl lg:text-5xl font-bold font-[Inter]">
              I have <span className="text-text-primary">1+ years</span> of experience
            </h2> */}



      

      {/* <div
     
      >
        <MouseScroll />
      </div> */}

        <Timeline />

      <div

        className="w-full relative overflow-hidden flex justify-center  "

      >



        {/* Cards */}
        <ScrollAnimation />

      </div>


    </div>

  );
}

export default Work;
