import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bg, windowimg } from "../../assets/"
import AnimatedText from "../TextVariations/AnimatedText";
import ScrollIndicator from "./ScrollIndicator";
import ScrambledText from '../TextVariations/ScrambledText';

gsap.registerPlugin(ScrollTrigger);

/* ---------- FREE IMAGE URLS ---------- */
const NIGHT_BG =
  bg;

const WINDOW_IMG =
  windowimg;

export default function HeroScroll() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=900%", // long scroll for cinematic effect
          scrub: 1.6,
          pin: true,
          anticipatePin: 1
        },
        onLeaveBack: () => {
          gsap.set([".night-bg", ".window-layer"], { clearProps: "transform" });
        }
      });

      /* ---------- BACKGROUND (FAR) ---------- */
      tl.fromTo(
        ".night-bg",
        { scale: 1.5, y: "40%", x: "15%" },
        { scale: 1.3, y: "150", ease: "none", x: "12%" }, // stronger zoom & upward
        0
      );

      /* ---------- WINDOW (CLOSE) ---------- */
      /* ---------- WINDOW (CLOSE) ---------- */
      tl.fromTo(
        ".window-layer",
        { scale: 1, y: 0 },
        { scale: 6, y: 400, ease: "none", x: 0 }, // more zoom & upward
        0
      )
        .to(".window-layer", { opacity: 0, ease: "none" }, 0.1);


      /* ---------- TEXT / HEADLINES ---------- */
      tl.fromTo(
        ".headline-1",
        { opacity: 0, y: 200 },  // start lower
        { opacity: 1, y: -50 },  // move upward
        0.18
      )
        .fromTo(".headline-2", { opacity: 0, y: 180 }, { opacity: 1, y: -80 }, 0.32)
        .fromTo(".atmosphere", { opacity: 0, y: 150 }, { opacity: 1, y: -100 }, 0.48)
        .to(
          [".headline-1", ".headline-2", ".atmosphere"],
          { opacity: 0, y: -300 }, // fade out upward
          0.8
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden bg-black text-neutral-100 flex justify-center"
        style={{ perspective: "1600px" }}
      >
        {/* ---------- NIGHT BACKGROUND ---------- */}
        <div className="night-bg absolute inset-0 z-0 transform-gpu ">
          <img
            src={NIGHT_BG}
            className="w-[80%] h-[80%] object-cover"
            alt="Night city"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* ---------- WINDOW (OVERLAPPING) ---------- */}
        <div className="window-layer absolute inset-0 z-10 flex items-center justify-center transform-gpu">
          {/* ================= TEXT OVER WINDOW ================= */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none right-[60vw]">
            <div className="text-center drop-shadow-xl px-4">
              {/* Small top label */}
              <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.5}
                speed={0.3}
                scrambleChars=".:"
                classname=""
              >
                Welcome to a space where pixels meet purpose. <br />

                Step through the window and explore the layers of design, code, and creativity. I craft in every interface.
              </ScrambledText>






            </div>
            <ScrollIndicator />

          </div>


          {/* <h1 className="relative ">Hello</h1> */}
          <img
            src={WINDOW_IMG}
            className="w-full h-full object-cover rounded-xl shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
            alt="Interior window"
          />
        </div>

        {/* ---------- TEXT ---------- */}
        <div className="headline-1 absolute inset-0 z-20 flex items-center justify-center text-center px-10">
          <div className="flex flex-col pt-25 pb-5">
            <div className="w-[50vw] flex flex-row py-2 justify-center text-xl sm:text-2xl md:text-3xl font-mono">


              I build interactive, responsive experiences that not only look beautiful but feel intuitive — transforming ideas into digital realities. Scroll further to see my journey of curiosity, precision, and creativity.
            </div>


            {/* Hero banner */}

          </div>
        </div>

        <div className="headline-2 absolute inset-0 z-20 flex items-center justify-center text-center px-10">
          <h1 className="text-4xl font-light tracking-wide">

          </h1>
        </div>

        <div className="atmosphere absolute bottom-24 z-20 w-full text-center text-sm opacity-80 tracking-wider">

        </div>
      </section>

      {/* ================= NEXT SECTION ================= */}
      {/* <section className="h-screen flex items-center justify-center bg-black text-white">
       
      </section> */}
    </>
  );
}
