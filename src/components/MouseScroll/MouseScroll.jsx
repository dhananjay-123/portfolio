import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Loader from "../Loader";

const TOTAL_FRAMES = 192;
const pad = (n) => String(n).padStart(5, "0");

/* ---------------- Story Overlay ---------------- */
function StoryOverlay({ progress }) {
  const blocks = [
    { at: 0.1, align: "left", title: "Frontend Web Developer", sub: "Freelance | Jan 2024" },
    { at: 0.25, align: "right", title: "Intern", sub: "Tech Solutions | Jun 2024 - Dec 2024" },
    { at: 0.5, align: "left", title: "Web Dev Intern", sub: "Creative Minds | Jan 2025 - May 2025" },
    { at: 0.75, align: "right", title: "Intern", sub: "Innovatech | Jun 2025 - Dec 2025" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {blocks.map((b, i) => {
        const visible = Math.abs(progress - b.at) < 0.08;

        return (
          <div
            key={i}
            className={`absolute transition-all duration-500
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              ${b.align === "left" ? "bottom-10 left-24" : "bottom-10 right-24 text-right"}
            `}
          >
            <h2 className="text-4xl font-mono text-accent-success">{b.title}</h2>
            <p className="mt-2 font-mono text-sm text-text-primary">{b.sub}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Main Component ---------------- */
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

  /* ---------- Canvas Resize ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ---------- Draw helper ---------- */
  const drawFrame = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cw = window.innerWidth;
    const ch = window.innerHeight;

    const ratio = img.width / img.height;
    const canvasRatio = cw / ch;

    let w, h;

    if (ratio > canvasRatio) {
      w = cw;
      h = cw / ratio;
    } else {
      h = ch;
      w = ch * ratio;
    }

    const scale = 1.3;
    w *= scale;
    h *= scale * 0.78;

    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  };

  /* ---------- Cinematic preload ---------- */
  useEffect(() => {
    const imgs = new Array(TOTAL_FRAMES);

    let loadedFrames = 0;
    const MIN_LOADER_TIME = 3500; // ← adjust intro duration here
    const startTime = Date.now();

    const updateProgress = () => {
      loadedFrames++;

      const realProgress = loadedFrames / TOTAL_FRAMES;
      setLoadedCount(Math.floor(realProgress * TOTAL_FRAMES));

      if (loadedFrames === TOTAL_FRAMES) {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0);

        setTimeout(() => {
          setLoaded(true);

          if (imgs[0]) drawFrame(imgs[0]);
        }, remaining);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames4/${pad(i)}.jpg`;

      img.onload = updateProgress;
      img.onerror = updateProgress;

      imgs[i - 1] = img;
    }

    imagesRef.current = imgs;
  }, []);

  /* ---------- Scroll → frame mapping ---------- */
  useEffect(() => {
    if (!loaded) return;

    return scrollYProgress.on("change", (v) => {
      const frame = Math.floor(v * (TOTAL_FRAMES - 1));

      if (frame === lastFrame.current) return;
      lastFrame.current = frame;

      setProgress(v);

      const img = imagesRef.current[frame];
      if (img) drawFrame(img);
    });
  }, [loaded, scrollYProgress]);

  /* ---------- Exit animation ---------- */
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0.85, 1], [0, -120]);

  return (
    <section
      ref={containerRef}
      className="relative h-[700vh] w-screen "
    >
      {!loaded && (
        <Loader progress={Math.round((loadedCount / TOTAL_FRAMES) * 100)} />
      )}

      <motion.div
        style={{ opacity, y: translateY }}
        className="sticky top-10 h-[80vh] flex items-center justify-center"
      >
        <motion.h2 className="absolute z-20 pb-[50vh] text-3xl lg:text-5xl font-bold text-text-muted">
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
