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
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 border-t border-black/5 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Templates" title="Surgical intervention across the stack." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {SERVICES.map((service, i) => (
            <div key={i} className="relative flex flex-col justify-between overflow-hidden bg-white p-8 md:p-12 rounded-2xl border border-black/5 hover:border-black/20 transition-colors cursor-pointer">
              <h3 className="text-[24px] md:text-[32px] font-semibold tracking-[-0.03em] text-[#171717] mb-6">{service.title}</h3>
              <p className="text-[16px] text-neutral-500 font-normal leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-start">
          <a href="#/services" className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#171717] text-white text-[14px] font-medium hover:bg-neutral-800 transition-colors">
            View Templates
          </a>
        </div>
      </div>
    </section>
  );
}
