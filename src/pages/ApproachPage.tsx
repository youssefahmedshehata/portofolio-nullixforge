import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ContactCTA } from '../components/ContactCTA';

const PRINCIPLES = [
  {
    step: "01",
    title: "Baseline Initialization",
    text: "Before development begins, we eliminate operational assumptions, pre-existing structural noise, and inherited design patterns. Every architectural choice must be justified."
  },
  {
    step: "02",
    title: "Architectural Primacy",
    text: "An interface is only effective when the underlying system logic is structurally sound. We engineer the foundation before rendering the surface."
  },
  {
    step: "03",
    title: "Operational Clarity",
    text: "Users must experience total operational control without encountering friction from the underlying technical complexity."
  },
  {
    step: "04",
    title: "Frictionless Performance",
    text: "Optimal systems demonstrate their capability through unwavering stability, latency reduction, and predictable execution—not through lengthy explanations."
  }
];

const LIFECYCLE = [
  {
    phase: "Phase 1",
    title: "Discovery & Reduction",
    text: "Identifying and eliminating redundant processes, assumptions, and potential technical debt."
  },
  {
    phase: "Phase 2",
    title: "Architectural Mapping",
    text: "Defining the exact structural, logic, and data requirements necessary for optimal performance."
  },
  {
    phase: "Phase 3",
    title: "Core Infrastructure",
    text: "Developing the robust backend flows, data pipelines, and scalable structural logic."
  },
  {
    phase: "Phase 4",
    title: "Interface Rendering",
    text: "Shaping the user experience layer around precise visual hierarchy, accessibility, and operational clarity."
  },
  {
    phase: "Phase 5",
    title: "Continuous Deployment",
    text: "Stabilizing the platform for live operation, scalable growth, and long-term enterprise maintainability."
  }
];

export function ApproachPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        eyebrow="Docs" 
        title="Methodology / Foundational Logic" 
        description="The differentiator is not the interface. It is the architectural rigor beneath it. NullixForge initiates every project from a fundamental baseline. We bypass pre-packaged templates to eliminate structural noise, define the core architecture, and engineer interfaces strictly around operational necessities."
      />
      
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-4xl tracking-[-0.03em] font-semibold text-white sticky top-32">Core Principles</h3>
            <p className="mt-4 text-[#7d8187] font-normal leading-relaxed">How we approach system design.</p>
          </div>
          <div className="lg:w-2/3 space-y-16 lg:space-y-24">
            {PRINCIPLES.map((p) => (
              <div key={p.step} className="flex gap-8">
                <div className="font-mono text-lg text-[#7d8187] pt-1">{p.step}.</div>
                <div>
                  <h4 className="text-[32px] text-white mb-4 tracking-[-0.03em] font-semibold">{p.title}</h4>
                  <p className="text-[16px] text-[#7d8187] font-normal leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-4xl tracking-[-0.03em] font-semibold text-white sticky top-32">The Engineering Lifecycle</h3>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {LIFECYCLE.map((l) => (
              <div key={l.phase} className="p-8 border border-[#212327] rounded-xl bg-[#0a0a0a] flex flex-col gap-4">
                <div className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider">{l.phase}</div>
                <h4 className="text-xl font-semibold text-white tracking-tight">{l.title}</h4>
                <p className="text-[#7d8187] text-[15px] font-normal leading-relaxed">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-4xl tracking-[-0.03em] font-semibold text-white sticky top-32">
               Minimized Complexity.<br />Maximized Control.
            </h3>
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl text-[#dadbdf] font-normal leading-relaxed mb-12 max-w-3xl">
              The interface is merely the interaction layer. True engineering lies in determining critical functions, abstracting technical complexity, and ensuring the infrastructure operates seamlessly and silently beneath the user's perception.
            </p>
            
            <h4 className="font-mono text-[14px] text-[#7d8187] uppercase tracking-wider mb-6">Our Engineering Standards</h4>
            <div className="bg-[#191919] border border-[#212327] rounded-xl p-8 md:p-12">
              <ul className="space-y-6">
                {[
                  "Zero reliance on generalized templates.",
                  "Zero decorative or non-functional complexity.",
                  "Zero fragmented user journeys.",
                  "Zero extraneous features masking as utility.",
                  "Zero UI rendering without underlying systemic purpose.",
                  "Zero unoptimized or arbitrary visual motion."
                ].map((standard, i) => (
                  <li key={i} className="flex items-start gap-4 text-white text-lg">
                    <span className="font-mono text-[#7d8187] mt-1 text-sm bg-black/50 px-2 py-0.5 rounded border border-[#212327]">Zero</span>
                    <span className="font-normal text-[#dadbdf]">{standard.replace('Zero ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </motion.div>
  );
}
