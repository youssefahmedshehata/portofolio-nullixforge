import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ContactCTA } from '../components/ContactCTA';

const SERVICES_DETAILED = [
  {
    step: "01",
    category: "Web Systems",
    context: "Deployed when standard, consumer-grade frameworks fail to sustain enterprise scale and traffic density.",
    deliverable: "Custom React and Next.js architectures heavily optimized for memory efficiency, rendering speed, and strict bundle density.",
    output: "A highly resilient frontend-backend matrix capable of seamless Server-Side Rendering (SSR), Client-Side Rendering (CSR), and targeted static generation under peak load."
  },
  {
    step: "02",
    category: "Product Interfaces",
    context: "Initiated when expert operators and internal teams are bottlenecked by chaotic, unoptimized, or legacy UI environments.",
    deliverable: "High-density data panels, precision-mapped keyboard navigation paths, and extremely tight feedback loops built into the interface layer.",
    output: "A digital environment that functions as a high-performance industrial tool, eliminating cognitive friction and accelerating decision-making."
  },
  {
    step: "03",
    category: "AI-Enabled Workflows",
    context: "Required when Large Language Models (LLMs) must be integrated into business logic as deterministic, stable utilities—not experimental features.",
    deliverable: "Hardened prompt pipelines, rigorous data validation layers, and custom model orchestration systems designed for enterprise security.",
    output: "Predictable, auditable, and secure AI agents perfectly scoped to operate within strict institutional constraints and compliance standards."
  },
  {
    step: "04",
    category: "Platform Modernization",
    context: "Executed when legacy monolithic systems accumulate critical technical debt, threatening operational security and business agility.",
    deliverable: "Phased architectural migration strategies, Strangler Fig API patterns, and methodical, component-by-component rewrites.",
    output: "A modernized, decoupled, and strictly typed ecosystem achieved with zero operational downtime and validated by strict parity testing."
  }
];

export function ServicesPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        eyebrow="04 / CAPABILITIES" 
        title="Surgical Intervention." 
        description="We do not bill for generalized effort; we engineer precision outcomes. Every engagement with NullixForge is strictly defined by architectural deliverables, designed to solve specific operational bottlenecks with absolute certainty."
      />
      
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl tracking-[-0.03em] font-semibold text-white mb-20">The Capability Matrix</h3>
          <div className="space-y-24">
            {SERVICES_DETAILED.map((svc) => (
              <div key={svc.category} className="border-t border-[#212327] pt-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
                <div className="lg:w-1/3 flex gap-6">
                  <span className="font-mono text-lg text-[#7d8187] pt-1">{svc.step}.</span>
                  <h3 className="text-[32px] text-white tracking-[-0.03em] font-semibold mb-4">{svc.category}</h3>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider mb-4">Context</h4>
                    <p className="text-[16px] text-[#7d8187] font-normal leading-relaxed">{svc.context}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider mb-4">Deliverable</h4>
                    <p className="text-[16px] text-[#7d8187] font-normal leading-relaxed">{svc.deliverable}</p>
                  </div>
                  <div className="md:col-span-2 pt-8 border-t border-[#212327]">
                    <h4 className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider mb-4">Expected Output</h4>
                    <p className="text-[16px] text-white font-normal leading-relaxed">{svc.output}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}
