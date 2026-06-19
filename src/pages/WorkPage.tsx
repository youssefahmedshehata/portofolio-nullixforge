import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ContactCTA } from '../components/ContactCTA';

const ALL_SYSTEMS = [
  {
    category: "Enterprise AI Architecture",
    title: "Operational Risk Triage Engine",
    status: "Deployed System / Featured Case Study",
    problem: "Enterprise AI models frequently achieve 90%+ lab accuracy but completely collapse in production. The vulnerability lies in chaotic, real-world environments—plagued by extreme class imbalances (1% critical risks) and massive data voids (36% missingness)—where traditional predictive models create fatal blind spots, false alarms, and severe operational friction.",
    process: "We architected a resilient, zero-leakage AI Pipeline. Rather than artificially imputing missing data, we engineered \"voids\" into golden predictive signals. Through Surgical Feature Engineering, Strict QA Gates, and SHAP-based diagnostics, we isolated catastrophic risks, tamed outlier anomalies, and completely eradicated administrative noise from the decision-making process.",
    result: "Raw, fragmented data is now molded into complete operational certainty. The system transcends traditional prediction to function as a hyper-sensitive strategic radar—filtering out 85% of routine noise to surgically pinpoint rare, critical threats. Decision-makers are empowered with transparent, production-proof intelligence.",
    tags: ["#AIArchitecture", "#RiskTriage", "#ZeroLeakage", "#OperationalCertainty"],
    cta: "View Case Study →",
    link: "#/work/Operational-Risk-Triage-Engine"
  },
  {
    category: "Customer Experience Analytics",
    title: "Arabic Voice-of-Customer Analyzer",
    status: "Diagnostic Report / POC",
    problem: "E-commerce management struggled with fragmented Arabic customer feedback across app reviews, support tickets, and WhatsApp. Manual reading of thousands of comments to extract problems was impossible, leading to guesswork regarding customer churn and declining ratings.",
    process: "We architected an Arabic-first data pipeline to analyze batches of raw text from CSV and Excel exports. The system performs dialect-aware Arabic text normalization, aspect-based sentiment classification, intent detection, and topic discovery to map complaints to specific operational teams.",
    result: "Businesses receive an executive dashboard and a diagnostic report detailing top complaint themes, sentiment distribution, and specific root causes of issues. Management can now make fast, data-driven decisions to resolve pinpointed issues (e.g., shipping delays, payment failures) and save wasted marketing budgets.",
    tags: ["#ArabicNLP", "#VoiceOfCustomer", "#ECommerceIntelligence", "#OperationalInsights"],
    cta: "View Case Study →",
    link: "#/work/arabic-voice-of-customer-analyzer"
  },
  {
    category: "Healthcare Infrastructure",
    title: "CareGrid Clinic OS",
    status: "Deployed System / Featured Case Study",
    problem: "Clinical operations suffered from fragmentation across scheduling, patient records, billing, queue management, and staff workflows, leading to operational friction and compromised data integrity.",
    process: "We architected a unified operational layer integrating patient identity management, appointment lifecycles, role-based access controls (RBAC), secure audit ledgers, and automated queue orchestration.",
    result: "Multi-location clinics now operate within a single, streamlined environment. Every action is highly contextualized, patient histories are centralized, and staff access is strictly scoped to ensure security and focus.",
    tags: ["#HealthcareOS", "#PatientLifecycle", "#AuditLedger", "#OperationalIntelligence"],
    cta: "View Case Study →"
  },
  {
    category: "Commerce Infrastructure",
    title: "LedgerAxis Commerce Core",
    status: "System Architecture / Internal Framework",
    problem: "High-volume transactions lacked a centralized source of truth, resulting in disparate data silos across inventory tracking, invoicing, payment reconciliation, and customer management.",
    process: "We engineered a centralized commerce core to synchronize inventory telemetry, invoice lineage, payment states, order orchestration, and audit-backed operational records.",
    result: "A unified business layer ensuring complete traceability for every order, transparent payment reconciliation, and real-time inventory visibility without introducing operational overhead.",
    tags: ["#CommerceCore", "#InventoryTelemetry", "#PaymentReconciliation", "#OperationalAudit"],
    cta: "View Technical Brief →"
  },
  {
    category: "Enterprise AI Systems",
    title: "NerveOps AI Control Plane",
    status: "Advanced R&D / System Architecture",
    problem: "Enterprise data was abundant but disjointed. Critical signals and operational reports existed, yet decision-making relied heavily on inefficient, manual data analysis.",
    process: "We designed an AI-driven control plane to ingest operational telemetry, classify critical signals, detect anomalies, synthesize contextual data, and transform raw metrics into actionable intelligence.",
    result: "Operational teams are no longer burdened by data processing. The system autonomously surfaces high-priority insights, provides context, and recommends precise next steps for decision-makers.",
    tags: ["#AIInfrastructure", "#SignalIntelligence", "#DecisionSupport", "#AnomalyDetection"],
    cta: "View Architecture Brief →"
  },
  {
    category: "Security & Identity Management",
    title: "AccessForge Identity Layer",
    status: "Scalable Module / Product Architecture",
    problem: "Critical infrastructure becomes vulnerable when patients, administrators, and automated devices share overlapping authentication models. Ambiguous access structures create systemic security risks.",
    process: "We engineered a robust identity management layer focused on strict role separation, session integrity, cryptographic authentication, granular access controls, and comprehensive audit logging.",
    result: "Secure, zero-trust entry points ensure every user and device operates within the correct scope, maintaining strict traceability across all sensitive system interactions.",
    tags: ["#IdentityManagement", "#ZeroTrust", "#SessionIntegrity", "#SecurityAudit"],
    cta: "View Security Brief →"
  },
  {
    category: "Operational Flow Systems",
    title: "QueueSignal Flow Engine",
    status: "Deployed Module / System Architecture",
    problem: "Manual coordination of waiting rooms, variable appointment slots, and real-time service timing resulted in operational bottlenecks and a degraded user experience.",
    process: "We developed an automated flow engine to orchestrate slot logic, dynamic queuing, status transitions, and real-time notifications for seamless service timing and resource allocation.",
    result: "Operational movement becomes highly visible and predictable. Users receive transparent updates, staff workflows are optimized, and the system seamlessly absorbs scheduling complexities.",
    tags: ["#QueueOrchestration", "#DynamicScheduling", "#WorkflowAutomation", "#RealTimeOperations"],
    cta: "View System Brief →"
  },
  {
    category: "Enterprise Audit Infrastructure",
    title: "TraceVault Audit Ledger",
    status: "Core Infrastructure / Enterprise Layer",
    problem: "Standard systems record state changes but lack the critical context of why they occurred, who initiated them, and how to safely recover during complex failure states.",
    process: "We architected an immutable audit ledger designed around contextual action logging, cryptographic fingerprinting, idempotent operations, automated retry mechanisms, and timeline reconstruction.",
    result: "Total system explainability. Every transaction leaves a definitive, reconstructable trail, failures are instantly classified, and system recovery relies on structured logic rather than manual intervention.",
    tags: ["#ImmutableLedger", "#Idempotency", "#SystemTraceability", "#AutomatedRecovery"],
    cta: "View Architecture Brief →"
  }
];

