import { motion } from 'motion/react';

export function IntroSection() {
  return (
    <section className="bg-[#0a0a0a] py-[64px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[24px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mb-[64px]"
        >
          <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase mb-[16px]">
            Core Philosophy
          </span>
          <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
            Simplicity driven by engineering depth.
          </h2>
          <p className="text-[18px] leading-[28px] text-[#dadbdf] font-normal m-0">
            NullixForge operates at the intersection of systems architecture, interface design, and AI integration. We do not mask complexity; we streamline it. By optimizing the underlying infrastructure, we deliver reliable, scalable systems that provide operational stability for your business and clarity for your users.
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
              Structural Design
            </h3>
            <p className="text-[16px] leading-[24px] text-[#dadbdf] font-normal mb-[24px]">
              Every interface begins with strategic order. We design using strict grids, intentional spacing, and clean composition—ensuring every screen is intuitive, scalable, and adaptable across diverse devices and enterprise workflows.
            </p>
            <a href="#/contact" className="inline-flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
              Explore UI Architecture
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#191919] border border-[#212327] rounded-[8px] p-[24px]"
          >
            <h3 className="text-[32px] leading-[36px] font-normal tracking-[-0.6px] text-white mb-[16px]">
              Typographic Hierarchy
            </h3>
            <p className="text-[16px] leading-[24px] text-[#dadbdf] font-normal mb-[24px]">
              Typography is a functional layer of user experience. We utilize sharp hierarchy, precise contrast, and optimal readability to guide users seamlessly through data-dense environments without cognitive friction.
            </p>
            <a href="#/contact" className="inline-flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
              View Design System
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



