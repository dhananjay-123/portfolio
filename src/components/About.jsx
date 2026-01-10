import Timeline from "../components/WorkTimeline/Timeline";
import TimelineItem from "../components/WorkTimeline/TimelineItem";
import { workExperience } from "../constants";

const About = () => {
  return (
    <section className="w-full bg-bg-primary sm:px-24 lg:px-40 pb-16 px-7">
      <h2 className="text-text-muted text-3xl lg:text-5xl mb-16">
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
    </section>
  );
};

export default About;
