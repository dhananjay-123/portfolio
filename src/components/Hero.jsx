
import { Description } from "../constants";

import Paragraph from "./TextVariations/Paragraph";

import FuturisticHeading from "./TextVariations/FuturisticHeading";



import { FiBriefcase, FiMapPin, FiClock } from "react-icons/fi";
import HeroCards from "./HeroCards/HeroCards";
import HeroScroll from "./HeroScroll/HeroScroll";

const Hero = () => {
  return (
   <div>
    
    <div className="w-full h-full ">
      <HeroScroll/>
    </div>

     <div className="w-full py-1 bg-grid justify-center p-7 sm:px-24 lg:px-40">


      


      {/* Top section */}
      

      {/* Heading */}
      <div className="pl-5 pr-5 pt-10">
        <div className="pl-5 pr-5 pt-10">
          <FuturisticHeading />
        </div>
      </div>

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
        {/* Open to work */}
        <div className="flex items-center gap-2">
          <FiBriefcase className="text-accent-success text-sm" />
          <span>OPEN TO WORK</span>
        </div>

        <div className="w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500" />

        {/* Location */}
        <div className="flex items-center gap-2 text-text-muted">
          <FiMapPin className="text-text-muted text-sm" />
          <span>Gwalior, India</span>
        </div>

        <div className="w-full lg:w-[25%] h-[1px] lg:m-4 bg-gray-500" />

        {/* Timezone */}
        <div className="flex items-center gap-2 text-text-muted">
          <FiClock className="text-text-muted text-sm" />
          <span>IST (UTC+05:30)</span>
        </div>
      </div>

      {/* Description + 3D canvas */}
      <div className="flex lg:pt-20 flex-col lg:flex-row lg:text-2xl items-center">
        <div className="lg:w-[40%]">
          <Paragraph value={Description} />
        </div>

        <div className="w-full h-[70vh] lg:h-[100vh] lg:w-[60%] flex justify-center items-center">
          {/* <HouseCanvas /> */}
          <HeroCards/>
        </div>
      </div>
      
    </div>
   </div>
  );
};
export default Hero;
