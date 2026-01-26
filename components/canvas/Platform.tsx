"use client";

import { Cylinder } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Platform({ customRotationY = 0 }: { customRotationY?: number }) {
  const [platformProps, setPlatformProps] = useState({
    position: [0.35, -1.05, 0],
    baseRotation: [0.05, -1.2, 0],
    radius: 4,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPlatformProps({
          position: [0, -1.32, 0],
          baseRotation: [0.1, -1.5, 0],
          radius: 1.8,
        });
      } else if (width < 1024) {
        setPlatformProps({
          position: [0.2, -0.85, 0],
          baseRotation: [0.05, -0.45, 0],
          radius: 3.2,
        });
      } else {
        setPlatformProps({
          position: [0.35, -1.05, 0],
          baseRotation: [0.05, -1.2, 0],
          radius: 4.2,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const finalRotation = [
    platformProps.baseRotation[0],
    platformProps.baseRotation[1] + customRotationY,
    platformProps.baseRotation[2],
  ];

  return (
    <group
      position={platformProps.position as [number, number, number]}
      rotation={finalRotation as [number, number, number]}
    >
      <Cylinder
        args={[platformProps.radius, platformProps.radius, 0.15, 64]}
        receiveShadow
      >
        <meshStandardMaterial color="#111" roughness={0.2} metalness={0.5} />
      </Cylinder>

      <Cylinder
        args={[platformProps.radius + 0.05, platformProps.radius + 0.05, 0.05, 64]}
        position={[0, -0.02, 0]}
        receiveShadow
      >
        <meshStandardMaterial
          color="#ff8800"
          emissive="#ff8800"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </Cylinder>
    </group>
  );
}