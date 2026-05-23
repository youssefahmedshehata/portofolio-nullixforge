import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-[24px] pt-[128px] pb-[64px] relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col text-left">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[72px] lg:text-[96px] leading-[1] tracking-[-2.4px] text-white max-w-[900px] mb-[24px] font-normal"
        >
          Institutional technology orchestration.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#dadbdf] text-[18px] max-w-[600px] mb-[48px] font-normal leading-[28px]"
        >
          We build infrastructure that scales with quiet confidence. Precise, calm, reliable digital systems for enterprise teams.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-[12px]"
        >
          <button className="flex items-center justify-center px-[24px] py-[8px] rounded-full bg-white border border-white text-[#0a0a0a] text-[14px] leading-[20px] font-normal transition-colors cursor-pointer w-full sm:w-auto hover:bg-[#fafaf7]">
            Sign up now
          </button>
          <button className="flex items-center justify-center px-[24px] py-[8px] rounded-full bg-transparent border border-white/25 text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer w-full sm:w-auto">
            Read announcement
          </button>
        </motion.div>
      </div>
    </section>
  );
}
