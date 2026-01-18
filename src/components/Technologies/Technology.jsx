import { technologies } from "../../constants";
import "./technology.css";

const Technology = () => {
  return (
    <div className="tech-wrapper">
      <div
        className="slider"
        style={{ "--quantity": technologies.length }}
      >
        {technologies.map((item, i) => (
          <div
            key={i}
            className="item "
            style={{ "--position": i + 1 }}
          >
            <img
              src={item.icon}
              alt={item.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
