import TileEntityForge from '../components/TileEntityForge';

export function Home() {
  return (
    <div className="relative pt-24 pb-12 w-full max-w-7xl mx-auto px-6 md:px-12 z-10" data-scene="home-void">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[92vh] flex flex-col md:flex-row items-center pt-12 md:pt-0 mb-32 relative">
        <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[500px] h-[500px] opacity-10 blur-[100px] bg-molten-gold rounded-full pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 opacity-20 blur-[120px] bg-ember rounded-full pointer-events-none" />
        
        <div className="md:w-7/12 relative z-10 pr-0 md:pr-12">
          <h1 className="text-[64px] font-bold leading-[64px] tracking-[-0.05em] mb-8 text-text-main font-sans">
            From nothing, we forge what feels natural.
          </h1>
          <p className="max-w-[480px] text-text-muted leading-relaxed text-sm mb-10">
            Every system we build begins at zero — no templates, no borrowed complexity, no noise. We engineer Web platforms, Applications, and AI solutions from the ground up, shaped entirely around what your business needs to run.
            <br/><br/>
            That's our starting point. Below, you'll see how we think, what we've built, and what becomes possible.
          </p>
        </div>

        {/* The Forge Core Visual - Anchored Foundry Core */}
        <div className="md:w-5/12 w-full mt-16 md:mt-0 relative flex items-center justify-center">
          <TileEntityForge />
        </div>
      </section>

      {/* 2. QUICK PROOF SECTION */}
      <section className="mb-40">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4">Proof, before detail.</h2>
          <p className="text-text-muted text-lg">Three selected builds. Enough to show the system. Not enough to slow the signal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "CareGrid Clinic OS",
              cat: "Healthcare Operating Systems",
              result: "A clinic chain became one silent operating layer.",
              tags: ["Healthcare OS", "Patient Timeline", "Audit Spine", "Queue Intelligence"],
              num: "01"
            },
            {
              title: "LedgerAxis Commerce Core",
              cat: "Commerce Operating Systems",
              result: "Fragmented sales, stock, invoices, and payments became one accountable commerce layer.",
              tags: ["Commerce Core", "Inventory Flow", "Payment Ledger", "Operational Audit"],
              num: "02"
            },
            {
              title: "NerveOps AI Control Plane",
              cat: "AI Control Systems",
              result: "Scattered operational signals became structured decisions.",
              tags: ["AI Layer", "Signal Intelligence", "Decision Console", "Anomaly Detection"],
              num: "03"
            }
          ].map((project, i) => (
            <div key={i} className="group p-8 rounded-[24px] bg-[linear-gradient(180deg,rgba(18,20,25,0.96),rgba(8,9,11,0.98))] border border-white/10 hover:border-ember/30 transition-all cursor-pointer shadow-[0_28px_80px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden">
               <div className="absolute top-0 inset-x-0 h-[2px] bg-molten-gold/[0.22] group-hover:bg-ember/[0.48] transition-colors duration-500"></div>
               <div className="flex justify-between items-start mb-6">
                 <div className="text-[10px] font-mono text-[#A9A39A] uppercase tracking-[0.2em]">{project.num} // {project.cat}</div>
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-ember transition-colors"></div>
               </div>
               
               <h3 className="text-xl font-bold mb-4">{project.title}</h3>
               <p className="text-[#A9A39A] text-[13px] leading-relaxed mb-8">{project.result}</p>
               
               <div className="flex flex-wrap gap-2 mt-auto">
                 {project.tags.map(tag => (
                   <span key={tag} className="text-[9px] font-mono uppercase bg-[#030304]/80 border border-white/5 px-2.5 py-1.5 rounded text-[#A9A39A]">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PITCH SECTION */}
      <section className="mb-40 relative">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-ember/10 blur-2xl pointer-events-none"></div>
        <div className="rounded-[32px] p-8 md:p-16 relative flex flex-col md:flex-row gap-12 border border-white/[0.12] bg-[linear-gradient(135deg,rgba(18,19,22,0.98),rgba(7,8,10,1))] shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-ember/60"></div>
          
          <div className="md:w-1/4">
          </div>
          <div className="md:w-3/4">
            <h2 className="text-xl md:text-2xl leading-relaxed text-text-main font-bold tracking-tight">
              Everything we forge is built for one purpose — yours. A system engineered from zero, designed to run, to grow, and to hold your audience exactly where they should be.
              <br/><br/>
              <span className="text-[#A9A39A]">You may know exactly what you need. You may not yet. Either way — we do. That's what the forge is for.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto rounded-[32px] p-8 md:p-12 bg-[#0A0B0E]/98 border border-white/[0.12] shadow-[0_40px_120px_rgba(0,0,0,0.58)]">
          <div className="md:w-[40%] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.05em] mb-4">Start from zero.</h2>
            <p className="text-sm text-[#A9A39A] mb-12">Tell us what needs to exist. We'll shape the system around it.</p>
            
            <div className="mt-auto bg-[#030304]/80 border border-white/5 p-6 rounded-2xl flex flex-col gap-6 font-mono text-[10px] tracking-widest">
              <div className="flex flex-col">
                 <span className="text-text-faint uppercase mb-2">Direct Channel</span>
                 <a href="mailto:hello@nullixforge.com" className="text-text-main hover:text-ember transition-colors">hello@nullixforge.com</a>
              </div>
              <div className="flex flex-col">
                 <span className="text-text-faint uppercase mb-2">System Node</span>
                 <span className="text-text-main">nullixforge.com</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-[60%] border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-12">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2 relative">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Name / Identifier</label>
                <input type="text" className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main transition-colors text-sm" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Email / Comms</label>
                <input type="email" className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main transition-colors text-sm" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Project Architecture</label>
                <select className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main appearance-none transition-colors text-sm">
                  <option>Web System</option>
                  <option>Application</option>
                  <option>AI Solution</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Message / Signal</label>
                <textarea className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main min-h-[120px] resize-none transition-colors text-sm"></textarea>
              </div>

              <button className="bg-text-main border border-text-main rounded-xl px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold text-black hover:bg-ember hover:border-ember transition-all duration-300 w-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
}
