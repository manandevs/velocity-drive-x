export default function HeroContent() {
  return (
    <div className="flex flex-col md:flex-row justify-between rounded-2xl w-full gap-0 md:gap-6 z-20 pointer-events-none">
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
          The ultimate evolution of the F1 GTR. Featuring the iconic yellow and
          green livery, the #11 represents the pinnacle of naturally aspirated
          V12 dominance.
        </p>
      </div>
    </div>
  );
}