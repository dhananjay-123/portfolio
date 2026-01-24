import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  para1,
  para2,
  para3,
  para4,
  para5,
  para8,
  para9,
  parabg,
} from "../../assets";

import "./parallax.css";

export default function Parallax() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = container.querySelectorAll(".parallax");

    // -------------------------
    // INITIAL GSAP REVEAL
    // -------------------------
    gsap.set(elements, { opacity: 0, scale: 0.95, y: 30 });
    gsap.to(elements, {
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
    });

    let rafId = null;

    // -------------------------
    // MOUSE MOVE + DEVICE ORIENTATION PARALLAX
    // -------------------------
    const handleMove = (xNorm, yNorm) => {
      const rotateDegree = xNorm * 15;

      elements.forEach((el) => {
        const speedx = Number(el.dataset.speedx || 0);
        const speedy = Number(el.dataset.speedy || 0);
        const speedz = Number(el.dataset.speedz || 0);

        const moveX = xNorm * speedx * 40;
        const moveY = yNorm * speedy * 40;

        const elRect = el.getBoundingClientRect();
        const isInLeft = elRect.left < window.innerWidth / 2 ? 1 : -1;
        const zValue = (window.innerWidth * xNorm - elRect.left) * isInLeft * speedz;

        gsap.to(el, {
          x: moveX,
          y: moveY,
          z: zValue,
          rotateY: rotateDegree,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
        const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;
        handleMove(xNorm, yNorm);
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // -------------------------
    // MOBILE: DEVICE ORIENTATION
    // -------------------------
    const handleOrientation = (e) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        // gamma = left-right tilt, beta = front-back tilt
        const gamma = e.gamma || 0; // -90 to 90
        const beta = e.beta || 0;   // -180 to 180

        // normalize tilt to range [-1,1]
        const xNorm = Math.max(-1, Math.min(1, gamma / 45)); // tilt left/right max ±45°
        const yNorm = Math.max(-1, Math.min(1, beta / 45));  // tilt forward/back max ±45°

        handleMove(xNorm, yNorm);
        rafId = null;
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);

    // -------------------------
    // CLEANUP
    // -------------------------
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="parallax-container">
      <div className="vignette" />

      {/* BACKGROUND */}
      <img
        src={parabg}
        data-speedx="0.12"
        data-speedy="0.12"
        data-speedz="0.05"
        className="parallax bg"
      />

      {/* LAYERS */}
      <img src={para1} data-speedx="0.25" data-speedy="0.22" data-speedz="0.2" className="parallax layer l1" />
      <img src={para2} data-speedx="0.22" data-speedy="0.2" data-speedz="0.18" className="parallax layer l2 flex justify-center items-center" />
      <img src={para3} data-speedx="0.2" data-speedy="0.18" data-speedz="0.16" className="parallax layer l3" />
      <img src={para4} data-speedx="0.18" data-speedy="0.17" data-speedz="0.14" className="parallax layer l4" />
      {/* <img src={para5} data-speedx="0.16" data-speedy="0.15" data-speedz="0.12" className="parallax layer l5" /> */}

      <div data-speedx="0.3" data-speedy="0.3" data-speedz="0.25" className="parallax text-layer">
        <h2>Hello there</h2>
      </div>

      <img src={para8} data-speedx="0.4" data-speedy="0.35" data-speedz="0.35" className="parallax layer l6" />
      <img src={para9} data-speedx="0.45" data-speedy="0.4" data-speedz="0.4" className="parallax layer l7" />
    </div>
  );
}
