// TextVariations/AnimatedText.jsx
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const charVariant = {
  hidden: {
    opacity: 0,
    y: "0.25em",
  },
  show: {
    opacity: 1,
    y: "0em",
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const AnimatedText = ({ text, className }) => {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {text.split("\n").map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              variants={wordVariant}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={charVariant}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              <span>&nbsp;</span>
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};


export default AnimatedText;
