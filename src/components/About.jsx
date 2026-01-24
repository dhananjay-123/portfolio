import { useState } from "react";

import { technologies } from "../constants";
import HorizontalScroll from "../components/HorizontalScroll/HorizontalScroll";



import InfiniteMenu from "./InfiniteMenu/InfiniteMenu";


const About = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="flex flex-col">
    <section className="w-full bg-bg-primary pt-20 flex justify-center flex-col sm:px-24 lg:px-40 px-7 pb-16">
      
      {/* EXPERIENCE */}
     
      {/* ================= SKILLS SECTION ================= */}
      <div className="relative mt-24 pb-40 ">

        {/* Sticky Header (ENDS with this wrapper) */}
        <div className="sticky top-35 z-0 flex items-center gap-3 px-4 bg-bg-primary/80 backdrop-blur-md">
          <h1 className="text-text-primary text-3xl lg:text-5xl w-1/2 font-bold font-[Inter]">
            Skills and Tools
          </h1>
         
        </div>

        {/* Horizontal Scroll */}
        <div className="sticky top-20">
          <HorizontalScroll onProgress={setProgress} />
        </div>

        

      </div>
      {/* =============== END SKILLS SECTION =============== */}
        
      

    </section>
    <div 
        className="w-full h-screen bg-bg-primary flex justify-center flex-col"
        >
      <InfiniteMenu items={technologies}
    scale={1} />
    </div>

    </div>
  );
};

export default About;
