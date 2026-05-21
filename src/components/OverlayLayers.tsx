import React, { useEffect, useState } from 'react';

const TRACE_GROUPS = [
  [], // 0
  [
    "> init field Ω[18x18]",
    "> seed vector v₀ := sparse",
    "> Σ(noise) -> constrained",
    "> basis(null) prepared"
  ],
  [
    "> G.adj := local-neighbor map",
    "> minimize Σ edge_cost(i,j)",
    "> center_mass estimate unstable",
    "> rank(A) < required span",
    "> hollow invariant unresolved"
  ],
  [
    "> formation A settled",
    "> boundary continuity sampled",
    "> interior relation unresolved",
    "> awaiting invariant response"
  ],
  [
    "> topology gap: inner continuity false",
    "> ∂body has non-uniform boundary",
    "> null-space leakage recognized internally",
    "> reject hollow attractor"
  ],
  [
    "> apply constraint C₁: close void",
    "> shift vector field east-bound",
    "> edge weights rebalanced",
    "> Laplacian ΔG recomputed",
    "> compression bias rising"
  ],
  [
    "> formation B settled",
    "> center vector sampled",
    "> edge distribution uneven",
    "> equilibrium pending"
  ],
  [
    "> center_mass ≠ geometric center",
    "> right-edge load > left-edge load",
    "> eigenvalue λ₂ below stability floor",
    "> false equilibrium rejected"
  ],
  [
    "> apply C₂: restore central symmetry",
    "> reduce entropy H(state)",
    "> solve local minima escape",
    "> invariant set I locked",
    "> center vector converging"
  ],
  [
    "> rhombic body settled",
    "> center vector aligned",
    "> edge pressure near-zero",
    "> verification pending"
  ],
  [
    "> λ₂ >= stability floor",
    "> checksum(structure) passed",
    "> null overhead -> 0",
    "> state := stable"
  ],
  [
    "> serialize stable pattern",
    "> return seed state",
    "> preserve learned constraints",
    "> loop without memory loss"
  ]
];

const OVERLAY_PHASES = [
  {
    range: [0, 8.75],
    phaseName: "DORMANT",
    principleId: "P/01",
    principle: "Nothing begins clean until the unnecessary has been removed.",
    traceGroup: 1,
    pinnedOutputState: "empty"
  },
  {
    range: [8.75, 25],
    phaseName: "ATTEMPT_A",
    principleId: "P/02",
    principle: "A system should not ask the user to carry what the architecture failed to resolve.",
    traceGroup: 2,
    pinnedOutputState: "empty"
  },
  {
    range: [25, 27.5],
    phaseName: "WRONG_A_QUIET",
    principleId: "P/03",
    principle: "Simplicity is not the absence of structure. It is structure with no excess left visible.",
    traceGroup: 3,
    pinnedOutputState: "empty"
  },
  {
    range: [27.5, 36.25],
    phaseName: "WRONG_A_UNSTABLE",
    principleId: "P/03",
    principle: "Simplicity is not the absence of structure. It is structure with no excess left visible.",
    traceGroup: 4,
    pinnedOutputState: "learned_c1"
  },
  {
    range: [36.25, 51.25],
    phaseName: "ATTEMPT_B",
    principleId: "P/04",
    principle: "When the center is wrong, every feature becomes a compensation.",
    traceGroup: 5,
    pinnedOutputState: "learned_c1"
  },
  {
    range: [51.25, 53.75],
    phaseName: "WRONG_B_QUIET",
    principleId: "P/05",
    principle: "False stability is the most expensive form of complexity.",
    traceGroup: 6,
    pinnedOutputState: "learned_c1"
  },
  {
    range: [53.75, 63.75],
    phaseName: "WRONG_B_UNSTABLE",
    principleId: "P/05",
    principle: "False stability is the most expensive form of complexity.",
    traceGroup: 7,
    pinnedOutputState: "learned_c1_c2"
  },
  {
    range: [63.75, 81.25],
    phaseName: "FINAL_MOVEMENT",
    principleId: "P/06",
    principle: "The right system does not feel impressive. It feels inevitable.",
    traceGroup: 8,
    pinnedOutputState: "learned_c1_c2"
  },
  {
    range: [81.25, 83.75],
    phaseName: "FINAL_QUIET",
    principleId: "P/07",
    principle: "The work is complete when the user can move without noticing the machine.",
    traceGroup: 9,
    pinnedOutputState: "learned_c1_c2"
  },
  {
    range: [83.75, 94.375],
    phaseName: "STABLE_VERIFICATION",
    principleId: "P/07",
    principle: "The work is complete when the user can move without noticing the machine.",
    traceGroup: 10,
    pinnedOutputState: "applied_c1_c2"
  },
  {
    range: [94.375, 100.1],
    phaseName: "RESET",
    principleId: "P/08",
    principle: "Zero is not where the system ends. It is where the next system becomes possible.",
    traceGroup: 11,
    pinnedOutputState: "reset"
  }
];

