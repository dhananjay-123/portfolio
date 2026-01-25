import { useEffect, useRef, useState } from "react";
import { useScroll,motion } from "framer-motion";

const TOTAL_FRAMES = 192;
const pad = (n) => String(n).padStart(5, "0");
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
  { at: 0.0, align: "left", title: "Frontend Web Developer", sub: "Freelance | Jan 2024" },
  { at: 0.25, align: "right", title: "Intern", sub: "Tech Solutions | Jun 2024 - Dec 2024" },
  { at: 0.5, align: "left", title: "Web Development Intern", sub: "Creative Minds | Jan 2025 - May 2025" },
  { at: 0.75, align: "right", title: "Intern", sub: "Innovatech | Jun 2025 - Dec 2025" },
];


  return (
    <div className="pointer-events-none absolute inset-0 ">
      {blocks.map((b, i) => {
        const visible = Math.abs(progress - b.at) < 0.08;
        return (
          <div
            key={i}
            className={`absolute transition-all duration-500 ease-out 
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              ${
                b.align === "left"
                  ? "bottom-0 left-30 text-left"
                  : b.align === "right"
                  ? "bottom-0 right-30 text-right"
                  : "bottom-0 left-1/2 -translate-x-1/2 text-center"
              }`}
          >
            <h2 className="text-4xl font-mono font-medium tracking-tight text-accent-success">
              {b.title}
            </h2>
            <p className="mt-2 font-mono text-sm tracking-tight text-text-primary">
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

  /* -------- Image Preload -------- */
  useEffect(() => {
    let count = 0;
    const imgs = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/${pad(i)}.jpg`; // or .png
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

  /* -------- Canvas Resize & DPR -------- */
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

  /* -------- Scroll → Frame Mapping -------- */
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    return scrollYProgress.on("change", (v) => {
      const eased = v * v * (3 - 2 * v); // smoothstep
      const frame = Math.floor(eased * (TOTAL_FRAMES - 1));
      if (frame === lastFrame.current) return;
      lastFrame.current = frame;
      setProgress(v);

      const img = imagesRef.current[frame];
      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use viewport size to avoid cropping
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

      const scale = 0.95; // leave margin for overlays
      drawW *= scale;
      drawH *= scale;

      const x = (cw - drawW) / 2;
      const y = (ch - drawH) / 2;

      ctx.drawImage(img, x, y, drawW, drawH);
    });
  }, [loaded, scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-bg-primary">
      {!loaded && (
        <Loader progress={Math.round((loadedCount / TOTAL_FRAMES) * 100)} />
      )}

      {/* Sticky wrapper for video-like placement */}
      <div className="sticky top-10 h-[80vh] w-full flex items-center justify-center flex-col">
        <motion.h2 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        
        className="text-text-muted text-3xl lg:text-5xl font-bold font-[Inter] pb-10">
              I have <span className="text-text-primary">1+ years</span> of experience
            </motion.h2>

        <canvas ref={canvasRef} className="max-h-[50vh] max-w-[70vw] pb-5" />
        <StoryOverlay progress={progress} />
      </div>
    </section>
  );
}
