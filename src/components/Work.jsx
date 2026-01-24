import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { topicsData } from "../constants";


import { workExperience } from "../constants";
import Timeline from "../components/WorkTimeline/Timeline";
import TimelineItem from "../components/WorkTimeline/TimelineItem";
import ScrollAnimation from "./ScrollAnimation/ScrollAnimation";
const Work = () => {
  const targetRef = useRef(null);

  

  return (
    <div className="w-full bg-bg-primary px-7 sm:px-24 lg:px-40 relative overflow-clip">
       <h2 className="text-text-muted text-3xl lg:text-5xl mb-16 font-bold font-[Inter]">
              I have <span className="text-text-primary">1+ years</span> of experience
            </h2>
      
            <Timeline>
              {workExperience.map((exp, i) => (
                <TimelineItem
                  key={i}
                  index={i}
                  title={exp.position}
                  company={exp.company}
                  date={exp.duration}
                  description={exp.description}
                />
              ))}
            </Timeline>
      
      <div
      
      className="w-full bg-bg-primary relative overflow-hidden flex  "
       
    >
      

      {/* Cards */}
     <ScrollAnimation />
      
    </div>
    </div>

  );
}

export default Work;
