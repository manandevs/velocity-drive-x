"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Platform from "./Platform";

interface SceneProps {
  rotationDegree: number;
}

export default function Scene({ rotationDegree }: SceneProps) {
  const rotationRadians = (rotationDegree * Math.PI) / 180;

  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.5, 8], fov: 35 }}
        className="w-full h-full"
        gl={{ preserveDrawingBuffer: true, alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <spotLight position={[-5, 5, -5]} intensity={1.5} color="#FFD600" />
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <Model customRotationY={rotationRadians} />
          <Platform customRotationY={rotationRadians} />
          <ContactShadows
            position={[0.35, -1.06, 0]}
            resolution={1024}
            scale={12}
            blur={2}
            opacity={0.6}
            far={10}
            color="#000000"
          />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}