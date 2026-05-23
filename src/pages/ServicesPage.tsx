import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ContactCTA } from '../components/ContactCTA';

const SERVICES_DETAILED = [
  {
    category: "Web Systems",
    context: "When consumer-grade frameworks fail to meet scale.",
    deliverable: "Custom React/Node architectures optimized for memory efficiency and bundle density.",
    output: "A resilient frontend/backend matrix capable of SSR, CSR, and targeted static generation."
  },
  {
    category: "Product Interfaces",
    context: "When your expert operators are bottlenecked by chaotic UI.",
    deliverable: "High-density data panels, optimized keyboard navigation paths, and extremely tight feedback loops.",
    output: "An interface that functions like an industrial tool rather than a consumer toy."
  },
  {
    category: "AI-Enabled Workflows",
    context: "When LLMs need to be integrated as deterministic utilities, not magic wands.",
    deliverable: "Hardened prompt pipelines, validation layers, and custom model orchestration systems.",
    output: "Predictable, auditable AI agents perfectly scoped to institutional constraints."
  },
  {
    category: "Platform Modernization",
    context: "When legacy monolithic systems threaten operational security.",
    deliverable: "Phased migration strategies, strangler-fig API patterns, and component-by-component rewrites.",
    output: "A modernized stack achieved with zero downtime and strict parity validation."
  }
];

export function ServicesPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        eyebrow="04 / Services" 
        title="Surgical Intervention." 
        description="We do not offer generic development hours. We offer precision outcomes. Our engagements are structured around clear architectural deliverables."
      />
      
      <section className="py-24 px-6 md:px-12 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-24">
          {SERVICES_DETAILED.map((svc) => (
            <div key={svc.category} className="border-t border-black/5 pt-12 flex flex-col md:flex-row gap-12 lg:gap-24">
              <div className="md:w-1/3">
                <h3 className="text-4xl text-[#171717] tracking-[-0.02em] font-medium mb-4">{svc.category}</h3>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">Context</h4>
                  <p className="text-neutral-500 leading-relaxed text-sm">{svc.context}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">Deliverable</h4>
                  <p className="text-neutral-500 leading-relaxed text-sm">{svc.deliverable}</p>
                </div>
                <div className="md:col-span-2 pt-4 border-t border-black/5">
                  <h4 className="font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">Expected Output</h4>
                  <p className="text-[#171717] text-base leading-relaxed tracking-tight">{svc.output}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}
