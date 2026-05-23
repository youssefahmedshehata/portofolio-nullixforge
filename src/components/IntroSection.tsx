import { motion } from 'motion/react';

export function IntroSection() {
  return (
    <section className="bg-[#0a0a0a] py-[64px] border-t border-[#212327]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[24px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mb-[64px]"
        >
          <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase mb-[16px]">
            Foundation
          </span>
          <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
            Design as a byproduct of rigorous engineering.
          </h2>
          <p className="text-[18px] leading-[28px] text-[#dadbdf] font-normal m-0">
            NullixForge operates at the intersection of systems architecture and interface design. We don't do "make it pop"—we do "make it unbreakable." Our work is characterized by negative space, typographic hierarchy, and code that performs predictably under extreme conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#191919] border border-[#212327] rounded-[8px] p-[24px]"
          >
            <h3 className="text-[32px] leading-[36px] font-normal tracking-[-0.6px] text-white mb-[16px]">
              Systematic Layout
            </h3>
            <p className="text-[16px] leading-[24px] text-[#dadbdf] font-normal mb-[24px]">
              Every interface is built on a precise mathematical foundation. We use strict grids, consistent spacing tokens, and structural integrity that scales gracefully from mobile viewports to ultra-wide displays.
            </p>
            <button className="inline-flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
              Explore layout
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#191919] border border-[#212327] rounded-[8px] p-[24px]"
          >
            <h3 className="text-[32px] leading-[36px] font-normal tracking-[-0.6px] text-white mb-[16px]">
              Type Hierarchy
            </h3>
            <p className="text-[16px] leading-[24px] text-[#dadbdf] font-normal mb-[24px]">
              Typography is the interface. We employ aggressive negative tracking at display sizes to create a monumental rhythm, paired with highly legible monospace styles for technical readability and metadata.
            </p>
            <button className="inline-flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
              View typography
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



