import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function PosterPlane({ texture, position, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeBufferGeometry args={[3, 4]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default function ScrollFlyingPosters({ images }) {
  const groupRef = useRef();
  const { scrollYProgress } = useScroll({
    target: document.body,
    offset: ["start start", "end end"],
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = scrollRotate.get();
  });

  const textures = images.map((img) => new THREE.TextureLoader().load(img));

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <group ref={groupRef}>
        {textures.map((tex, i) => {
          const angle = (i / textures.length) * Math.PI * 2;
          const radius = 8;
          return (
            <PosterPlane
              key={i}
              texture={tex}
              position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
              rotation={[0, angle + Math.PI, 0]}
            />
          );
        })}
      </group>
    </Canvas>
  );
}
