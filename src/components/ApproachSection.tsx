import { motion } from 'motion/react';

export function ApproachSection() {
  const approaches = [
    { title: "Strategic Foundation", desc: "We eliminate assumptions and pre-packaged templates. Every architectural decision is evaluated to ensure it directly serves the core business objective before a single line of code is written." },
    { title: "Structural Integrity", desc: "Before the UI is developed, the foundational architecture must be secure. Data pipelines, logic processing, and system flows are built for absolute stability under load." },
    { title: "Optimized User Experience", desc: "End-users should never struggle with backend complexity. We refine every interaction to deliver speed, clarity, and purpose." },
    { title: "Continuous Lifecycle", desc: "Deployment is just the beginning. Our systems are designed to adapt, scale, and seamlessly support your business long-term without accumulating technical debt." }
  ];

  return (
    <section id="approach" className="py-[64px] pb-[128px] px-6 md:px-[24px] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-start">
        <div className="mb-[64px] max-w-[800px]">
          <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase mb-[16px]">
            Methodology
          </span>
          <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
            Engineered with rigorous precision.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {approaches.map((item, i) => (
            <div key={i} className="flex flex-col bg-[#191919] border border-[#212327] rounded-[8px] p-[24px]">
              <div className="font-mono text-[14px] text-[#dadbdf] uppercase tracking-[1.4px] mb-[24px]">
                Phase 0{i + 1}
              </div>
              <h3 className="text-[20px] leading-[28px] tracking-[-0.4px] font-normal text-white mb-[12px]">{item.title}</h3>
              <p className="text-[14px] text-[#dadbdf] leading-[22px] font-normal">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-[48px] w-full flex justify-start">
          <a href="#/approach" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
            Read the Full Methodology
          </a>
        </div>
      </div>
    </section>
  );
}
