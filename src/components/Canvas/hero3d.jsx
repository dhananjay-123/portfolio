import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Bounds,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Box3, Vector3 } from "three";

const House = () => {
  const { scene } = useGLTF("./cerbero_house/scene.gltf");

  // ✅ Recenter ONLY ONCE (important)
  useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    scene.position.sub(center);
  }, [scene]);

  return <primitive object={scene} scale={0.7} />;
};

useGLTF.preload("./cerbero_house/scene.gltf");

const HouseCanvas = () => {
  return (
    <Canvas
      className="w-full h-full cursor-crosshair"

      /* ✅ BIG mobile performance win */
      dpr={[1, 1.5]}

      /* ✅ Stop unnecessary re-renders */
      frameloop="demand"

      camera={{ position: [190,190,190], fov: 50 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.8} />

      <Suspense fallback={<CanvasLoader />}>
        {/* ✅ Auto-fit camera for all screen sizes */}
        <Bounds fit clip observe margin={1.7}>
          <House />
        </Bounds>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          makeDefault
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HouseCanvas;
