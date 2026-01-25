import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope ,FaDownload} from "react-icons/fa";

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
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent");
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0A66C2", link: "https://www.linkedin.com/in/dhananjay-agrawal-b5843b211" },
    { icon: <FaGithub />, label: "GitHub", color: "#8b5cf6", link: "https://github.com/dhananjay-123" },
    { icon: <FaInstagram />, label: "Instagram", color: "#E1306C", link: "https://instagram.com/" },
    { icon: <FaEnvelope />, label: "Email", color: "#22d3ee" },
  ];

  return (
    <section className="bg-bg-primary pt-28 overflow-hidden flex flex-col justify-center">

      {/* ================= HEADING ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20 flex md:flex-row flex-col gap-10 "
      >
        <div className="flex flex-col gap-10 px-7 sm:px-24">
          <motion.h1
          variants={item}
          className="text-5xl lg:text-6xl font-bold font-[Inter] text-text-muted"
        >
          Let’s <span className="futuristic-gradient">Connect</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-text-muted text-xl lg:text-2xl mt-4 max-w-xl font-mono"
        >
          Build something meaningful, fast, and future-ready.
        </motion.p>
        </div>
        <motion.div
          variants={item}
          className="text-text-muted text-xl lg:text-2xl mt-4 max-w-xl font-mono gap-10 flex flex-col justify-end text-center pr-1 overflow-hidden "
        >
          
          <div>
            <p className="font-mono text-green-400 text-xl lg:text-3xl">dhananjayagrawalmain001@gmail.com</p> 
          </div>
          <div className="flex justify-end">
  <a
    href="/Dhananjay_CV.pdf"
    download
    className="bg-amber-300 w-[40%] py-3 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-amber-400 transition"
  >
    <FaDownload className="text-lg" />
    Download CV
  </a>
</div>
          
        </motion.div>
      </motion.div>

     

      {/* ================= FOOTER ================= */}
      <motion.footer
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden mt-22 border-t border-white/10 pt-14 flex flex-col gap-10"
      >

        {/* ---------- GRID BACKGROUND ---------- */}
        <motion.div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),
                linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
            bg-[size:60px_60px]
            opacity-15
            pointer-events-none
          "
          animate={{ backgroundPosition: ["0px 0px", "0px 120px"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        />

        {/* ---------- WAVE GLOW ---------- */}
        <motion.div
          className="
            absolute -bottom-40 left-0
            w-[200%] h-96
            bg-gradient-to-r
            from-white/10 via-white/5 to-white/10
            blur-3xl
            opacity-30
            pointer-events-none
          "
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
        />

        {/* ---------- FADE MASK ---------- */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-transparent pointer-events-none" />

        {/* ---------- SOCIAL ICONS ---------- */}
        <motion.div variants={item} className="relative z-10 flex justify-center gap-10">
          {socialLinks.map(({ icon, label, color, link }) => (
            <motion.a
              key={label}
              {...(link
                ? { href: link, target: "_blank", rel: "noopener noreferrer" }
                : { onClick: () => setShowEmailModal(true) })}
              whileHover={{
                scale: 1.15,
                color: color,
                boxShadow: `0 0 30px ${color}80`,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-white/5 backdrop-blur-md
                border border-white/10
                text-text-primary text-xl
                cursor-pointer
              "
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* ---------- FOOTER TEXT ---------- */}
        <motion.div variants={item} className="relative z-10 text-center pb-5 text-text-muted font-mono text-sm">
          © {new Date().getFullYear()} Dhananjay — Crafted with passion & precision.
        </motion.div>

      </motion.footer>

      {/* ================= EMAIL MODAL ================= */}
      {showEmailModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowEmailModal(false)}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-bg-primary p-8 rounded-xl max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-text-muted">Send an Email</h2>
            <p className="text-text-muted mb-6">
              Click below to open your email client:
            </p>
            <a
              href="mailto:youremail@example.com"
              className="block text-center bg-white text-bg-primary py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Email Me
            </a>
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-3 right-3 text-text-muted text-xl"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}

export default Contact;
