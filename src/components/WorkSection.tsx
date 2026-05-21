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
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-black border-t border-white/10 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Infrastructure" title="Deployments that power mission-critical operations." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {SYSTEMS.map((system) => (
            <div key={system.id} className="relative flex flex-col p-8 border border-white/10 bg-[#171717] rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] hover:border-white/20 transition-colors cursor-pointer overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[13px] text-neutral-500">{system.id}</span>
                <span className="font-mono text-[12px] text-white px-3 py-1 border border-white/10 bg-white/5 rounded-full">{system.metric}</span>
              </div>
              <div className="flex flex-col mt-auto">
                <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white mb-2">{system.title}</h3>
                <span className="text-[16px] text-neutral-400">{system.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-start">
          <a href="#/work" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-[14px] font-medium hover:bg-neutral-200 transition-colors">
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
