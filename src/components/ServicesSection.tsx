import { SectionHeader } from './SectionHeader';

const SERVICES = [
  {
    title: "Systems Architecture",
    description: "Cloud-native infrastructure and resilient microservices designed for massive concurrent loads."
  },
  {
    title: "Interface Engineering",
    description: "High-performance React/Next.js frontends built with an extreme focus on rendering speed and memory management."
  },
  {
    title: "Data Visualization",
    description: "Custom renderers for complex institutional datasets and telemetry streams."
  },
  {
    title: "Platform Modernization",
    description: "Phased migrations from legacy enterprise monoliths to decoupled, strictly typed ecosystems."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-[64px] pb-[128px] px-6 md:px-[24px] border-t border-[#212327] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Templates" title="Surgical intervention across the stack." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {SERVICES.map((service, i) => (
            <div key={i} className="flex flex-col bg-[#191919] p-[24px] rounded-[8px] border border-[#212327]">
              <h3 className="text-[32px] leading-[36px] font-normal tracking-[-0.6px] text-white mb-[16px]">{service.title}</h3>
              <p className="text-[16px] leading-[24px] text-[#dadbdf] font-normal">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-[48px] flex justify-start">
          <a href="#/services" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
            View Templates
          </a>
        </div>
      </div>
    </section>
  );
}
