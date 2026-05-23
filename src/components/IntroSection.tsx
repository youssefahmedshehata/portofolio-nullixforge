import { motion } from 'motion/react';
import { TechStackStrip } from './TechStackStrip';

export function IntroSection() {
  return (
    <section className="relative py-[64px] border-t border-black/5 bg-white overflow-hidden">
      <TechStackStrip />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-[24px] pt-[64px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px]"
        >
          <span className="font-mono text-[14px] text-[#171717] mb-[16px] block tracking-[1.4px] uppercase">
            Foundation
          </span>
          <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-[#171717] mb-[24px]">
            Design as a byproduct of rigorous engineering.
          </h2>
          <p className="text-[18px] text-neutral-500 leading-[28px] tracking-[0px] font-normal">
            NullixForge operates at the intersection of systems architecture and interface design. We don't do "make it pop"—we do "make it unbreakable." Our work is characterized by negative space, typographic hierarchy, and code that performs predictably under extreme conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


