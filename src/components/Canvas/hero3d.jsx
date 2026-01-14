import { Suspense, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Bounds, useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import CanvasLoader from "../Loader";

/* =========================
   Model
========================= */

const House = () => {
  const { scene } = useGLTF("/cerbero_house/scene.gltf");

  // Recenter ONCE
  useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    scene.position.sub(center);
  }, [scene]);

  return <primitive object={scene} scale={0.7} />;
};

useGLTF.preload("/cerbero_house/scene.gltf");

/* =========================
   Controls (frameloop-safe)
========================= */

function Controls() {
  const { invalidate } = useThree();
  const isMobile = window.innerWidth < 768;

  if (isMobile) return null;

  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 3}
      onChange={invalidate}
      makeDefault
    />
  );
}

/* =========================
   Lights (memo-safe)
========================= */

const Lights = () => (
  <>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 10, 5]} intensity={1.8} />
  </>
);

/* =========================
   Canvas
========================= */

const HouseCanvas = () => {
  const dpr = Math.min(window.devicePixelRatio, 1.25);

  return (
    <Canvas
      className="w-full h-full cursor-crosshair"
      frameloop="demand"
      dpr={dpr}
      shadows={false}
      events={false}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
      }}
      camera={{ position: [190, 190, 190], fov: 50 }}
    >
      <Lights />

      <Suspense fallback={<CanvasLoader />}>
        <Bounds fit clip observe={false} margin={1.7}>
          <House />
        </Bounds>
        <Controls />
      </Suspense>
    </Canvas>
  );
};

export default HouseCanvas;
