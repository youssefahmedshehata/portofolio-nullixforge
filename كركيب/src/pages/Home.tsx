import { useState, useEffect } from 'react';
import TileEntityForge from '../components/TileEntityForge';

interface HomeProps {
  initialService?: string;
  shouldScrollToForm?: boolean;
}

export function Home({ initialService, shouldScrollToForm }: HomeProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    architecture: initialService || 'Web System',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, architecture: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (shouldScrollToForm) {
      const formEl = document.getElementById('contact-form-section');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [shouldScrollToForm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      
      const subject = encodeURIComponent(`System Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Identifier: ${formData.name}\nComms: ${formData.email}\nArchitecture: ${formData.architecture}\n\nSignal:\n${formData.message}`);
      
      window.open(`mailto:contact@nullixforge.com?subject=${subject}&body=${body}`, '_top');
      
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', architecture: 'Web System', message: '' });
      }, 3000);
    }, 800);
  };

  return (
    <div className="relative pt-24 pb-12 w-full max-w-7xl mx-auto px-6 md:px-12 z-10" data-scene="home-void">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[92vh] flex flex-col md:flex-row items-center pt-12 md:pt-0 mb-32 relative">
        <div className="md:w-7/12 relative z-10 pr-0 md:pr-12">
          <h1 className="text-[clamp(2.5rem,10vw,3.5rem)] md:text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-[1] md:leading-[0.9] tracking-[-0.04em] md:tracking-[-0.05em] mb-8 text-text-main font-heading" style={{ fontOpticalSizing: 'auto' }}>
            From nothing, we forge what feels natural.
          </h1>
          <p 
            className="mb-10 font-sans" 
            style={{ 
              fontSize: 'clamp(1.05rem, 1.15vw, 1.22rem)',
              lineHeight: 1.72,
              letterSpacing: '-0.012em',
              fontWeight: 400,
              color: 'rgba(244, 240, 232, 0.74)',
              maxWidth: '680px'
            }}
          >
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
      <section id="contact-form-section" className="mb-20">
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto rounded-[32px] p-8 md:p-12 bg-[#0A0B0E]/98 border border-white/[0.12] shadow-[0_40px_120px_rgba(0,0,0,0.58)]">
          <div className="md:w-[40%] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.05em] mb-4">Start from zero.</h2>
            <p className="text-sm text-[#A9A39A] mb-12">Tell us what needs to exist. We'll shape the system around it.</p>
            
            <div className="mt-auto bg-[#030304]/80 border border-white/5 p-6 rounded-2xl flex flex-col gap-6 font-mono text-[10px] tracking-widest">
              <div className="flex flex-col">
                 <span className="text-text-faint uppercase mb-2">Direct Channel</span>
                 <a href="mailto:contact@nullixforge.com" className="text-text-main hover:text-ember transition-colors">contact@nullixforge.com</a>
              </div>
              <div className="flex flex-col">
                 <span className="text-text-faint uppercase mb-2">System Node</span>
                 <span className="text-text-main">nullixforge.com</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-[60%] border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-12 relative overflow-hidden">
            {isSent ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0B0E]/98 z-20" style={{ animation: 'fade-in 0.4s ease-out' }}>
                <div className="w-12 h-12 rounded-full border border-ember/30 bg-ember/10 flex items-center justify-center text-ember mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Signal Transmitted</h3>
                <p className="text-text-muted text-sm px-8 text-center">Your message has been encoded and sent. We'll open a channel with you shortly.</p>
              </div>
            ) : null}

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 relative">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Name / Identifier</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  disabled={isSubmitting}
                  className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main transition-colors text-sm disabled:opacity-50" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Email / Comms</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  disabled={isSubmitting}
                  className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main transition-colors text-sm disabled:opacity-50" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Project Architecture</label>
                <select 
                  value={formData.architecture}
                  onChange={(e) => setFormData({...formData, architecture: e.target.value})}
                  disabled={isSubmitting}
                  className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main appearance-none transition-colors text-sm disabled:opacity-50"
                >
                  <option>Web System</option>
                  <option>Application</option>
                  <option>AI Solution</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label className="font-mono text-[9px] uppercase text-text-faint tracking-[0.2em] pl-1">Message / Signal</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  disabled={isSubmitting}
                  className="bg-[#030304]/88 border border-white/[0.12] rounded-xl px-4 py-3.5 focus:outline-none focus:border-ember/45 text-text-main min-h-[120px] resize-none transition-colors text-sm disabled:opacity-50"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="relative overflow-hidden bg-text-main border border-text-main rounded-xl px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold text-black hover:bg-ember hover:border-ember transition-all duration-300 w-full disabled:opacity-80 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-3 w-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing
                  </span>
                ) : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
}
