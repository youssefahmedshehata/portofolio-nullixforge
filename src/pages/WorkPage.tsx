import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ContactCTA } from '../components/ContactCTA';

const ALL_SYSTEMS = [
  {
    id: "v3.2.0",
    title: "Global Supply Routing",
    type: "Logistics Dashboard",
    problem: "Legacy monolithic architecture causing 40s load times and frequent deadlocks during peak routing periods.",
    solution: "Decoupled edge-native routing engine with optimistic pre-fetching and binary protocol streaming over WebSockets.",
    metrics: ["400k+ TPS", "12ms p99 latency", "100% uptime"]
  },
  {
    id: "v1.0.5",
    title: "Quantum State Monitor",
    type: "Real-time Telemetry",
    problem: "Existing vendor solution failed to render 10M+ data points without browser crash.",
    solution: "Custom WebGL rendering pipeline integrated with WebWorkers, bypassing the React reconciliation cycle for raw telemetry.",
    metrics: ["144 FPS", "10M+ Points", "Null GC drops"]
  },
  {
    id: "v2.1.4",
    title: "Institutional Ledger",
    type: "Financial Data Grid",
    problem: "Auditors required real-time consensus tracing across globally distributed micro-ledgers.",
    solution: "Immutable event-sourced architecture with a strict monotonic UI state ensuring perfect auditability.",
    metrics: ["Zero Dropped Pkts", "Cryptographic UX"]
  },
  {
    id: "v4.0.0",
    title: "Defense Compliance Portal",
    type: "Access Management",
    problem: "Fragmented permission models across 12 agencies causing audit failures.",
    solution: "Unified Zero-Trust interface enforcing strict cryptographic signatures before component hydration.",
    metrics: ["FedRAMP High", "Multi-factor gating"]
  }
];

export function WorkPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        eyebrow="Showcase" 
        title="Deployed Architecture." 
        description="We build real systems for complex problems. Below is a selection of recent institutional deployments. We prefer raw utility over decorative case studies."
      />
      
      <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto space-y-12">
          {ALL_SYSTEMS.map((system) => (
            <div key={system.id} className="border border-black/5 bg-white rounded-xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative overflow-hidden">
              <div className="lg:w-1/3 flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] text-neutral-500">{system.id}</span>
                  <span className="font-mono text-[12px] text-[#171717] px-3 py-1 border border-black/5 bg-black/5 rounded-full">{system.type}</span>
                </div>
                <h3 className="text-3xl lg:text-[40px] leading-tight font-semibold tracking-[-0.03em] text-[#171717]">{system.title}</h3>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-8 relative z-10">
                <div>
                  <h4 className="font-mono text-[12px] text-neutral-500 mb-3">Diagnostic</h4>
                  <p className="text-[16px] text-neutral-500 font-normal leading-relaxed">{system.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[12px] text-neutral-500 mb-3">Implementation</h4>
                  <p className="text-[16px] text-neutral-500 font-normal leading-relaxed">{system.solution}</p>
                </div>
                <div className="pt-6 border-t border-black/5 flex flex-wrap gap-6">
                  {system.metrics.map(m => (
                    <div key={m} className="flex flex-col gap-1">
                       <span className="font-mono text-[12px] text-neutral-500">Metric</span>
                       <span className="font-mono text-[14px] text-[#171717]">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-black/5 bg-[#fafafa]">
         <div className="max-w-7xl mx-auto">
            <h3 className="text-[32px] tracking-[-0.03em] font-semibold text-[#171717] mb-8">Work Principles</h3>
            <ul className="text-neutral-500 font-normal leading-relaxed space-y-4 list-disc list-inside ml-4 max-w-3xl">
              <li>We only showcase systems that solve infrastructural or domain-specific challenges.</li>
              <li>We do not build generic landing pages or purely aesthetic marketing sites.</li>
              <li>Every deployment must meet our standard for absolute reliability and precise rendering.</li>
            </ul>
         </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}
