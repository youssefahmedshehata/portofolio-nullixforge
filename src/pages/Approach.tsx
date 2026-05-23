export function Approach() {
  return (
    <div className="relative pt-32 pb-12 w-full max-w-7xl mx-auto px-6 md:px-12 z-10" data-scene="approach-logic">

      {/* 1. APPROACH HERO */}
      <section className="mb-32 flex flex-col md:flex-row min-h-[70vh] items-center relative">
        <div className="md:w-3/5 pr-0 md:pr-16 z-10">
          <div className="mb-6 inline-flex items-center gap-2">
            <div className="w-1 h-1 bg-molten-gold"></div>
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.2em]">
              approach / the thinking underneath
            </span>
          </div>
          <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-bold tracking-[-0.05em] mb-8 leading-[0.9]">The difference is not the interface.<br /><span className="text-text-muted">It is the thinking underneath.</span></h1>
          <p className="text-text-muted text-sm max-w-xl leading-relaxed">
            nullix begins where templates stop: at zero. We remove noise, define the system, then shape the interface around what must actually happen.
          </p>
        </div>

        {/* Forge Route Field */}
        <div
          className="md:w-2/5 h-[400px] mt-16 md:mt-0 relative w-full flex items-center justify-center"
          aria-label="Static forge route field showing nullixforge defining a precise path from current state to correct outcome"
          role="img"
        >
          {/* Outer Chamber */}
          <div
            className="relative w-full max-w-[360px] h-[360px] rounded-[32px] overflow-hidden flex items-center justify-center p-6"
            style={{
              background: 'linear-gradient(180deg, #0A0B0E 0%, #050607 100%)',
              border: '1px solid rgba(244,240,232,0.10)',
              boxShadow: '0 32px 90px rgba(0,0,0,0.56), inset 0 1px 0 rgba(255,255,255,0.045)'
            }}
          >
            {/* Inner Field */}
            <div
              className="relative w-full h-full rounded-[20px] overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #090A0D 0%, #050607 100%)',
                border: '1px solid rgba(244,240,232,0.075)'
              }}
            >
              {/* Arcs replaced grid */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 40% 50%, transparent 40px, rgba(244,240,232,0.035) 41px, transparent 42px), radial-gradient(circle at 40% 50%, transparent 80px, rgba(244,240,232,0.035) 81px, transparent 82px), radial-gradient(circle at 40% 50%, transparent 120px, rgba(244,240,232,0.035) 121px, transparent 122px)',
                  backgroundSize: '100% 100%'
                }}
              ></div>

              {/* --- ROUTE PATH --- */}
              {/* Segment 1: Rightwards from origin */}
              <div
                className="absolute top-[80px] left-[70px] h-[1px] w-[140px]"
                style={{ background: 'rgba(244,240,232,0.11)' }}
              ></div>

              {/* Segment 2: Downwards */}
              <div
                className="absolute top-[80px] left-[210px] w-[1px] h-[100px]"
                style={{ background: 'rgba(244,240,232,0.11)' }}
              ></div>

              {/* Segment 3: Rightwards to outcome with golden overlay */}
              <div
                className="absolute top-[180px] left-[210px] h-[1px] w-[70px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(244,240,232,0.10), rgba(223,165,91,0.18), rgba(255,106,42,0.20))'
                }}
              ></div>
              <div
                className="absolute top-[180px] left-[260px] h-[1px] w-[20px]"
                style={{ background: 'rgba(223,165,91,0.22)' }}
              ></div>

              {/* --- OBJECTS --- */}

              {/* Origin Point */}
              <div
                className="absolute top-[75px] left-[60px] w-[11px] h-[11px] rounded-[3px] z-20"
                style={{
                  background: '#ff6a2a',
                  border: '1px solid rgba(244,240,232,0.10)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)'
                }}
              ></div>

              {/* Central Nullixforge Nucleus */}
              <div
                className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-[10px] flex items-center justify-center z-30"
                style={{
                  background: 'linear-gradient(180deg, #070809 0%, #030405 100%)',
                  border: '1px solid #dfa55b',
                  boxShadow: '0 0 0 1px rgba(223,165,91,0.30), 0 0 22px rgba(223,165,91,0.30), inset 0 1px 0 rgba(255,255,255,0.045)'
                }}
              >
                <div
                  className="w-[8px] h-[8px] rounded-full"
                  style={{
                    background: '#dfa55b',
                    boxShadow: '0 0 14px rgba(223,165,91,0.8)'
                  }}
                ></div>
              </div>

              {/* Final Outcome Point */}
              <div
                className="absolute top-[174px] left-[280px] w-[13px] h-[13px] rounded-[4px] flex items-center justify-center z-20"
                style={{
                  background: '#dfa55b',
                  border: '1px solid rgba(223,165,91,0.4)',
                  boxShadow: '0 0 18px rgba(223,165,91,0.6), 0 0 36px rgba(223,165,91,0.2)'
                }}
              >
                <div
                  className="w-[3px] h-[3px] rounded-full"
                  style={{ background: '#dfa55b' }}
                ></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW WE THINK */}
      <section className="mb-40">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.05em] mb-12">How we think.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Zero before structure",
              desc: "Before building, we remove assumptions, noise, and borrowed patterns."
            },
            {
              num: "02",
              title: "Systems before screens",
              desc: "A screen is only useful when the system beneath it is clear."
            },
            {
              num: "03",
              title: "Calm over complexity",
              desc: "The user should feel control, not the weight of the machinery."
            },
            {
              num: "04",
              title: "Invisible power",
              desc: "The best systems are felt through stability, speed, and certainty — not through explanation."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#0A0B0E]/95 border border-white/[0.12] p-8 rounded-[24px] relative group hover:border-white/20 transition-colors shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20"></div>

              <div className="font-mono text-xs tracking-widest text-[#6F6A63] mb-12 border-b border-white/5 pb-4">0{i + 1}</div>
              <h3 className="text-lg font-bold mb-4 text-text-main">{item.title}</h3>
              <p className="text-[#A9A39A] text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW WE WORK (TIMELINE) */}
      <section className="mb-40  border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ember/5 rounded-full blur-3xl pointer-events-none"></div>
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-[-0.05em] mb-16 relative z-10">The forge process.</h2>

        {/* Horizontal Timeline (Desktop) / Vertical (Mobile) */}
        <div className="relative z-10 w-full overflow-x-auto pb-8">
          <div className="md:absolute top-8 left-0 right-0 h-[2px] bg-white/[0.08] hidden md:block z-0"></div>
          <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-white/[0.08] md:hidden z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 relative z-10 min-w-max md:min-w-0">
            {[
              { title: "Null State", desc: "Understand what should be removed." },
              { title: "System Map", desc: "Define what must exist." },
              { title: "Forge Layer", desc: "Build the core flows and structure.", active: true },
              { title: "Interface Skin", desc: "Shape the experience around clarity." },
              { title: "Living System", desc: "Prepare the product to run, grow, and evolve." }
            ].map((step, i) => (
              <div key={i} className="flex md:flex-col gap-8 md:gap-0 relative">
                <div className={`shrink-0 w-14 h-14 md:mb-10 rounded-xl border flex items-center justify-center bg-[#0A0B0E] relative z-10 ${step.active ? 'border-ember shadow-[0_0_20px_rgba(255,106,42,0.15)]' : 'border-white/10'}`}>
                  <div className={`w-3 h-3 rounded-sm ${step.active ? 'bg-ember' : 'bg-white/10'}`}></div>
                </div>

                <div className="pt-2 md:pt-0">
                  <div className={`font-mono text-[9px] uppercase tracking-[0.2em] mb-3 ${step.active ? 'text-ember' : 'text-[#6F6A63]'}`}>[ Phase {i + 1} ]</div>
                  <h4 className="text-base font-bold mb-2">{step.title}</h4>
                  <p className="text-[13px] text-[#A9A39A] leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY THE RESULT FEELS DIFFERENT */}
      <section className="mb-40">
        <div className="flex flex-col md:flex-row gap-16 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-16">
          <div className="md:w-1/2">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.05em] mb-6">Less visible complexity.<br /><span className="text-text-muted">More felt control.</span></h2>
            <p className="text-text-muted text-sm leading-relaxed">
              The interface is only the surface. The real work is deciding what should exist, what should disappear, and what must run silently beneath the user's attention.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col gap-4 font-mono text-[11px] tracking-[0.2em] uppercase">
              {[
                "No template thinking",
                "No decorative complexity",
                "No disconnected pages",
                "No noise disguised as features",
                "No interface without system logic",
                "No motion without purpose"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="w-1.5 h-1.5 bg-ember/50 rotate-45 shrink-0"></div>
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SKILLS */}
      <section className="mb-20">
        <div className="mb-10">
          <h2 className="text-xl font-bold tracking-tight mb-2">The tools are secondary. The system is the point.</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Product Architecture", "Frontend Engineering", "Backend Logic",
            "Web Platforms", "Applications", "AI Workflows",
            "Automation", "UX Systems", "Performance",
            "Interface Design", "System Mapping", "Technical Direction"
          ].map(skill => (
            <span key={skill} className="bg-white/5 border border-white/10 text-text-muted text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full hover:border-[#FF6A2A]/40 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}
