import React, { useState } from 'react';

export function FeatureSpaceLab() {
  const [activeTab, setActiveTab] = useState<'Protocol' | 'Feature Contract' | 'Validation' | 'Stability'>('Protocol');
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const Tooltip = ({ id, text, children }: { id: string, text: string, children: React.ReactNode }) => (
    <span 
      className="relative cursor-help underline decoration-emerald-500/40 underline-offset-[3px] decoration-dashed hover:decoration-emerald-500 transition-colors"
      onMouseEnter={() => setHoveredTooltip(id)}
      onMouseLeave={() => setHoveredTooltip(null)}
    >
      {children}
      {hoveredTooltip === id && (
         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 bg-[#111111] border border-[#2a2a2a] text-[#e5e5e5] text-[10px] font-sans leading-relaxed rounded z-50 shadow-[0_10px_30px_rgba(0,0,0,0.15)] pointer-events-none text-left">
           {text}
         </div>
      )}
    </span>
  );

  const panelOpacity = (tabs: string[]) => {
    return tabs.includes(activeTab) ? 'opacity-100 drop-shadow-sm' : 'opacity-40 grayscale';
  };

  const flowSteps = [
    { label: 'Raw accident data', sub: '12,316 × 32' },
    { label: 'Surgical audit', sub: 'quality · missingness · risk' },
    { label: 'Target lock', sub: 'Feature_032 → y only' },
    { label: 'CatBoost-native prep', sub: '28 cat · 6 numeric · no one-hot' },
    { label: 'Validation gate', sub: 'Macro-F1 · recall · gap scan' },
    { label: 'Stability gate', sub: 'seed + CV stress test' },
    { label: 'Locked final test', sub: 'one-time exam' },
  ];

  return (
    <div className="accident-ml-protocol font-mono w-full h-full flex flex-col overflow-y-auto lg:overflow-hidden text-[10px] bg-[#0a0a0a] text-[#a3a3a3] rounded-[16px] border border-[#222222] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative z-10">
      <style>{`
        .accident-ml-protocol-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: center;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .accident-ml-protocol ::-webkit-scrollbar {
          width: 6px;
        }
        .accident-ml-protocol ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .accident-ml-protocol ::-webkit-scrollbar-thumb {
          background: #222222; 
          border-radius: 3px;
        }
        .accident-ml-protocol ::-webkit-scrollbar-thumb:hover {
          background: #333333;
        }
      `}</style>
      
      {/* 1) TOP HEADER */}
      <header className="flex flex-col border-b border-[#222222] bg-[#0a0a0a] shrink-0 z-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end px-6 pt-5 pb-4 gap-5">
          <div>
            <h2 className="text-[#ffffff] text-[18px] font-sans font-medium tracking-tight flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 bg-indigo-600 shadow-sm"></span>
              Accident Severity ML Protocol
            </h2>
            <p className="text-[#a3a3a3] text-[12px] font-sans tracking-wide">Leakage-safe CatBoost architecture for safety-critical multiclass prediction.</p>
            <div className="text-[10px] text-[#888888] font-sans italic mt-1">Problem-shaped modeling · validation gates · locked-test discipline</div>
            
            <div className="flex flex-wrap items-center gap-2 mt-4 text-[9px] uppercase tracking-widest text-[#a3a3a3] font-sans">
              <span className="bg-[#111111] border border-[#2a2a2a] text-[#d4d4d4] px-2 py-1 rounded-sm">12,316 rows</span>
              <span className="bg-[#111111] border border-[#2a2a2a] text-[#d4d4d4] px-2 py-1 rounded-sm">32 fields</span>
              <span className="bg-[#111111] border border-[#2a2a2a] text-[#d4d4d4] px-2 py-1 rounded-sm">Multiclass</span>
              <span className="bg-[#2a1111] border border-[#4a1c1c] text-[#ff4d4f] px-2 py-1 rounded-sm">Critical class: Fatal injury</span>
              <span className="bg-[#111111] border border-[#2a2a2a] text-[#d4d4d4] px-2 py-1 rounded-sm"><Tooltip id="target-lock" text="Target exists only as y; forbidden in X and feature-role lists.">Target locked: Feature_032</Tooltip></span>
              <span className="bg-[#111111] border border-[#2a2a2a] text-[#d4d4d4] px-2 py-1 rounded-sm"><Tooltip id="locked-test" text="Final test is used once after model selection, never during tuning.">Test locked</Tooltip></span>
            </div>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-5 lg:gap-4 mt-2 lg:mt-0 w-full lg:w-auto">
            <div className="flex flex-col lg:items-end gap-1 font-sans text-left lg:text-right w-full lg:w-auto bg-[#111111] lg:bg-transparent p-3 lg:p-0 rounded border border-[#222222] lg:border-none">
              <div className="text-[13px] text-[#ffffff]">Validated F1-score: <span className="font-mono text-emerald-600 font-semibold ml-1">0.80</span></div>
              <div className="text-[11px] text-[#a3a3a3]">Recall guardrail: <span className="font-mono text-indigo-600 font-semibold ml-1">75%</span></div>
            </div>
            <div className="flex gap-1.5 flex-wrap w-full lg:w-auto">
              {['Protocol', 'Feature Contract', 'Validation', 'Stability'].map(m => (
                <button 
                  key={m}
                  onClick={() => setActiveTab(m as any)}
                  className={`flex-1 lg:flex-none px-3 py-1.5 text-[9px] lg:text-[10px] uppercase tracking-widest border transition-colors font-sans font-medium whitespace-nowrap ${
                    activeTab === m
                      ? 'border-emerald-500/40 text-emerald-700 bg-emerald-50' 
                      : 'border-[#222222] text-[#888888] hover:text-[#e5e5e5] hover:bg-white/[0.04]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 2) CENTRAL HERO */}
      <div className={`accident-ml-protocol-grid relative border-b border-[#222222] px-6 py-6 lg:py-8 flex flex-col items-center justify-center transition-all duration-500 shrink-0 z-10 ${panelOpacity(['Protocol'])}`}>
        <div className="flex flex-row items-start justify-between w-full max-w-[1000px] relative z-10 gap-x-2 overflow-x-auto hide-scrollbar pb-2">
           <div className="absolute top-[4px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -z-0"></div>
           {flowSteps.map((step, i) => (
             <div key={i} className="flex flex-col items-center shrink-0 w-[120px] relative">
               <div className={`w-2.5 h-2.5 rounded-full z-10 mb-3 transition-colors ${i === flowSteps.length - 1 ? 'bg-red-500 shadow-sm border border-red-500' : 'bg-[#0a0a0a] border border-emerald-500/50 shadow-sm'}`}></div>
               <div className="text-[10px] text-[#ffffff] text-center font-sans tracking-wide leading-tight mb-1 h-6 flex items-end justify-center">{step.label}</div>
               <div className="text-[8px] text-[#a3a3a3] text-center font-mono tracking-widest uppercase mt-0.5">{step.sub}</div>
             </div>
           ))}
        </div>
        <div className="mt-6 text-[9px] text-[#888888] font-sans tracking-widest uppercase bg-[#0a0a0a] px-3 py-1 border border-[#222222] rounded-sm">Every decision is gated before the model earns trust.</div>
      </div>

      {/* Grid of Panels */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-0 overflow-y-auto hide-scrollbar z-20">
        
        {/* COLUMN 1 */}
        <div className="flex flex-col border-r border-[#222222]">
          {/* Surgical Data Audit */}
          <div className={`p-5 lg:p-6 border-b border-[#222222] flex flex-col gap-4 transition-all duration-500 ${panelOpacity(['Feature Contract'])}`}>
            <div className="border-b border-[#222222] pb-3 mb-1">
              <h3 className="text-[12px] font-sans text-[#ffffff] font-semibold">Surgical Data Audit</h3>
              <p className="text-[9px] text-[#a3a3a3] font-sans mt-0.5">Before modeling, every signal is inspected.</p>
            </div>
            <div className="grid grid-cols-[1fr_80px_45px] items-center gap-y-3 gap-x-2 text-[10px] font-sans">
              {[
                { name: "Accuracy", status: "audited", val: 85 },
                { name: "Completeness", status: "stable", val: 92 },
                { name: "Consistency", status: "audited", val: 88 },
                { name: "Timeliness", status: "audited", val: 89 },
                { name: "Believability", status: "review", val: 78 },
                { name: "Interpretability", status: "stable", val: 95 }
              ].map(row => (
                <React.Fragment key={row.name}>
                  <div className="text-[#e5e5e5] truncate tracking-wide">{row.name}</div>
                  <div className="h-1 bg-[#222222] w-full rounded-full overflow-hidden">
                    <div className="h-full bg-[#5e6ad2]" style={{width: `${row.val}%`}}></div>
                  </div>
                  <div className={`text-[8px] uppercase tracking-widest text-right ${row.status === 'review' ? 'text-[#f5a623]' : 'text-[#10b981]'}`}>{row.status}</div>
                </React.Fragment>
              ))}
            </div>
            <div className="mt-4 border-t border-[#222222] pt-4">
              <div className="text-[9px] text-[#888888] uppercase tracking-widest mb-2.5 font-semibold font-sans">Risk Dimensions</div>
              <div className="flex flex-wrap gap-2 text-[9px] text-[#d4d4d4] font-mono tracking-wide">
                <span className="bg-[#111111] border border-[#222222] px-1.5 py-0.5 rounded">missingness</span>
                <span className="bg-[#111111] border border-[#222222] px-1.5 py-0.5 rounded">type stability</span>
                <span className="bg-[#111111] border border-[#222222] px-1.5 py-0.5 rounded">cardinality</span>
                <span className="bg-[#111111] border border-[#222222] px-1.5 py-0.5 rounded">leakage</span>
                <span className="bg-[#111111] border border-[#222222] px-1.5 py-0.5 rounded">overfitting</span>
              </div>
            </div>
          </div>

          {/* Feature Role Contract */}
          <div className={`p-5 lg:p-6 border-b lg:border-b-0 border-[#222222] flex flex-col gap-4 transition-all duration-500 h-full ${panelOpacity(['Feature Contract'])}`}>
            <div className="border-b border-[#222222] pb-3 mb-1">
              <h3 className="text-[12px] font-sans text-[#ffffff] font-semibold">Feature Role Contract</h3>
              <p className="text-[9px] text-[#a3a3a3] font-sans mt-0.5">Every feature has a controlled role.</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { group: "Target-only", label: "Feature_032", note: "isolated from X", color: "#dc2626" },
                { group: "Native categorical", label: "28 features", note: "passed directly to CatBoost", color: "#059669" },
                { group: "Numeric", label: "6 features", note: "NaN preserved", color: "#4f46e5" },
                { group: "Time-derived", label: "4 signals", note: "hour · minute · minute_of_day · bucket", color: "#6b7280" }
              ].map(role => (
                <div key={role.group} className="flex flex-col gap-0.5 bg-[#111111] p-2.5 rounded border border-[#222222]">
                  <div className="text-[10px] font-sans flex items-center justify-between">
                    <span className="text-[#ffffff] tracking-wide font-medium">{role.group}</span>
                    <span style={{color: role.color}} className="font-mono tracking-wider">{role.label}</span>
                  </div>
                  <div className="text-[9px] text-[#888888] font-sans">{role.note}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[9px] text-[#a3a3a3] border-l-2 border-[#222222] pl-3 flex flex-col gap-1.5 font-sans tracking-wide">
              <div>• One-hot disabled for CatBoost</div>
              <div>• Raw time dropped after derivation</div>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col border-r border-[#222222]">
          {/* Validation Discipline */}
          <div className={`p-5 lg:p-6 border-b border-[#222222] flex flex-col gap-4 transition-all duration-500 ${panelOpacity(['Validation'])}`}>
            <div className="border-b border-[#222222] pb-3 mb-1">
              <h3 className="text-[12px] font-sans text-[#ffffff] font-semibold">Validation Discipline</h3>
              <div className="text-[9px] text-[#a3a3a3] font-sans mt-0.5">
                <Tooltip id="accuracy-trap" text="High accuracy can hide failure on rare safety-critical classes.">Accuracy is not a primary decision metric.</Tooltip>
              </div>
            </div>
            
            <div className="bg-[#111111] border border-[#222222] rounded p-3.5 mb-1">
              <div className="text-[9px] uppercase tracking-widest text-[#888888] font-sans mb-3 font-semibold">Metric Priority</div>
              <div className="flex flex-col gap-2 text-[9px] text-[#a3a3a3] font-mono tracking-wide">
                <div className="text-[#4f46e5] font-medium">1. Macro-F1</div>
                <div className="text-[#059669] font-medium">2. Critical-class recall</div>
                <div className="text-[#ffffff] font-medium">3. Balanced Accuracy</div>
                <div className="text-[#888888]">4. Confusion Matrix</div>
                <div className="text-[#333333]">5. Accuracy last</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 mt-2">
              <div className="text-[10px] text-[#ffffff] font-sans flex justify-between items-end border-b border-[#222222] pb-1.5 font-medium">
                Validated F1-score <span className="font-mono text-[#059669] text-[11px] font-semibold">0.80</span>
              </div>
              
              <div className="flex flex-col gap-2 mt-1">
                <div className="text-[10px] text-[#ffffff] font-sans flex justify-between items-end font-medium">
                  Worst-case recall guardrail <span className="font-mono text-[#4f46e5] text-[11px] font-semibold">75%</span>
                </div>
                <div className="h-1 bg-[#222222] w-full relative rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-[#222222] w-full"></div>
                  <div className="absolute left-0 top-0 h-full bg-[#e0e7ff] w-[75%] border-r border-[#4f46e5]"></div>
                  <div className="absolute left-[75%] top-0 h-full bg-transparent w-[25%]"></div>
                </div>
                <div className="flex justify-between w-[75%] text-[8px] text-[#888888] font-mono">
                  <span>0%</span>
                  <span className="translate-x-1/2">floor</span>
                </div>
              </div>
            </div>
            
            <div className="text-[9px] text-[#dc2626] font-sans italic mt-3 leading-relaxed">
              False negatives on the critical class are treated as high-cost errors.
            </div>
          </div>

          {/* Safety Gates */}
          <div className={`p-5 lg:p-6 border-b border-[#222222] flex flex-col gap-4 transition-all duration-500 ${panelOpacity(['Validation'])}`}>
            <div className="border-b border-[#222222] pb-3 mb-1">
              <h3 className="text-[12px] font-sans text-[#ffffff] font-semibold">Safety Gates</h3>
              <p className="text-[9px] text-[#a3a3a3] font-sans mt-0.5">Leakage is tested structurally, statistically, and behaviorally.</p>
            </div>
            
            <div className="flex flex-col gap-3.5 font-sans">
              {[
                { label: "Target removed from X", status: "PASS", type: "pass" },
                { label: "Target absent from feature lists", status: "PASS", type: "pass" },
                { label: "Schema signature locked", status: "LOCKED", type: "locked" },
                { label: "Duplicate X conflict check", status: "PASS", type: "pass" },
                { label: "Missingness-vs-target review", status: "REVIEW", type: "review" },
                { label: "Shallow-tree leakage probe", status: "PASS", type: "pass", tooltip: "leakage-probe" },
                { label: "Prediction-time availability review", status: "REVIEW", type: "review" }
              ].map(gate => (
                <div key={gate.label} className="flex justify-between items-end border-b border-[#1a1a1a] pb-1.5">
                  {gate.tooltip ? (
                     <span className="text-[10px] text-[#e5e5e5] tracking-wide font-medium"><Tooltip id={gate.tooltip} text="Simple models and proxy checks expose suspicious target leakage.">{gate.label}</Tooltip></span>
                  ) : (
                     <span className="text-[10px] text-[#e5e5e5] tracking-wide font-medium">{gate.label}</span>
                  )}
                  <span className={`text-[9px] font-mono tracking-widest font-semibold ${gate.type === 'pass' ? 'text-[#059669]' : gate.type === 'locked' ? 'text-[#0ea5e9]' : 'text-[#d97706]'}`}>
                    {gate.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Model Path */}
          <div className={`p-5 lg:p-6 border-b lg:border-b-0 border-[#222222] flex flex-col gap-4 transition-all duration-500 h-full ${panelOpacity(['Protocol'])}`}>
            <div className="border-b border-[#222222] pb-3 mb-1">
              <h3 className="text-[12px] font-sans text-[#ffffff] font-semibold">Model Path</h3>
              <p className="text-[9px] text-[#a3a3a3] font-sans mt-0.5">Selected logic and context challenges.</p>
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#059669] mb-3 font-semibold">CatBoostClassifier</div>
              <div className="text-[9px] text-[#a3a3a3] font-sans flex flex-col gap-1.5 ml-2 border-l border-[#222222] pl-3 tracking-wide">
                <div>• categorical-heavy tabular structure</div>
                <div>• <Tooltip id="native-cat" text="CatBoost receives categorical predictors directly instead of generic one-hot encoding.">native categorical handling</Tooltip></div>
                <div>• no one-hot preprocessing</div>
                <div>• controlled missing policy</div>
                <div>• validation-only tuning</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#222222]">
              <div className="text-[9px] text-[#888888] uppercase tracking-widest font-sans mb-3 font-semibold">Context Challengers</div>
              <div className="text-[9px] text-[#d4d4d4] font-mono flex flex-col gap-2">
                <div className="flex items-center justify-between font-medium">Logistic <span className="text-[#333333] text-[8px] uppercase tracking-widest font-normal">sanity</span></div>
                <div className="flex items-center justify-between font-medium">Shallow tree <span className="text-[#333333] text-[8px] uppercase tracking-widest font-normal">probe</span></div>
                <div className="flex items-center justify-between font-medium">RandomForest <span className="text-[#333333] text-[8px] uppercase tracking-widest font-normal">nonlinear</span></div>
                <div className="flex items-center justify-between font-medium">XGBoost/LGBM <span className="text-[#333333] text-[8px] uppercase tracking-widest font-normal">benchmark</span></div>
              </div>
              <div className="text-[9px] text-[#888888] font-sans italic mt-4 leading-relaxed">
                Challengers inform the protocol; they do not override the locked validation gate.
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col">
          {/* Tuning Sequence */}
          <div className={`p-5 lg:p-6 border-b border-[#222222] flex flex-col gap-4 transition-all duration-500 ${panelOpacity(['Stability'])}`}>
            <div className="border-b border-[#222222] pb-3 mb-1">
              <h3 className="text-[12px] font-sans text-[#ffffff] font-semibold">Focused CatBoost Tuning</h3>
              <p className="text-[9px] text-[#a3a3a3] font-sans mt-0.5">Tuning follows the problem, not a preset grid.</p>
            </div>
            <div className="flex flex-col gap-4 font-sans py-1">
              {[
                { step: 1, label: "Class weights" },
                { step: 2, label: "Capacity control" },
                { step: 3, label: "Regularization + randomness" },
                { step: 4, label: "Categorical interaction + missing policy" }
              ].map(t => (
                <div key={t.step} className="flex items-start gap-3.5">
                  <div className="w-4 h-4 rounded bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[9px] text-[#ffffff] font-mono shrink-0 mt-0.5 shadow-sm">
                    {t.step}
                  </div>
                  <div className="text-[10px] text-[#e5e5e5] pt-[2px] tracking-wide font-medium">{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stability & Field-Readiness */}
          <div className={`p-5 lg:p-6 border-b lg:border-b-0 border-[#222222] flex flex-col gap-4 transition-all duration-500 h-full ${panelOpacity(['Stability'])}`}>
            <div className="border-b border-[#222222] pb-3 mb-1">
              <h3 className="text-[12px] font-sans text-[#ffffff] font-semibold">Stability Before Trust</h3>
              <p className="text-[9px] text-[#a3a3a3] font-sans mt-0.5">A model must be stable before it is trusted.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-3 font-sans mt-1">
              {[
                "Seed stability",
                "Stratified CV stability",
                "Overfit gap scan",
                "Prediction distribution",
                "Probability sanity",
                "Leakage context"
              ].map(check => (
                <div key={check} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#059669] rounded-full shrink-0"></span>
                  <span className="text-[9px] text-[#e5e5e5] leading-tight tracking-wide font-medium">{check}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-4 pt-5 border-t border-[#222222]">
              <div className="flex items-center gap-3 bg-[#111111] border border-[#222222] p-3 rounded">
                <div className="w-1.5 h-1.5 bg-[#4f46e5] shrink-0"></div>
                <div className="text-[10px] text-[#ffffff] font-sans tracking-wide font-medium">Final refit only after <Tooltip id="stability-gate" text="Candidate recipe is stress-tested across seeds and folds before final refit.">stability</Tooltip></div>
              </div>
              <div className="flex items-center gap-3 bg-[#111111] border border-[#222222] p-3 rounded">
                <div className="w-1.5 h-1.5 bg-[#dc2626] shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.2)]"></div>
                <div className="text-[10px] text-[#ffffff] font-sans tracking-wide font-medium">Locked test once</div>
              </div>
              <div className="text-[9px] text-[#888888] font-sans italic mt-3 text-center tracking-wide">
                Locked test = one-time final exam · no post-test tuning.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 10) BOTTOM ARTIFACT STRIP */}
      <footer className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-t border-[#222222] bg-[#1a1a1a] shrink-0 z-20 px-6 py-5 gap-3 lg:gap-0">
        <div className="flex items-center gap-4">
          <h4 className="text-[10px] text-[#e5e5e5] font-sans uppercase tracking-widest font-semibold lg:mr-2">Traceable ML Artifacts</h4>
          <div className="hidden lg:flex items-center gap-4 text-[9px] text-[#888888] font-mono tracking-wide">
            <span>audit log</span>
            <span className="text-[#444444]">—</span>
            <span>prep schema</span>
            <span className="text-[#444444]">—</span>
            <span>pool QA</span>
            <span className="text-[#444444]">—</span>
            <span>validation board</span>
            <span className="text-[#444444]">—</span>
            <span>tuning recipe</span>
            <span className="text-[#444444]">—</span>
            <span>stability report</span>
            <span className="text-[#444444]">—</span>
            <span className="text-[#ffffff] font-medium">model artifact</span>
          </div>
        </div>
        <div className="text-[9px] text-[#888888] font-sans tracking-widest uppercase lg:lowercase font-medium">
          schema · audit · metrics · model
        </div>
      </footer>
    </div>
  );
}


