import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const TOTAL_FRAMES = 232;
const pad = (n) => String(n).padStart(5, "0");

/* ------------------ Text Animation ------------------ */
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

/* ------------------ Loader ------------------ */
function Loader({ progress }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#ECECEC]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-6 w-6 animate-spin rounded-full border-2 border-black/30 border-t-black/80" />
        <p className="text-sm tracking-tight text-black/60">
          Loading WpDev sequence — {progress}%
        </p>
      </div>
    </div>
  );
}

/* ------------------ Story Overlay ------------------ */
function StoryOverlay({ progress }) {
  const blocks = [
    { at: 0.1, align: "left", title: "Frontend Web Developer", sub: "Freelance | Jan 2024" },
    { at: 0.25, align: "right", title: "Intern", sub: "Tech Solutions | Jun 2024 - Dec 2024" },
    { at: 0.5, align: "left", title: "Web Development Intern", sub: "Creative Minds | Jan 2025 - May 2025" },
    { at: 0.75, align: "right", title: "Intern", sub: "Innovatech | Jun 2025 - Dec 2025" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {blocks.map((b, i) => {
        const visible = Math.abs(progress - b.at) < 0.08;
        return (
          <div
            key={i}
            className={`absolute transition-all duration-500 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              ${
                b.align === "left"
                  ? "bottom-10 left-24 text-left"
                  : "bottom-10 right-24 text-right"
              }`}
          >
            <h2 className="text-4xl font-mono tracking-tight text-accent-success">
              {b.title}
            </h2>
            <p className="mt-2 font-mono text-sm text-text-primary">
              {b.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------ Main Component ------------------ */
export default function MouseScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastFrame = useRef(-1);

  const [loaded, setLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ---------- Preload Frames ---------- */
  useEffect(() => {
    let count = 0;
    const imgs = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames3/${pad(i)} copy.webp`;
      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          imagesRef.current = imgs;
          setLoaded(true);
        }
      };
      imgs.push(img);
    }
  }, []);

  /* ---------- Canvas Resize ---------- */
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = w * dpr;
      canvas.height = h * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [loaded]);

  /* ---------- Scroll → Frame Mapping (SLOWED) ---------- */
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const SCROLL_START = 0.05;
    const SCROLL_END = 0.9;

    return scrollYProgress.on("change", (v) => {
      let t = (v - SCROLL_START) / (SCROLL_END - SCROLL_START);
      t = Math.min(Math.max(t, 0), 1);

      // ultra-smooth cinematic easing
      const eased = t * t * t * (t * (6 * t - 15) + 10);

      const frame = Math.floor(eased * (TOTAL_FRAMES - 1));
      if (frame === lastFrame.current) return;
      lastFrame.current = frame;

      setProgress(v);

      const img = imagesRef.current[frame];
      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const imgRatio = img.width / img.height;
      const canvasRatio = cw / ch;

      let drawW, drawH;
      if (imgRatio > canvasRatio) {
        drawW = cw;
        drawH = cw / imgRatio;
      } else {
        drawH = ch;
        drawW = ch * imgRatio;
      }

      const scale = 1.3;
      drawW *= scale;
      drawH *= scale * 0.78;

      const x = (cw - drawW) / 2;
      const y = (ch - drawH) / 2;

      ctx.drawImage(img, x, y, drawW, drawH);
    });
  }, [loaded, scrollYProgress]);

  /* ---------- Exit Animation (Delayed) ---------- */
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0.85, 1], [0, -120]);

  return (
    <section
      ref={containerRef}
      className="relative h-[700vh] w-[100vw] bg-grid"
    >
      {!loaded && (
        <Loader progress={Math.round((loadedCount / TOTAL_FRAMES) * 100)} />
      )}

      <motion.div
        style={{ opacity, y: translateY }}
        className="sticky top-10 h-[80vh] w-full flex items-center justify-center"
      >
        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute z-20 pb-[50vh] text-3xl lg:text-5xl font-bold text-text-muted"
        >
          I have <span className="text-text-primary">1+ years</span> of experience
        </motion.h2>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-screen w-screen"
        />

        <StoryOverlay progress={progress} />
      </motion.div>
    </section>
  );
}
