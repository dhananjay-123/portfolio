import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const moveMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    // 🎯 Cursor follow (luxury lag)
    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.1;
      pos.y += (mouse.y - pos.y) * 0.1;

      gsap.set(cursor, {
        x: pos.x,
        y: pos.y,
      });
    });

    // ✨ Subtle scale on hover
    const interactiveElements = document.querySelectorAll("a, button");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.15,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      gsap.ticker.remove();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 z-[9999]
        w-3.5 h-3.5 rounded-full
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none
        hidden md:block
        bg-amber-600
      "
    />
  );
}
