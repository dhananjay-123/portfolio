import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

/* ===================== BALL (STATIC) ===================== */
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <mesh scale={2.5}>
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
        scale={1.1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

/* ===================== CANVAS ===================== */
const BallCanvas = ({ icon }) => {
  //const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className="w-full h-full relative">
      <Canvas
        frameloop="demand"   // no continuous rendering
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 6], fov: 60 }}
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
            
            enableRotate={true}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
