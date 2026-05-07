export function Work() {
  const caseStudies = [
    {
      name: "CareGrid Clinic OS",
      type: "Healthcare Operating Systems",
      status: "Selected Build / Primary Case Study",
      problem: "Clinic operations were scattered across bookings, patients, doctors, payments, queues, records, and staff decisions.",
      process: "We forged one operational layer around patient identity, appointment flow, role-based access, audit trails, timeline projections, billing, queue movement, and clinical context.",
      result: "A clinic chain can run through one calm system — where every action has context, every patient has history, and every staff role sees only what it needs.",
      tags: ["Healthcare OS", "Patient Timeline", "Audit Spine", "Queue Intelligence"],
      actionText: "View case study"
    },
    {
      name: "LedgerAxis Commerce Core",
      type: "Commerce Operating Systems",
      status: "System Concept / Internal Build Direction",
      problem: "Sales were moving, but the business had no single source of truth. Orders, stock, invoices, payments, customer state, and staff actions lived in separate operational fragments.",
      process: "We shaped a commerce core around inventory movement, invoice lineage, payment states, customer history, order flow, permissions, and audit-backed operational records.",
      result: "A business layer where every order is traceable, every payment is explainable, and every stock movement becomes visible without adding noise.",
      tags: ["Commerce Core", "Inventory Flow", "Payment Ledger", "Operational Audit"],
      actionText: "View system brief"
    },
    {
      name: "NerveOps AI Control Plane",
      type: "AI Control Systems",
      status: "Internal R&D / AI System Concept",
      problem: "The business had data everywhere, but no operational intelligence. Reports existed, signals existed, but decisions still depended on slow human scanning.",
      process: "We designed an AI control plane that reads operational events, classifies signals, detects anomalies, summarizes context, and turns scattered data into decision-ready insight.",
      result: "Teams stop searching for meaning. The system surfaces what matters, explains why, and gives operators the next clear action.",
      tags: ["AI Layer", "Signal Intelligence", "Decision Console", "Anomaly Detection"],
      actionText: "View system brief"
    },
    {
      name: "AccessForge Identity Layer",
      type: "Access & Identity Systems",
      status: "Architecture Module / Productized Concept",
      problem: "Critical systems break when patients, staff, admins, devices, sessions, and permissions share the same mental model. Access becomes unclear, and unclear access becomes risk.",
      process: "We shaped an identity layer around role separation, device sessions, staff authentication, access issuing, eligibility checks, audit context, and controlled entry points.",
      result: "Every user enters through the right door, with the right scope, under the right context — while every sensitive movement remains traceable.",
      tags: ["Identity Layer", "Access Graph", "Sessions", "Audit Control"],
      actionText: "View architecture brief"
    },
    {
      name: "QueueSignal Flow Engine",
      type: "Flow & Queue Systems",
      status: "Productized Module / System Concept",
      problem: "Waiting rooms, appointment slots, cancellations, check-ins, walk-ins, and service timing move faster than teams can coordinate manually.",
      process: "We designed a flow engine around slot logic, queue tickets, waiting displays, status movement, notifications, and service timing.",
      result: "Movement becomes visible. Patients know where they are, staff know what comes next, and the system absorbs the operational noise.",
      tags: ["Queue Engine", "Scheduling", "Waiting Flow", "Realtime Operations"],
      actionText: "View system brief"
    },
    {
      name: "TraceVault Audit Ledger",
      type: "Audit Infrastructure",
      status: "Infrastructure Concept / Enterprise System Layer",
      problem: "Most systems know what changed. Few systems know why it changed, who caused it, what context allowed it, and how the system should recover if something fails.",
      process: "We forged an audit spine around action context, fingerprints, idempotency decisions, failure classification, retry logic, outbox flow, and timeline reconstruction.",
      result: "The system becomes explainable. Every action leaves a clean trail, every failure has a class, and recovery stops depending on memory.",
      tags: ["Audit Spine", "Idempotency", "Traceability", "Recovery Logic"],
      actionText: "View architecture brief"
    }
  ];

  return (
    <div className="relative pt-32 pb-12 w-full max-w-7xl mx-auto px-6 md:px-12 z-10" data-scene="work-systems">
      
      {/* 1. WORK HERO */}
      <section className="mb-24 relative">
        <div className="absolute top-10 left-10 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(255,106,42,0.1),transparent_70%)] pointer-events-none data-layer='forge-glow'" />

        <div className="mb-6 inline-flex items-center gap-2">
          <div className="w-1 h-1 bg-ember"></div>
          <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.2em]">
            work / proof of systems
          </span>
        </div>
        <h1 className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-[0.88] tracking-[-0.05em] mb-8 text-text-main">Systems forged from zero.</h1>
        <p className="text-text-muted text-sm max-w-2xl mb-12">
          Selected builds across Web platforms, Applications, and AI solutions — structured as problems, processes, and results.
        </p>

        <div className="flex gap-8 font-mono text-[11px] uppercase tracking-widest text-[#A9A39A]">
          <div className="flex items-center gap-3"><span className="text-ember font-bold">01</span><span>Web Systems</span></div>
          <div className="flex items-center gap-3"><span className="text-ember font-bold">02</span><span>Applications</span></div>
          <div className="flex items-center gap-3"><span className="text-ember font-bold">03</span><span>AI Solutions</span></div>
        </div>
      </section>

      {/* 2. FILTERS */}
      <section className="mb-12 flex flex-wrap gap-4 border-b border-white/5 pb-8">
        <button className="px-[22px] py-[10px] rounded-full border border-ember text-[#030304] bg-ember text-[11px] uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(255,106,42,0.2)] transition-colors">All</button>
        <button className="px-[22px] py-[10px] rounded-full border border-white/10 text-text-muted bg-transparent hover:border-ember/40 text-[11px] uppercase tracking-widest transition-colors">Operating Systems</button>
        <button className="px-[22px] py-[10px] rounded-full border border-white/10 text-text-muted bg-transparent hover:border-ember/40 text-[11px] uppercase tracking-widest transition-colors">AI Control</button>
        <button className="px-[22px] py-[10px] rounded-full border border-white/10 text-text-muted bg-transparent hover:border-ember/40 text-[11px] uppercase tracking-widest transition-colors">Infrastructure</button>
        <button className="px-[22px] py-[10px] rounded-full border border-white/10 text-text-muted bg-transparent hover:border-ember/40 text-[11px] uppercase tracking-widest transition-colors">Product Concepts</button>
        <button className="px-[22px] py-[10px] rounded-full border border-white/10 text-text-muted bg-transparent hover:border-ember/40 text-[11px] uppercase tracking-widest transition-colors">Selected Builds</button>
      </section>

      {/* 3. CASE STUDY GRID */}
      <section className="mb-40 bg-[#050608]/70 rounded-[36px] p-6 md:p-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <div key={i} className="group p-8 rounded-[24px] bg-[linear-gradient(180deg,rgba(17,19,24,0.97),rgba(7,8,10,0.99))] border border-white/[0.11] hover:border-ember/30 transition-all duration-300 flex flex-col shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
               <div className="flex justify-between items-start mb-6">
                 <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A9A39A]">[ {study.type} ]</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-molten-gold transition-colors"></div>
               </div>
               
               <h3 className="text-2xl font-bold mb-8 text-text-main group-hover:text-white transition-colors">{study.name}</h3>
               
               <div className="flex flex-col mb-12 flex-grow">
                 {study.status && (
                   <div className="pb-6 border-b border-white/[0.07]">
                     <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#6F6A63] mb-2">Status</div>
                     <p className="text-[#A9A39A] text-[13px] leading-relaxed">{study.status}</p>
                   </div>
                 )}
                 <div className={`${study.status ? 'py-6' : 'pb-6'} border-b border-white/[0.07]`}>
                   <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#6F6A63] mb-2">Problem</div>
                   <p className="text-[#A9A39A] text-[13px] leading-relaxed">{study.problem}</p>
                 </div>
                 <div className="py-6 border-b border-white/[0.07]">
                   <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#6F6A63] mb-2">Process</div>
                   <p className="text-[#A9A39A] text-[13px] leading-relaxed">{study.process}</p>
                 </div>
                 <div className="pt-6">
                   <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#6F6A63] mb-2">Result</div>
                   <p className="text-text-main text-[13px] font-medium leading-relaxed">{study.result}</p>
                 </div>
               </div>

               <div className="bg-[#0A0B0E] -mx-8 -mb-8 p-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-auto rounded-b-[24px] border-t border-white/5">
                 <div className="flex flex-wrap gap-2">
                   {study.tags.map(tag => (
                     <span key={tag} className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#A9A39A]">#{tag}</span>
                   ))}
                 </div>
                 <button className="text-[10px] uppercase tracking-widest font-bold text-ember flex items-center gap-2 group/btn">
                   {study.actionText || 'View case study'}
                   <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                 </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="mb-20">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-heading font-medium mb-4">What we forge.</h2>
          <p className="text-text-muted text-lg">Services are not packages. They are entry points into systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Web Systems",
              desc: "High-performance web platforms built around clarity, conversion, and operational stability.",
              cta: "Forge a web system",
              diagram: (
                <div className="flex gap-2 items-center opacity-40 mb-8 h-12">
                  <div className="w-12 border-t border-dashed border-ember"></div>
                  <div className="w-2 h-2 rounded bg-ember"></div>
                  <div className="w-16 border-t border-ember"></div>
                  <div className="w-2 h-2 rounded bg-molten-gold"></div>
                </div>
              )
            },
            {
              title: "Applications",
              desc: "Internal and external applications shaped around real workflows, not decorative screens.",
              cta: "Forge an application",
              diagram: (
                <div className="flex flex-col gap-2 opacity-40 mb-8 h-12 justify-center">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full border border-molten-gold"></div>
                    <div className="w-12 border-t border-molten-gold/50"></div>
                  </div>
                  <div className="flex gap-2 items-center ml-4">
                    <div className="w-1 h-4 border-l border-molten-gold/50"></div>
                    <div className="w-8 border-t border-molten-gold/50"></div>
                    <div className="w-2 h-2 bg-molten-gold rounded-full shadow-[0_0_8px_rgba(223,165,91,0.5)]"></div>
                  </div>
                </div>
              )
            },
            {
              title: "AI Solutions",
              desc: "AI layers that reduce noise, structure decisions, and automate what should no longer depend on manual effort.",
              cta: "Forge an AI layer",
              diagram: (
                <div className="relative opacity-40 mb-8 h-12 flex items-center">
                   <div className="absolute w-full border-t border-white/20"></div>
                   <div className="absolute left-1/4 w-3 h-3 rotate-45 bg-ember blur-[2px]"></div>
                   <div className="absolute left-1/2 w-2 h-2 rotate-45 border border-ember"></div>
                   <div className="absolute right-1/4 w-3 h-3 rotate-45 bg-ember blur-[2px]"></div>
                </div>
              )
            }
          ].map((srv, i) => (
            <div key={i} className="group p-8 md:p-10 rounded-[28px] bg-[#0D0F13]/98 border border-white/[0.12] hover:border-ember/30 transition-all duration-300 relative flex flex-col shadow-[0_36px_110px_rgba(0,0,0,0.55)]">
               <div className="absolute bottom-0 inset-x-8 h-[2px] bg-molten-gold/20"></div>
               
               <div className="bg-[#08090B] border border-white/5 p-4 rounded-[16px] mb-8 flex items-center min-h-[64px]">
                 {srv.diagram}
               </div>

               <h3 className="text-xl font-bold mb-4 text-text-main group-hover:text-molten-gold transition-colors">{srv.title}</h3>
               <p className="text-[#A9A39A] text-[13px] leading-relaxed mb-10 flex-grow">{srv.desc}</p>
               
               <button className="mt-auto px-6 py-3 border border-white/10 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-ember hover:border-ember hover:text-[#030304] transition-all bg-[#030304] w-fit text-text-main">
                 {srv.cta}
               </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
