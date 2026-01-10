import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    console.log("Message sent");
  };

  return (
    <section className="bg-bg-primary px-7 sm:px-24 lg:px-40 py-28 overflow-hidden">
      
      {/* Heading */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h1
          variants={item}
          className="text-5xl lg:text-6xl font-semibold text-text-muted"
        >
          Let’s{" "}
          <span className="futuristic-gradient">
            Connect
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-text-muted text-xl lg:text-2xl mt-4 max-w-xl"
        >
          Build something meaningful, fast, and future-ready.
        </motion.p>
      </motion.div>

      {/* Glass Form */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          max-w-3xl mx-auto
          backdrop-blur-xl
          bg-white/5
          border border-white/10
          rounded-3xl
          p-10 sm:p-14
          shadow-[0_0_60px_rgba(255,255,255,0.06)]
        "
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <motion.div variants={item} className="flex flex-col gap-2">
            <label className="text-text-muted text-sm">Name</label>
            <input
              required
              type="text"
              className="glass-input"
              placeholder="John Doe"
            />
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-2">
            <label className="text-text-muted text-sm">Email</label>
            <input
              required
              type="email"
              className="glass-input"
              placeholder="john@email.com"
            />
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-2">
            <label className="text-text-muted text-sm">Message</label>
            <textarea
              rows="5"
              className="glass-input resize-none"
              placeholder="Tell me about your idea..."
            />
          </motion.div>

          <motion.button
            variants={item}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(255,255,255,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="
              mt-6 py-3 rounded-xl
              bg-white text-bg-primary
              font-semibold text-lg
              transition
            "
          >
            Send Message
          </motion.button>

        </form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-6 mt-20"
      >
        {["LinkedIn", "Email", "Instagram"].map((label) => (
          <motion.a
            key={label}
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,255,255,0.2)",
            }}
            className="
              flex-1 py-5
              bg-white/5 backdrop-blur-lg
              border border-white/10
              rounded-xl
              text-center text-text-primary text-xl
              cursor-pointer
            "
          >
            {label}
          </motion.a>
        ))}
      </motion.div>

    </section>
  );
}

export default Contact;
