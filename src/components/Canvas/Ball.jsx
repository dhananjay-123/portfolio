import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import { useInView } from "react-intersection-observer";

/* ===================== BALL ===================== */
const Ball = ({ imgUrl, animate }) => {
  const meshRef = useRef();
  const [decal] = useTexture([imgUrl]);

  // Random spin speeds and directions
  const spin = useRef({
    xSpeed: THREE.MathUtils.randFloat(1.5, 2.5),
    ySpeed: THREE.MathUtils.randFloat(2.5, 3.5),
    zSpeed: THREE.MathUtils.randFloat(0.8, 1.5),
    xDir: Math.random() > 0.5 ? 1 : -1,
    yDir: Math.random() > 0.5 ? 1 : -1,
    zDir: Math.random() > 0.5 ? 1 : -1,
  }).current;

  useFrame((state, delta) => {
    if (animate && meshRef.current) {
      // Continuous spinning
      meshRef.current.rotation.y += delta * spin.ySpeed * spin.yDir;
      meshRef.current.rotation.x += delta * spin.xSpeed * spin.xDir * 0.5;
      meshRef.current.rotation.z += delta * spin.zSpeed * spin.zDir * 0.5;

      // Pulsating scale (breathing effect)
      const scale = 2.5 + Math.sin(state.clock.elapsedTime * 2.5) * 0.15;
      meshRef.current.scale.set(scale, scale, scale);

      // Optional slight Y offset to enhance floating
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.25;
    }
  });

  return (
    <Float
      speed={0.9}              // faster float
      rotationIntensity={0.8}   // stronger tilt
      floatIntensity={0.2}      // more vertical movement
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color="#111827"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1.1}   // slightly bigger decal for visibility
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/* ===================== CANVAS ===================== */
const BallCanvas = ({ icon }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div ref={ref} className="w-full h-full relative">
      <Canvas
        frameloop="always" // needed for smooth spin & float
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 6], fov: 50 }} // slightly further out
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[2, 2, 2]}
            intensity={1}
            color="#fef3c7"
          />
          <OrbitControls
            enableZoom={!isMobile}
            enableRotate={!isMobile}
          />
          <Ball imgUrl={icon} animate={animate} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
