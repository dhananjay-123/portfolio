import { useRef, useEffect } from "react";
import gsap from "gsap";


export default function ScrollIndicator() {
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 1.2, ease: "power1.inOut" } });

    // Animate each layer separately with vertical offset
    tl.to(layer1.current, { y: 20, opacity: 0.5 })
      .to(layer1.current, { y: 0, opacity: 1 }, "-=0.3");

    tl.to(layer2.current, { y: 22, opacity: 0.4 }, "<0.1")
      .to(layer2.current, { y: 0, opacity: 1 }, "-=0.5");

    tl.to(layer3.current, { y: 24, opacity: 0.3 }, "<0.2")
      .to(layer3.current, { y: 0, opacity: 1 }, "-=0.7");
    
    return () => tl.kill();
  }, []);

  return (
    <div className="absolute left-[90vw] transform -translate-x-1/2 z-30 flex flex-col items-center space-y-0.5">
      {/* 3-layer Arrow with spacing */}
      <svg
        ref={layer1}
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>

      <svg
        ref={layer2}
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>

      <svg
        ref={layer3}
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>

      {/* Optional Text */}
      <div className="mt-2 text-sm font-mono text-white w-[20vw text-center h-full opacity-70 items-center justify-center tracking-wider  ">
        Scroll to explore
      </div>
    </div>
  );
}
