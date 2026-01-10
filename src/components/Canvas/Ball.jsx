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
    xSpeed: THREE.MathUtils.randFloat(1, 2),
    ySpeed: THREE.MathUtils.randFloat(2, 3),
    zSpeed: THREE.MathUtils.randFloat(0.5, 1.5),
    xDir: Math.random() > 0.5 ? 1 : -1,
    yDir: Math.random() > 0.5 ? 1 : -1,
    zDir: Math.random() > 0.5 ? 1 : -1,
  }).current;

  useFrame((state, delta) => {
    if (animate) {
      meshRef.current.rotation.y += delta * spin.ySpeed * spin.yDir; // horizontal
      meshRef.current.rotation.x += delta * spin.xSpeed * spin.xDir * 0.3; // small X tilt
      meshRef.current.rotation.z += delta * spin.zSpeed * spin.zDir * 0.3; // small Z tilt
    }
  });

  return (
    <Float
      speed={0.5}
      rotationIntensity={0.4}
      floatIntensity={0.08} // smooth floating
    >
      <mesh ref={meshRef} castShadow receiveShadow scale={2.5}>
        {/* Sphere geometry */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#111827"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Single decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={0.9}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/* ===================== CANVAS ===================== */
const BallCanvas = ({ icon }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-full relative">
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[2, 2, 2]}
            intensity={0.8}
            color="#fef3c7"
          />
          <OrbitControls enableZoom={true} enableRotate={true} />
          <Ball imgUrl={icon} animate={animate} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
