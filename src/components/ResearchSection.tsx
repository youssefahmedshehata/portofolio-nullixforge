import { motion } from 'motion/react';

export function ResearchSection() {
  return (
    <section className="relative py-[64px] pb-[128px] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col order-2 lg:order-1"
          >
            <div className="w-full bg-[#191919] border border-[#212327] rounded-[8px] p-[24px] min-h-[400px] flex flex-col overflow-hidden font-mono text-[13px] text-[#dadbdf]">
              <div className="flex border-b border-[#212327] pb-[16px] mb-[16px] text-white tracking-[1.4px] uppercase text-[12px] justify-between">
                <span>Nullix Runtime Environment</span>
                <span className="text-[#7d8187]">Live System Status</span>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] md:flex-row">
                <div className="flex-1 flex flex-col gap-[8px] border-r-0 md:border-r border-[#212327] pr-[16px]">
                  <span className="text-[#7d8187]">core/</span>
                  <span className="text-[#7d8187]">interfaces/</span>
                  <span className="text-[#7d8187]">agents/</span>
                  <span className="text-[#7d8187]">deployments/</span>
                  <span className="text-[#7d8187]">telemetry/</span>
                  <span className="text-[#a0c3ec]">&gt; runtime.ts</span>
                </div>
                
                <div className="flex-[2] flex flex-col gap-[4px] pl-[0] md:pl-[16px]">
                  <div><span className="text-[#7d8187]">&gt; system:</span> initialization complete</div>
                  <div><span className="text-[#7d8187]">&gt; telemetry:</span> optimal</div>
                  <div><span className="text-[#7d8187]">&gt; agent:</span> deployment verified</div>
                  <div><span className="text-[#7d8187]">&gt; operations:</span> running seamlessly</div>
                  
                  <div className="mt-[16px]">import {'{'} core {'}'} from "@nullix/runtime"</div>
                  <div className="text-[#ff7a17] bg-[#ff7a17]/10 px-[8px] -mx-[8px]">- system.render(layer)</div>
                  <div className="text-[#a0c3ec] bg-[#a0c3ec]/10 px-[8px] -mx-[8px]">+ system.compose(layer, {'{'} optimized: true {'}'})</div>
                  <div className="text-[#a0c3ec] bg-[#a0c3ec]/10 px-[8px] -mx-[8px]">+ core.deploy(runtime, update)</div>
                  <div className="text-[#a0c3ec] bg-[#a0c3ec]/10 px-[8px] -mx-[8px]">+ console.log("status=stable latency=optimal")</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col order-1 lg:order-2"
          >
            <span className="block font-mono text-[14px] leading-[20px] text-white tracking-[1.4px] uppercase mb-[16px]">
              Operational Dashboard
            </span>
            <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
              Centralized operational control.
            </h2>
            <p className="text-[18px] text-[#dadbdf] leading-[28px] font-normal mb-[32px]">
              A focused management layer for overseeing builds, AI agents, deployments, and live system analytics. Designed for technical teams requiring direct control, real-time feedback, and zero unnecessary abstraction.
            </p>
            <div className="flex justify-start">
              <a href="#/contact" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
                View Technical Specs
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

