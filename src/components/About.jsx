import { useState } from "react";
import Timeline from "../components/WorkTimeline/Timeline";
import TimelineItem from "../components/WorkTimeline/TimelineItem";
import { workExperience } from "../constants";
import HorizontalScroll from "../components/HorizontalScroll/HorizontalScroll";
import ProgressBarHorizontal from "../components/ProgressBar/ProgressBarHorizontal";
import BallCanvas from "./Canvas/Ball";
import { technologies } from "../constants";

const About = () => {
  const [progress, setProgress] = useState(0);

  return (
    <section className="w-full pt-20 bg-bg-primary sm:px-24 lg:px-40 px-7 pb-16">
      
      {/* EXPERIENCE */}
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

      {/* ================= SKILLS SECTION ================= */}
      <div className="relative mt-24 pb-40">

        {/* Sticky Header (ENDS with this wrapper) */}
        <div className="sticky top-35 z-0 flex items-center gap-3 px-4 bg-bg-primary/80 backdrop-blur-md">
          <h1 className="text-text-primary text-3xl lg:text-5xl w-1/2 font-bold font-[Inter]">
            Skills and Tools
          </h1>
          <ProgressBarHorizontal
            progress={progress}
            className="w-1/2 h-1"
          />
        </div>

        {/* Horizontal Scroll */}
        <div className="sticky top-20">
          <HorizontalScroll onProgress={setProgress} />
        </div>

        

      </div>
      {/* =============== END SKILLS SECTION =============== */}

      {/* TECHNOLOGIES GRID */}
      <div className="pt-24">
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