const CAPABILITIES = [
  {
    title: "Web Systems",
    description: "High-performance enterprise platforms engineered for optimal rendering speed, intuitive user experience, and absolute operational stability.",
    cta: "Initiate Platform Engineering"
  },
  {
    title: "Application Development",
    description: "Custom internal and external applications architected to streamline complex operational workflows, eliminating unnecessary friction and technical debt.",
    cta: "Initiate Application Build"
  },
  {
    title: "AI Solutions",
    description: "Enterprise AI integrations designed to synthesize disparate data, support critical decision-making, and automate manual operational overhead.",
    cta: "Initiate AI Integration"
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
      
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-12">
          {ALL_SYSTEMS.map((system) => (
            <div key={system.title} className="border border-[#212327] bg-[#0a0a0a] rounded-xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative overflow-hidden">
              <div className="lg:w-1/3 flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider">{system.category}</span>
                  <span className="font-mono text-[12px] text-white px-3 py-1 border border-[#212327] bg-[#191919] rounded-full self-start inline-flex">{system.status}</span>
                </div>
                <h3 className="text-3xl lg:text-[40px] leading-tight font-semibold tracking-[-0.03em] text-white">{system.title}</h3>
                <div className="flex flex-wrap gap-2 pt-4">
                  {system.tags.map(tag => (
                    <span key={tag} className="font-mono text-[11px] text-[#7d8187] tracking-tight">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-8 relative z-10">
                <div>
                  <h4 className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider mb-3">Diagnostic</h4>
                  <p className="text-[16px] text-[#7d8187] font-normal leading-relaxed">{system.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider mb-3">Process</h4>
                  <p className="text-[16px] text-[#7d8187] font-normal leading-relaxed">{system.process}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[12px] text-[#7d8187] uppercase tracking-wider mb-3">Result</h4>
                  <p className="text-[16px] text-white font-normal leading-relaxed">{system.result}</p>
                </div>
                <div className="pt-6 border-t border-[#212327]">
                  <a href={system.link || "#/contact"} className="flex items-center gap-2 font-mono text-[14px] text-white hover:text-white/80 transition-colors uppercase tracking-wider">
                    {system.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-[#7d8187] uppercase mb-4">
                Engineering Capabilities
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-semibold text-white mb-6">Engineered for scale.</h3>
              <p className="text-[#7d8187] font-normal text-lg md:text-xl leading-relaxed max-w-3xl">
                Our services are not off-the-shelf packages; they are strategic entry points into robust, scalable enterprise systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CAPABILITIES.map((cap) => (
                <div key={cap.title} className="flex flex-col gap-6 p-8 border border-[#212327] rounded-xl bg-[#0a0a0a]">
                  <h4 className="text-xl font-semibold text-white tracking-tight">{cap.title}</h4>
                  <p className="text-[#7d8187] text-[15px] leading-relaxed flex-grow">{cap.description}</p>
                  <a href="#/contact" className="text-left font-mono text-[12px] text-white uppercase tracking-wider hover:opacity-80 transition-opacity mt-4 flex items-center justify-between border-t border-[#212327] pt-4">
                    {cap.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
         </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
}
