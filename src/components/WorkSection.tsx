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
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-black/5 relative font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader eyebrow="Infrastructure" title="Deployments that power mission-critical operations." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {SYSTEMS.map((system) => (
            <div key={system.id} className="relative flex flex-col p-8 border border-black/5 bg-[#fafafa]/80 backdrop-blur-3xl rounded-2xl hover:border-emerald-500/40 transition-colors duration-300 cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono font-normal text-[13px] text-neutral-500">{system.id}</span>
                <span className="font-mono font-medium text-[12px] text-[#171717] px-3 py-1 border border-black/5 bg-black/5 rounded-full">{system.metric}</span>
              </div>
              <div className="flex flex-col mt-auto">
                <h3 className="font-sans text-[24px] font-semibold tracking-[-0.03em] text-[#171717] mb-2">{system.title}</h3>
                <span className="font-sans font-normal text-[16px] text-neutral-500">{system.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-start">
          <a href="#/work" className="font-sans inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171717] text-white text-[14px] font-medium hover:bg-neutral-800 transition-colors">
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
