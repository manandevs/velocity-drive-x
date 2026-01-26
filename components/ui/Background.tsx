export default function Background() {
  return (
    <>
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
    </>
  );
}