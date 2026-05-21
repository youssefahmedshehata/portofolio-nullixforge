import { SectionHeader } from './SectionHeader';

const SYSTEMS = [
  {
    id: "v3.2.0",
    title: "Global Edge Network",
    type: "Compute Infrastructure",
    metric: "400k+ TPS"
  },
  {
    id: "v1.0.5",
    title: "Real-time Telemetry",
    type: "Analytics Pipeline",
    metric: "12ms Latency"
  },
  {
    id: "v2.1.4",
    title: "Institutional Ledger",
    type: "Financial Data Grid",
    metric: "Zero Dropped Packets"
  }
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 relative font-sans">
      {/* Natural green gradient blending seamlessly with previous section's red/pink */}
      <div className="absolute -top-[50%] bottom-0 left-0 right-0 z-0 pointer-events-none flex justify-center items-center opacity-80 mix-blend-screen -translate-y-[10%]">
        <div className="absolute w-[1200px] h-[800px] bg-gradient-to-b from-red-600/50 via-emerald-600/50 to-green-600/40 blur-[180px] rounded-full mix-blend-screen" />
        <div className="absolute w-[900px] h-[600px] bg-gradient-to-tr from-pink-500/40 via-teal-500/60 to-lime-500/50 blur-[160px] rounded-full mix-blend-screen opacity-90 translate-y-[10%]" />
        <div className="absolute w-[600px] h-[500px] bg-gradient-to-bl from-emerald-400/50 via-green-400/60 to-teal-400/50 blur-[140px] rounded-full mix-blend-screen opacity-80 translate-y-[20%]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader eyebrow="Infrastructure" title="Deployments that power mission-critical operations." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {SYSTEMS.map((system) => (
            <div key={system.id} className="relative flex flex-col p-8 border border-white/10 bg-[#0a120e]/80 backdrop-blur-3xl rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] hover:border-emerald-500/40 transition-colors duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono font-normal text-[13px] text-neutral-500">{system.id}</span>
                <span className="font-mono font-medium text-[12px] text-white px-3 py-1 border border-white/10 bg-white/5 rounded-full">{system.metric}</span>
              </div>
              <div className="flex flex-col mt-auto">
                <h3 className="font-sans text-[24px] font-semibold tracking-[-0.03em] text-white mb-2">{system.title}</h3>
                <span className="font-sans font-normal text-[16px] text-neutral-400">{system.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-start">
          <a href="#/work" className="font-sans inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-[14px] font-medium hover:bg-neutral-200 transition-colors">
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
