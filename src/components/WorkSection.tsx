import { SectionHeader } from './SectionHeader';

const SYSTEMS = [
  {
    id: "v1.0",
    title: "Scalable Core",
    type: "Cloud Architecture",
    metric: "Designed for sustainable growth, high availability, and long-term technical maintainability."
  },
  {
    id: "Live",
    title: "Controlled Latency",
    type: "Operational Telemetry",
    metric: "Comprehensive visibility across system performance, security, and critical user events."
  },
  {
    id: "Stable",
    title: "Enterprise Workflows",
    type: "Intuitive Interfaces",
    metric: "UIs architected to minimize friction, accelerate decision-making, and boost productivity."
  },
  {
    id: "Secure",
    title: "Structured Data",
    type: "AI-Ready Systems",
    metric: "Optimized data pipelines prepared for automation, advanced analytics, and future scaling."
  }
];

export function WorkSection() {
  return (
    <section id="work" className="py-[64px] pb-[128px] px-6 md:px-[24px] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Infrastructure" title="High-performance foundational architecture.">
          Robust systems operate seamlessly in the background. Our infrastructure is engineered for rapid response times, clean scalability, and continuous recovery, ensuring your business operations never halt.
        </SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {SYSTEMS.map((system) => (
            <div key={system.id} className="relative flex flex-col p-[24px] border border-[#212327] bg-[#191919] rounded-[8px] overflow-hidden">
              <div className="flex items-center mb-[24px]">
                <span className="font-mono font-normal text-[12px] tracking-[1.2px] text-white px-[8px] py-[4px] border border-[#212327] bg-[#0a0a0a] rounded-full uppercase mr-[12px]">{system.id}</span>
                <span className="text-[18px] leading-[24px] font-normal text-white">{system.title} <span className="text-[#7d8187]">|</span> {system.type}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] leading-[24px] font-normal text-[#dadbdf]">{system.metric}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[48px] flex justify-start">
          <a href="#/work" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
            Review Architecture Details
          </a>
        </div>
      </div>
    </section>
  );
}
