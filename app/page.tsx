"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Trophy, Headset, Activity, Zap, Wifi, Cpu, Github, Linkedin } from "lucide-react";

const stats = [
  {
    Icon: Trophy,
    value: <>100<span className="text-[#FFD600] text-sm align-top ml-0.5">%</span></>,
    border: "border-r",
    corner: <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />,
  },
  {
    Icon: Headset,
    value: <>24<span className="text-[#FFD600] text-sm align-top tracking-widest ml-0.5">/7</span></>,
    border: "md:border-r",
    corner: <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 md:hidden" />,
  },
];

const socials = [
  { Icon: Linkedin, href: "https://linkedin.com" },
  { Icon: Github, href: "https://github.com" },
];

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-[#FFD600] selection:text-black overflow-hidden font-urbanist">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FFD600] blur-[180px] rounded-full opacity-10 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#003322] blur-[150px] rounded-full opacity-20 mix-blend-screen" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-asah text-[35vw] leading-none text-white/[0.02] tracking-tighter translate-y-12 scale-y-125 blur-sm">
          VDX
        </span>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-3">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 overflow-hidden bg-white/5 group-hover:border-[#FFD600]/50 transition-colors">
              <Image
                src="/vdx.png"
                alt="logo"
                width={100}
                height={100}
                className="object-cover w-full h-full opacity-90 filter sepia saturate-200 hue-rotate-[30deg] brightness-110 contrast-110"
              />
            </div>
            <span className="text-2xl md:text-3xl text-white font-asah tracking-widest pt-1 group-hover:text-[#FFD600] transition-colors">
              VDX
            </span>
          </div>
          <div className="col-span-2 md:col-span-3 flex flex-col items-center md:items-end md:pr-4">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-3 h-3 text-[#FFD600] fill-[#FFD600]" />
              <h4 className="font-asah text-2xl md:text-4xl text-white tracking-widest italic">
                UDX-GT
              </h4>
            </div>
            <div className="flex items-center justify-end gap-2 px-2 py-1 bg-[#FFD600] rounded-sm skew-x-[-10deg]">
              <span className="text-black text-[12px] tracking-[0.3em] font-black skew-x-[10deg] font-asah leading-2.5">
                velocity-dxrive-x
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <CarModel />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto h-screen flex flex-col pt-24 md:pt-28 pb-8 px-6 md:px-12 pointer-events-none">

        {/* Header Text */}
        <div className="flex flex-col md:flex-row justify-between rounded-2xl w-full gap-0 md:gap-6">
          <div className="space-y-4 pointer-events-auto">
            <h1 className="font-asah backdrop-blur-[2px] text-5xl md:text-6xl text-white tracking-tight leading-[0.9]">
              The Legend of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] via-[#FFE55C] to-white px-2.5">
                Longtail
              </span>
            </h1>

            <p className="backdrop-blur-[2px] text-gray-400 text-sm font-light leading-relaxed border-l border-[#FFD600]/50 pl-4 max-w-xs">
              Stop stressing about logistics. We align your business engine with the
              right experts to launch campaigns at race pace.
            </p>
          </div>

          <div className="space-y-4 pointer-events-auto pt-3 md:pt-0">
            <p className="backdrop-blur-[2px] text-gray-400 text-sm font-light leading-relaxed border-l border-[#FFD600]/50 pl-4 max-w-xs text-right md:text-left">
              The ultimate evolution of the F1 GTR. Featuring the iconic
              yellow and green livery, the #11 represents the pinnacle of
              naturally aspirated V12 dominance.
            </p>
          </div>
        </div>

        <div className="mt-auto pointer-events-auto w-full z-30">
          <div className="relative w-full bg-[#080808]/80 backdrop-blur-xl border-t border-white/10 overflow-hidden md:rounded-xl">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD600]/50 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-12">
              {stats.map(({ Icon, value, border, corner }, i) => (
                <div key={i} className={`col-span-1 md:col-span-3 px-4 flex items-center group cursor-default ${border} border-white/5 relative`}>
                  {corner}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#FFD600] group-hover:bg-[#FFD600]/10 transition-all">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#FFD600]" />
                    </div>
                    <span className="font-asah text-3xl md:text-4xl text-white leading-none">{value}</span>
                  </div>
                </div>
              ))}

              <div className="hidden md:flex col-span-6 items-center justify-between p-6 px-8 bg-white/[0.02]">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Wifi className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-mono text-[#FFD600]">12ms</span>
                  </div>
                  <div className="w-px h-6 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-mono text-white">Active</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {socials.map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      className="group p-2 rounded-md bg-white/5 border border-white/10 hover:border-[#FFD600] hover:bg-[#FFD600]/10 transition-all"
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#FFD600]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

function Model() {
  const { scene } = useGLTF("/mclaren_f1_gtr_longtail_ams2.glb");

  // Default state (Desktop)
  const [modelProps, setModelProps] = useState({
    scale: 122.5,
    position: [0.35, -0.9, 0],
    rotation: [0.05, -1.2, 0],
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        // MOBILE (<768px)
        setModelProps({
          scale: 50,
          position: [0, -1.25, 0],
          rotation: [0.1, -1.5, 0],
        });
      } else if (width < 1024) {
        // DESKTOP (>1024px)
        setModelProps({
          scale: 90,
          position: [0.2, -0.7, 0],
          rotation: [0.05, -0.45, 0],
        });
      } else {
        // DESKTOP (>1024px) 
        setModelProps({
          scale: 122.5,
          position: [0.35, -0.9, 0],
          rotation: [0.05, -1.2, 0],
        });
      }
    };

    // Add listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <primitive
      object={scene}
      scale={modelProps.scale}
      rotation={modelProps.rotation}
      // @ts-ignore
      position={modelProps.position}
    />
  );
}

const CarModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 35 }}
      className="w-full h-full pointer-events-none"
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
        <Model />
        <ContactShadows position={[2.5, -1.3, 0]} resolution={1024} scale={12} blur={2} opacity={0.6} far={10} color="#000000" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};