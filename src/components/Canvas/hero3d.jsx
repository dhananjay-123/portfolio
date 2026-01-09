import {Suspense,useEffect,useState} from 'react'
import {Canvas,extend} from '@react-three/fiber'

import { OrbitControls, Preload, useGLTF ,Bounds} from '@react-three/drei'
import CanvasLoader from '../Loader' 
import { Box3, Vector3 } from "three";


const House = () => {
  const { scene } = useGLTF("./cerbero_house/scene.gltf");

  // 🔴 Recenter model properly
  const box = new Box3().setFromObject(scene);
  const center = box.getCenter(new Vector3());

  scene.position.sub(center); // move center to (0,0,0)

  return <primitive object={scene} />;
};






const HouseCanvas = () => {
  return (
    <Canvas
      className="w-full h-full cursor-crosshair"
      camera={{ position: [190,190,190], fov: 50 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={2} />

      <Suspense fallback={<CanvasLoader />}>
        <House />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI/3}
          maxPolarAngle={Math.PI/3}
          target={[10, -30, 10]}   // 🔴 correct look-at
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};


export default HouseCanvas