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
    <section id="work" className="py-[64px] pb-[128px] px-6 md:px-[24px] bg-[#0a0a0a] border-t border-[#212327]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Infrastructure" title="Deployments that power mission-critical operations." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {SYSTEMS.map((system) => (
            <div key={system.id} className="relative flex flex-col p-[24px] border border-[#212327] bg-[#191919] rounded-[8px] overflow-hidden">
              <div className="flex items-center justify-between mb-[32px]">
                <span className="font-mono font-normal text-[12px] tracking-[1.2px] text-[#dadbdf] uppercase">{system.id}</span>
                <span className="font-mono font-normal text-[12px] tracking-[1.2px] text-white px-[8px] py-[4px] border border-[#212327] bg-[#0a0a0a] rounded-full uppercase">{system.metric}</span>
              </div>
              <div className="flex flex-col mt-auto">
                <h3 className="text-[24px] leading-[32px] font-normal tracking-[-0.6px] text-white mb-[8px]">{system.title}</h3>
                <span className="text-[16px] leading-[24px] font-normal text-[#dadbdf]">{system.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[48px] flex justify-start">
          <a href="#/work" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
