import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ContactCTA } from '../components/ContactCTA';

const METHODOLOGY = [
  {
    step: "01",
    title: "Diagnose Operating Problem",
    text: "Before writing a single line of code, we map the institutional domain constraints, the data velocity requirements, and the exact fail-states of current processes."
  },
  {
    step: "02",
    title: "Map System Logic",
    text: "We define precise state machines, data flow schemas, and edge-case behaviors. The architecture is locked before interface design begins."
  },
  {
    step: "03",
    title: "Design Interface Architecture",
    text: "We build high-density, low-latency visual surfaces. No decorative animations. No unnecessary whitespace. Every pixel carries data."
  },
  {
    step: "04",
    title: "Build Product Layer",
    text: "Execution happens in strictly typed TypeScript ecosystems (React/Next.js/Node), optimizing for zero-layout-shift and optimal bundle sizing."
  },
  {
    step: "05",
    title: "Refine",
    text: "We test under simulated network degradation, measure render FPS, and optimize until the system feels impossibly fast and obviously correct."
  }
];

export function ApproachPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        eyebrow="Docs" 
        title="The compute doctrine." 
        description="We believe that software must be predictable. We reject the 'move fast and break things' culture when operating in mission-critical environments. We move correctly, and we build things that do not break."
      />
      
      <section className="py-24 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-4xl tracking-[-0.03em] font-semibold text-white sticky top-32">Methodology</h3>
          </div>
          <div className="lg:w-2/3 space-y-16 lg:space-y-24">
            {METHODOLOGY.map((m) => (
              <div key={m.step} className="flex gap-8">
                <div className="font-mono text-lg text-[#a1a1a1] pt-1">{m.step}</div>
                <div>
                  <h4 className="text-[32px] text-white mb-4 tracking-[-0.03em] font-semibold">{m.title}</h4>
                  <p className="text-[16px] text-[#a1a1a1] font-normal leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h3 className="text-4xl tracking-[-0.03em] font-semibold text-white sticky top-32">Decision Framework</h3>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-white/10 rounded-xl bg-[#171717] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
              <h4 className="font-mono text-[12px] text-[#a1a1a1] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#50e3c2] rounded-full" />
                What We Accept
              </h4>
              <ul className="space-y-4 text-[#a1a1a1] font-normal list-disc list-inside">
                <li>High-complexity data panels</li>
                <li>Real-time telemetry systems</li>
                <li>Enterprise infrastructure migrations</li>
                <li>Strictly typed, decoupled environments</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-xl bg-[#171717] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
              <h4 className="font-mono text-[12px] text-[#a1a1a1] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff0080] rounded-full" />
                What We Reject
              </h4>
              <ul className="space-y-4 text-[#a1a1a1] font-normal list-disc list-inside">
                <li>Marketing micro-sites</li>
                <li>Unscoped "agile" experiments</li>
                <li>Bloated monolithic rewrites</li>
                <li>Frameworks chosen for hype over stability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </motion.div>
  );
}
