"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/mclaren_f1_gtr_longtail_ams2.glb");
  return <primitive object={scene} scale={95} rotation={[-0.1, -1.5, -0.1]} position={[0, -0.8, 0]} />;
}

const CarModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 6], fov: 35 }}
      className="w-full h-full pointer-events-none"
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <Environment preset="city" />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} enableRotate={true} /> 
    </Canvas>
  );
};

export default CarModel;