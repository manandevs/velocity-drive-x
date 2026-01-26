"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Model({ customRotationY = 0 }: { customRotationY?: number }) {
  const { scene } = useGLTF("/mclaren_f1_gtr_longtail_ams2.glb");

  const [modelProps, setModelProps] = useState({
    scale: 122.5,
    position: [0.35, -0.9, 0],
    baseRotation: [0.05, -1.2, 0],
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setModelProps({
          scale: 50,
          position: [0, -1.25, 0],
          baseRotation: [0.1, -0.5, 0],
        });
      } else if (width < 1024) {
        setModelProps({
          scale: 90,
          position: [0.2, -0.7, 0],
          baseRotation: [0.05, -0.45, 0],
        });
      } else {
        setModelProps({
          scale: 122.5,
          position: [0.35, -0.9, 0],
          baseRotation: [0.05, -1.2, 0],
        });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const finalRotation = [
    modelProps.baseRotation[0],
    modelProps.baseRotation[1] + customRotationY,
    modelProps.baseRotation[2],
  ];

  return (
    <primitive
      object={scene}
      scale={modelProps.scale}
      rotation={finalRotation}
      position={modelProps.position}
    />
  );
}