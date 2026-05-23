import { motion } from 'motion/react';

export function ApproachSection() {
  const approaches = [
    { title: "Discard the superfluous.", desc: "Every function must earn its place. Complexity is a liability." },
    { title: "Data density prioritized.", desc: "Operators need immediate information, not excessive padding." },
    { title: "Typography is interface.", desc: "Good type scales down to code panels and up to hero spans." },
    { title: "Latency as a fatal error.", desc: "Milliseconds compound into institutional risk and friction." }
  ];

  return (
    <section id="approach" className="py-[64px] pb-[128px] px-6 md:px-[24px] bg-[#0a0a0a] border-t border-[#212327]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-start">
        <div className="mb-[64px] max-w-[800px]">
          <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase mb-[16px]">
            Approach
          </span>
          <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
            Building with rigorous intention.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {approaches.map((item, i) => (
            <div key={i} className="flex flex-col bg-[#191919] border border-[#212327] rounded-[8px] p-[24px]">
              <div className="font-mono text-[14px] text-[#dadbdf] uppercase tracking-[1.4px] mb-[24px]">
                Phase 0{i + 1}
              </div>
              <h3 className="text-[24px] leading-[32px] tracking-[-0.6px] font-normal text-white mb-[12px]">{item.title}</h3>
              <p className="text-[16px] text-[#dadbdf] leading-[24px] font-normal">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-[48px] w-full flex justify-start">
          <a href="#/approach" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
            Read the Full Doctrine
          </a>
        </div>
      </div>
    </section>
  );
}
