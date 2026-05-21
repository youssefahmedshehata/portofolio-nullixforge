import { motion } from 'motion/react';

export function ApproachSection() {
  const approaches = [
    { title: "Discard the superfluous.", desc: "Every function must earn its place. Complexity is a liability." },
    { title: "Data density prioritized.", desc: "Operators need immediate information, not excessive padding." },
    { title: "Typography is interface.", desc: "Good type scales down to code panels and up to hero spans." },
    { title: "Latency as a fatal error.", desc: "Milliseconds compound into institutional risk and friction." }
  ];

  return (
    <section id="approach" className="py-[96px] px-6 md:px-12 border-t border-[#e5e7eb] bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center flex flex-col items-center mb-[96px]"
        >
          <span className="font-mono text-[14px] font-normal text-[#93939f] mb-[16px] tracking-[0.28px] uppercase">
            Documentation
          </span>
          <h2 className="text-[48px] leading-[1.20] font-normal tracking-[-0.48px] text-[#000000] mb-[24px]">
            The compute doctrine.
          </h2>
          <p className="text-[18px] text-[#212121] leading-[1.40] max-w-2xl font-normal">
            Our architectural principles are non-negotiable. They are designed to scale indefinitely, perform predictably, and resist entropy over time.
          </p>
        </motion.div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {approaches.map((item, i) => (
            <div key={i} className="flex flex-col bg-[#eeece7] rounded-[16px] p-[32px]">
              <div className="font-mono text-[14px] text-[#93939f] tracking-[0.28px] mb-[24px]">
                0{i + 1}
              </div>
              <h3 className="text-[24px] leading-[1.30] tracking-[0px] font-normal text-[#000000] mb-[12px]">{item.title}</h3>
              <p className="text-[16px] text-[#212121] leading-[1.50] font-normal">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-[96px] pt-[80px] w-full flex justify-center border-t border-[#e5e7eb]">
          <a href="#/approach" className="inline-flex items-center justify-center px-[24px] py-[12px] rounded-[32px] border border-[#d9d9dd] bg-transparent text-[#212121] text-[14px] font-medium hover:bg-[#eeece7] transition-colors">
            Read the Full Doctrine
          </a>
        </div>
      </div>
    </section>
  );
}
