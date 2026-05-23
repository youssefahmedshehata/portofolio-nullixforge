import { motion } from 'motion/react';

export function CliSection() {
  return (
    <section className="relative py-[64px] pb-[128px] bg-[#0a0a0a] border-t border-[#212327]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="block font-mono text-[14px] leading-[20px] text-white tracking-[1.4px] uppercase mb-[16px]">
              Developer Tooling
            </span>
            <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
              Antigravity CLI.
            </h2>
            <p className="text-[18px] text-[#dadbdf] leading-[28px] font-normal mb-[32px]">
              The lightweight, fast, terminal-first surface to work with autonomous coding agents. Run autonomous coding agents, execute shell commands directly, and manage background subagents all from your keyboard.
            </p>
            <div className="flex justify-start">
              <button className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
                Read documentation
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-end"
          >
            <div className="w-full bg-[#191919] border border-[#212327] rounded-[8px] p-[24px] min-h-[400px] flex items-center justify-center overflow-hidden">
              <img 
                src="/workflow-imag.png" 
                alt="Antigravity CLI Interface Mockup" 
                className="w-full h-auto object-cover rounded-[8px] opacity-80"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
