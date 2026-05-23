import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ResearchSection() {
  const [stats, setStats] = useState({ ep: 184, reward: 192.41, statusIdx: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        const nextEp = prev.ep + 1;
        const nextReward = prev.reward + (Math.random() * 2.5);
        const nextStatusIdx = (prev.statusIdx + 1) % 4;
        return { ep: nextEp, reward: nextReward, statusIdx: nextStatusIdx };
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const statuses = ["update PPO step", "episode {ep}", "reward improved", "checkpoint saved"];
  const currentStatus = statuses[stats.statusIdx].replace("{ep}", stats.ep.toString());

  return (
    <section className="relative py-[64px] pb-[128px] bg-[#0a0a0a] border-t border-[#212327]">
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
              <div className="flex border-b border-[#212327] pb-[16px] mb-[16px] text-white tracking-[1.4px] uppercase text-[12px]">
                <span>training-loop.py</span>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] md:flex-row">
                <div className="flex-1 flex flex-col gap-[8px] border-r-0 md:border-r border-[#212327] pr-[16px]">
                  <span className="text-white font-medium mb-[8px]">RL Project</span>
                  <span className="text-[#7d8187]">configs/</span>
                  <span className="text-[#7d8187]">agents/</span>
                  <span className="text-[#7d8187]">training/</span>
                  <span className="text-[#a0c3ec]">&gt; train_ppo.py</span>
                  <span className="text-[#7d8187]">models/</span>
                  <span className="text-[#7d8187]">logs/</span>
                </div>
                
                <div className="flex-[2] flex flex-col gap-[4px] pl-[0] md:pl-[16px]">
                  <div><span className="text-[#7d8187]">&gt; training:</span> {currentStatus}</div>
                  <div><span className="text-[#7d8187]">AGY:</span> Live training patch</div>
                  <div className="mt-[16px]">import torch</div>
                  <div className="text-[#ff7a17] bg-[#ff7a17]/10 px-[8px] -mx-[8px]">- reward = env.step(action)</div>
                  <div className="text-[#a0c3ec] bg-[#a0c3ec]/10 px-[8px] -mx-[8px]">+ reward, done = env.step(action)</div>
                  <div className="text-[#a0c3ec] bg-[#a0c3ec]/10 px-[8px] -mx-[8px]">+ agent.update_policy(log_probs, rewards)</div>
                  <div className="text-[#a0c3ec] bg-[#a0c3ec]/10 px-[8px] -mx-[8px]">+ print(`episode={stats.ep} reward={stats.reward.toFixed(2)}`)</div>
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
              Model Training
            </span>
            <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
              Continuous integration for models.
            </h2>
            <p className="text-[18px] text-[#dadbdf] leading-[28px] font-normal mb-[32px]">
              Seamlessly sync, evaluate, and patch active agents. Inject runtime modifications directly into live environments without downtime. Our systems perform safely at scale.
            </p>
            <div className="flex justify-start">
              <button className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full border border-white/25 bg-transparent text-white text-[14px] leading-[20px] font-normal transition-colors hover:bg-white/5 cursor-pointer">
                View research
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

