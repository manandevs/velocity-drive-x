import CarModel from "./CarModel";
import Button from "./shared/Button";
import Container from "./shared/Container";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-asah text-[45vw] leading-none text-white opacity-[0.03] tracking-widest translate-y-10">
          VDX
        </span>
      </div>

      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <CarModel />
      </div>

      <Container className="relative z-20 pt-24 md:pt-32 pointer-events-none">
        <div className=" space-y-6 pointer-events-auto">
          <div className="inline-block">
            <Button variant="tertiary" />
          </div>

          <h1 className="font-asah text-white text-6xl md:text-8xl tracking-tight leading-[0.95]">
            Growing your business Online Shouldn’t feel like a Puzzle
          </h1>

          <p className="max-w-xl text-gray-400 font-urbanist text-lg md:text-xl font-light leading-relaxed">
            You don’t need to stress about what services you need, how to find the
            right experts, or when to launch campaigns.
          </p>

          <div className="flex items-center gap-4 pt-6">
            <Button variant="primary" />
            <Button variant="secondary" />
          </div>
        </div>
      </Container>

      <Container className="relative z-20 pb-10 md:pb-16 pointer-events-none">
        <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/10 pt-6">
          
          <div className="flex gap-12 pointer-events-auto">
            <div>
              <h3 className="text-5xl md:text-6xl font-asah text-white leading-none">
                100<span className="text-2xl text-brand-orange">%</span>
              </h3>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2 font-urbanist font-semibold">
                Success Rate
              </p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-asah text-white leading-none">
                24<span className="text-2xl text-brand-orange">/7</span>
              </h3>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2 font-urbanist font-semibold">
                Live Support
              </p>
            </div>
          </div>

          <div className="hidden md:block text-right">
             <h4 className="text-white font-asah text-3xl tracking-widest">UDX-GT</h4>
             <p className="text-gray-500 text-xs uppercase tracking-wider">Premium Edition</p>
          </div>
        </div>
      </Container>

      <div className="bg-[#7558FC] w-[40vw] h-[40vw] blur-[250px] rounded-full absolute top-[-20%] left-[-10%] opacity-20 z-0 pointer-events-none mix-blend-screen" />
      <div className="bg-[#9CE015] w-[35vw] h-[35vw] blur-[300px] rounded-full absolute bottom-[-10%] right-[-10%] opacity-15 z-0 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};