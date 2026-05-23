import { motion } from 'motion/react';

import { FeatureSpaceLab } from './FeatureSpaceLab';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 relative overflow-hidden bg-[#fafafa]">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 mt-12"
        >
          <span className="font-mono text-[13px] text-[#171717] tracking-[0.05em] uppercase border border-[#eaeaea] bg-[#ffffff] rounded-full px-3 py-1.5 inline-flex items-center">
            NullixForge Core
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[72px] lg:text-[96px] leading-[1.02] tracking-[-0.03em] text-[#171717] max-w-5xl mb-8 font-semibold"
        >
          Institutional technology orchestration.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#4d4d4d] text-[18px] md:text-[20px] max-w-2xl mb-12 font-normal leading-[1.6]"
        >
          We build infrastructure that scales with quiet confidence. Precise, calm, reliable digital systems for enterprise teams.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="flex items-center justify-center px-7 py-3 rounded-full bg-[#171717] text-[#ffffff] text-[14px] font-medium hover:bg-[#333333] transition-colors cursor-pointer w-full sm:w-auto border border-transparent shadow-sm">
            Explore Documentation
          </button>
          <button className="flex items-center justify-center px-7 py-3 rounded-full bg-[#ffffff] border border-[#eaeaea] text-[#171717] text-[14px] font-medium hover:bg-[#f5f5f5] transition-colors cursor-pointer w-full sm:w-auto shadow-sm">
            Contact Systems
          </button>
        </motion.div>

        <style>{`
          .pastel-mesh-wrapper {
            position: relative;
            border-radius: 24px;
            background-color: #f7f8fb;
            overflow: hidden;
            padding: 16px;
          }
          @media (min-width: 768px) {
            .pastel-mesh-wrapper {
              padding: 56px;
              border-radius: 56px;
            }
          }
          .pastel-mesh-wrapper::before,
          .pastel-mesh-wrapper::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            transform: scale(1.05);
          }
          .pastel-mesh-wrapper::before {
            background: radial-gradient(circle at 20% 20%, rgba(140, 190, 255, 0.45) 0%, transparent 40%),
                        radial-gradient(circle at 80% 80%, rgba(255, 130, 130, 0.40) 0%, transparent 40%),
                        radial-gradient(circle at -10% 60%, rgba(255, 170, 210, 0.35) 0%, transparent 45%);
            filter: blur(28px);
          }
          .pastel-mesh-wrapper::after {
            background: radial-gradient(circle at 10% 90%, rgba(255, 235, 130, 0.40) 0%, transparent 40%),
                        radial-gradient(circle at 90% 10%, rgba(150, 240, 210, 0.35) 0%, transparent 40%),
                        radial-gradient(circle at 50% -10%, rgba(140, 190, 255, 0.35) 0%, transparent 40%);
            filter: blur(28px);
          }
        `}</style>
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="w-full lg:w-[90vw] h-[70vh] md:h-[80vh] lg:h-[80vh] max-w-none mt-16 md:mt-24 relative pastel-mesh-wrapper shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        >
          <div className="w-full h-full rounded-[16px] flex flex-col relative z-20 text-left overflow-hidden">
            <FeatureSpaceLab />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
