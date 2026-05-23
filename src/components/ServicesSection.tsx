import { SectionHeader } from './SectionHeader';

const SERVICES = [
  {
    title: "Web Platforms",
    description: "High-performance web applications, enterprise dashboards, and portals built on clean architecture, precise interfaces, and scalable foundations."
  },
  {
    title: "Custom Software Engineering",
    description: "Tailored applications designed around your operational workflows—fast, maintainable, and built to eliminate friction from daily operations."
  },
  {
    title: "Enterprise AI Solutions",
    description: "Business-ready AI agents, automation pipelines, and internal copilots engineered to drive efficiency and actionable intelligence."
  },
  {
    title: "Legacy Modernization",
    description: "We refactor outdated systems into modern, modular, and typed ecosystems without disrupting the ongoing business processes that depend on them."
  },
  {
    title: "Frontend Architecture",
    description: "Next.js and React interfaces developed with a strict focus on rendering performance, visual hierarchy, accessibility, and interaction stability."
  },
  {
    title: "Data & Telemetry Systems",
    description: "Custom monitoring layers and data visualization tools that transform complex operational signals into clear, actionable insights for decision-makers."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-[64px] pb-[128px] px-6 md:px-[24px] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Capabilities" title="Comprehensive engineering across the digital stack." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {SERVICES.map((service, i) => (
            <div key={i} className="flex flex-col bg-[#191919] p-[24px] rounded-[8px] border border-[#212327]">
              <h3 className="text-[20px] leading-[28px] tracking-[-0.4px] font-normal text-white mb-[12px]">{service.title}</h3>
              <p className="text-[14px] leading-[22px] text-[#dadbdf] font-normal">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-[48px] flex justify-start">
          <a href="#/services" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
            View All Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
