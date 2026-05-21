import { motion } from 'motion/react';

export function IntroSection() {
  return (
    <section className="py-[64px] px-6 md:px-[24px] border-t border-[#212327] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-[64px] max-w-[800px]"
        >
          <span className="font-mono text-[14px] text-[#ffffff] mb-[16px] block tracking-[1.4px] uppercase">
            Foundation
          </span>
          <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-[#ffffff] mb-[24px]">
            Design as a byproduct of rigorous engineering.
          </h2>
          <p className="text-[18px] text-[#dadbdf] leading-[28px] tracking-[0px] font-normal">
            NullixForge operates at the intersection of systems architecture and interface design. We don't do "make it pop"—we do "make it unbreakable." Our work is characterized by negative space, typographic hierarchy, and code that performs predictably under extreme conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          <div className="p-[24px] border border-[#212327] bg-[#191919] rounded-[8px] shadow-none">
            <h3 className="text-[20px] font-normal text-[#ffffff] mb-[12px] tracking-[0px]">Architecture</h3>
            <p className="text-[16px] text-[#dadbdf] leading-[24px]">Scalable, zero-latency infrastructures designed to outlast short-term trends.</p>
          </div>
          <div className="p-[24px] border border-[#212327] bg-[#191919] rounded-[8px] shadow-none">
            <h3 className="text-[20px] font-normal text-[#ffffff] mb-[12px] tracking-[0px]">Interface</h3>
            <p className="text-[16px] text-[#dadbdf] leading-[24px]">High-density data displays and precision controls for expert operators.</p>
          </div>
          <div className="p-[24px] border border-[#212327] bg-[#191919] rounded-[8px] shadow-none">
            <h3 className="text-[20px] font-normal text-[#ffffff] mb-[12px] tracking-[0px]">Reliability</h3>
            <p className="text-[16px] text-[#dadbdf] leading-[24px]">Hardened components, exhaustive testing, and graceful degradation by default.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