export default function OverlayLayers() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [traceLines, setTraceLines] = useState<string[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhaseIndex(9); // STABLE_VERIFICATION phase
      return;
    }

    const startTime = performance.now();
    let frameId: number;

    const update = () => {
      const now = performance.now();
      const elapsed = (now - startTime) % 32000;
      const progress = (elapsed / 32000) * 100;

      let pIndex = 0;
      for (let i = 0; i < OVERLAY_PHASES.length; i++) {
        if (progress >= OVERLAY_PHASES[i].range[0] && progress < OVERLAY_PHASES[i].range[1]) {
          pIndex = i;
          break;
        }
      }
      
      setPhaseIndex(pIndex);
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [prefersReducedMotion]);

  const currentPhase = OVERLAY_PHASES[phaseIndex] || OVERLAY_PHASES[0];

  useEffect(() => {
    if (prefersReducedMotion) {
      setTraceLines(TRACE_GROUPS[10]);
      return;
    }

    let timeoutId: any;
    const groupLines = TRACE_GROUPS[currentPhase.traceGroup];
    let visibleCount = 1;
    
    const showNextLine = () => {
       setTraceLines(groupLines.slice(0, visibleCount));
       if (visibleCount < groupLines.length) {
           visibleCount++;
           timeoutId = setTimeout(showNextLine, 450 + Math.random() * 350);
       }
    };
    
    showNextLine();
    return () => clearTimeout(timeoutId);
  }, [currentPhase.traceGroup, prefersReducedMotion]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .cognitive-overlay-panel {
          box-sizing: border-box;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          isolation: isolate;
          mix-blend-mode: normal;
          opacity: 1;
        }
        
        .cognitive-overlay-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(180deg, #090B0F 0%, #040506 50%, #010202 100%);
          opacity: 1;
          pointer-events: none;
        }

        .cognitive-overlay-content {
          position: relative;
          z-index: 1;
        }

        /* General Layout */
        .panel-principle {
          position: relative;
          order: 3;
          border-radius: 18px;
          min-height: 104px;
          max-height: 124px;
          width: 100%; 
          max-width: 430px;
          padding: 16px 18px;
          margin-top: 32px;
          z-index: 10;
        }

        .panel-trace {
          position: relative;
          order: 1;
          border-radius: 14px;
          width: 100%; 
          max-width: 320px;
          height: 240px; 
          padding: 0;
          margin-bottom: 32px;
          z-index: 10;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .panel-principle { max-width: 380px; min-height: 96px; padding: 14px; border-radius: 16px; margin-top: 24px; }
          .panel-trace { max-width: 300px; height: 220px; margin-bottom: 24px; }
        }

        @media (max-width: 767px) {
           .panel-trace { max-width: calc(100% - 32px); height: 200px; margin-bottom: 16px; margin-top: 48px; }
           .panel-principle { max-width: calc(100% - 32px); padding: 12px; min-height: 80px; max-height: 100px; margin-top: 16px; margin-bottom: 16px;}
        }

        .trace-line-enter {
           animation: trace-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes trace-enter {
           from { opacity: 0; transform: translateY(4px); }
           to { opacity: 1; transform: translateY(0); }
        }

        .fade-transition {
           transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .trace-buffer-scroll {
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           flex: 1;
        }
      `}} />

      {/* TOP RIGHT: COMPUTATION TRACE */}
      <div 
        className="cognitive-overlay-panel panel-trace overflow-hidden flex flex-col"
        style={{
          backgroundColor: '#030405',
          background: 'linear-gradient(180deg, #0A0D11 0%, #050607 42%, #020303 100%)',
          border: '1px solid rgba(244,240,232,0.13)',
          boxShadow: '0 30px 86px rgba(0,0,0,0.72), 0 10px 28px rgba(0,0,0,0.54), inset 0 1px 0 rgba(255,255,255,0.055), inset 0 -1px 0 rgba(0,0,0,0.72), inset 0 0 0 1px rgba(0,0,0,0.42)'
        }}
      >

        <div className="cognitive-overlay-content flex flex-col h-full w-full">
          {/* Header Area */}
          <div 
            className="flex flex-col flex-shrink-0 px-[14px] py-[10px] relative z-10"
            style={{
              background: 'linear-gradient(180deg, #0C0F13 0%, #060709 100%)',
              borderBottom: '1px solid rgba(244,240,232,0.07)',
              boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.42)',
              opacity: 1
            }}
          >
            <div className="flex justify-between items-center mb-1 flex-shrink-0 relative">
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[rgba(244,240,232,0.58)] relative">COMPUTATION TRACE</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[rgba(244,240,232,0.46)]">BUFFER 64L</div>
            </div>
            
            {/* Status Row */}
            <div className="flex items-center gap-1.5 flex-shrink-0 relative">
              <div 
                className={`w-[5px] h-[5px] rounded-full transition-colors duration-300 ${currentPhase.phaseName.includes('UNSTABLE') ? 'bg-[#FF4B3E]' : currentPhase.phaseName.includes('STABLE') ? 'bg-[#6EE7A8]' : 'bg-[#FF6A2A]'}`} 
                style={{ opacity: 0.55 }} 
              />
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[rgba(244,240,232,0.46)]">RUNNING</div>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-[14px] pb-[14px]">
            {/* PINNED OUTPUT */}
            <div 
              className="flex-shrink-0 relative overflow-hidden"
              style={{
                backgroundColor: '#010202',
                background: 'linear-gradient(180deg, #050607 0%, #020303 48%, #000101 100%)',
                border: '1px solid rgba(244,240,232,0.09)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.035), inset 0 -1px 0 rgba(0,0,0,0.68), 0 8px 18px rgba(0,0,0,0.32)',
                borderRadius: '10px',
                padding: '8px 9px',
                marginTop: '8px',
                marginBottom: '8px',
                opacity: 1,
                minHeight: '84px',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
                mixBlendMode: 'normal'
              }}
            >
               <div className="flex items-center gap-1.5 mb-1 relative">
                  <div className="w-[1px] h-[8px] bg-[rgba(223,165,91,0.64)]"></div>
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-[rgba(223,165,91,0.64)] leading-none mt-0.5">PINNED OUTPUT</div>
               </div>
               <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-[rgba(244,240,232,0.48)] mb-1.5 leading-none relative">
                  {currentPhase.pinnedOutputState.includes('applied') ? 'CONSTRAINT SET VERIFIED' : 'LEARNED CONSTRAINTS'}
               </div>

               <div className="relative h-[48px]">
                  {/* Empty State */}
                  <div 
                    className={prefersReducedMotion ? "absolute inset-0" : "fade-transition absolute inset-0"}
                    style={{ opacity: currentPhase.pinnedOutputState === 'empty' || currentPhase.pinnedOutputState === 'reset' ? 1 : 0, pointerEvents: 'none' }}
                  >
                    <div className="font-mono text-[9px] text-[rgba(244,240,232,0.46)]">buffer empty</div>
                  </div>

                  {/* Constraints Container */}
                  <div 
                    className={prefersReducedMotion ? "absolute w-full flex flex-col gap-1.5" : "fade-transition absolute w-full flex flex-col gap-1.5"}
                    style={{ opacity: (currentPhase.pinnedOutputState !== 'empty' && currentPhase.pinnedOutputState !== 'reset') ? 1 : 0, pointerEvents: 'none' }}
                  >
                    {/* C1 State */}
                    <div className={prefersReducedMotion ? "flex flex-col" : "fade-transition flex flex-col"}
                         style={{ opacity: currentPhase.pinnedOutputState.includes('c1') ? 1 : 0 }}>
                      <div className="flex justify-between items-center mb-0.5">
                        <div className="font-mono text-[9px] uppercase text-[rgba(244,240,232,0.70)] leading-none">C₁</div>
                        <div className={`font-mono text-[8px] uppercase leading-none ${currentPhase.pinnedOutputState.includes('applied') ? 'text-[rgba(110,231,168,0.78)]' : 'text-[rgba(223,165,91,0.78)]'}`}>
                           {currentPhase.pinnedOutputState.includes('applied') ? 'APPLIED' : 'LEARNED'}
                        </div>
                      </div>
                      <div className="font-sans text-[9.5px] min-[1024px]:text-[10px] text-[rgba(244,240,232,0.78)] leading-[1.35]">
                         {currentPhase.pinnedOutputState.includes('applied') ? 'interior continuity restored' : 'hollow span ≠ clean structure'}
                      </div>
                    </div>

                    {/* C2 State */}
                    <div className={prefersReducedMotion ? "flex flex-col" : "fade-transition flex flex-col"}
                         style={{ opacity: currentPhase.pinnedOutputState.includes('c2') ? 1 : 0 }}>
                      <div className="flex justify-between items-center mb-0.5">
                        <div className="font-mono text-[9px] uppercase text-[rgba(244,240,232,0.70)] leading-none">C₂</div>
                        <div className={`font-mono text-[8px] uppercase leading-none ${currentPhase.pinnedOutputState.includes('applied') ? 'text-[rgba(110,231,168,0.78)]' : 'text-[rgba(223,165,91,0.78)]'}`}>
                           {currentPhase.pinnedOutputState.includes('applied') ? 'APPLIED' : 'LEARNED'}
                        </div>
                      </div>
                      <div className="font-sans text-[9.5px] min-[1024px]:text-[10px] text-[rgba(244,240,232,0.78)] leading-[1.35]">
                         {currentPhase.pinnedOutputState.includes('applied') ? 'center weight resolved' : 'compressed fit ≠ stable center'}
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* ROLLING TRACE BUFFER */}
            <div className="trace-buffer-scroll flex-1 font-mono text-[9px] tracking-[0.1em] text-[rgba(244,240,232,0.88)] opacity-80 overflow-hidden relative">
              <div className="absolute bottom-0 w-full flex flex-col justify-end">
                {traceLines.map((line, idx) => {
                   const age = traceLines.length - 1 - idx;
                   const lineOpacity = prefersReducedMotion ? 1 : Math.max(0.2, 1 - age * 0.25);
                   return (
                     <div key={`${currentPhase.traceGroup}-${idx}`} className={prefersReducedMotion ? "mb-0.5" : "trace-line-enter mb-0.5"} style={{ opacity: lineOpacity }}>
                       {line}
                     </div>
                   );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LEFT: NULLIXFORGE PRINCIPLE */}
      <div 
        className="cognitive-overlay-panel panel-principle overflow-hidden flex"
        style={{
          backgroundColor: '#050607',
          background: 'linear-gradient(180deg, #0D1014 0%, #07090C 48%, #030405 100%)',
          border: '1px solid rgba(244,240,232,0.115)',
          boxShadow: '0 28px 78px rgba(0,0,0,0.66), inset 0 1px 0 rgba(255,255,255,0.055), inset 0 -1px 0 rgba(0,0,0,0.62)'
        }}
      >

        <div className="cognitive-overlay-content flex flex-col justify-center pl-4 w-full relative">
          <div className="flex justify-between items-center mb-2">
            <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[rgba(244,240,232,0.58)]">NULLIXFORGE PRINCIPLE</div>
          </div>
          <div className="relative h-[48px] flex items-center">
             {OVERLAY_PHASES.map((p, idx) => (
                <div 
                  key={p.principleId + "-" + idx} 
                  className={prefersReducedMotion ? "absolute inset-0 flex items-center" : "fade-transition absolute inset-0 flex items-center"}
                  style={{
                    opacity: currentPhase.principle === p.principle && currentPhase.principleId === p.principleId ? 1 : 0,
                    transform: prefersReducedMotion ? 'none' : (currentPhase.principle === p.principle && currentPhase.principleId === p.principleId ? 'translateY(0)' : 'translateY(-4px)'),
                    pointerEvents: 'none'
                  }}
                >
                  <div className="font-sans text-[12px] leading-[1.45] tracking-[-0.01em] text-[rgba(244,240,232,0.88)]">
                    {p.principle}
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </>
  );
}
