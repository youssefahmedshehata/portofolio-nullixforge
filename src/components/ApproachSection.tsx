import { motion } from 'motion/react';

export function ApproachSection() {
  const approaches = [
    { title: "Discard the superfluous.", desc: "Every function must earn its place. Complexity is a liability." },
    { title: "Data density prioritized.", desc: "Operators need immediate information, not excessive padding." },
    { title: "Typography is interface.", desc: "Good type scales down to code panels and up to hero spans." },
    { title: "Latency as a fatal error.", desc: "Milliseconds compound into institutional risk and friction." }
  ];

  return (
    <section id="approach" className="py-[80px] px-6 md:px-12 border-t border-[#e6e5e0] bg-[#f7f7f4]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center flex flex-col items-center mb-[80px]"
        >
          <span className="font-mono text-[11px] font-semibold text-[#26251e] mb-[16px] tracking-[0.88px] uppercase">
            Documentation
          </span>
          <h2 className="text-[36px] leading-[1.2] font-normal tracking-[-0.72px] text-[#26251e] mb-[20px]">
            The compute doctrine.
          </h2>
          <p className="text-[16px] text-[#5a5852] leading-[1.5] max-w-2xl font-normal">
            Our architectural principles are non-negotiable. They are designed to scale indefinitely, perform predictably, and resist entropy over time.
          </p>
        </motion.div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {approaches.map((item, i) => (
            <div key={i} className="flex flex-col bg-[#ffffff] border border-[#e6e5e0] rounded-[12px] p-[24px] shadow-none">
              <div className="font-mono text-[13px] text-[#807d72] mb-[20px]">
                0{i + 1}
              </div>
              <h3 className="text-[18px] font-semibold text-[#26251e] mb-[12px]">{item.title}</h3>
              <p className="text-[16px] text-[#5a5852] leading-[1.5] font-normal">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-[80px] pt-[80px] w-full flex justify-center border-t border-[#e6e5e0]">
          <a href="#/approach" className="inline-flex items-center justify-center px-6 py-2 h-[40px] rounded-[9999px] border border-black/25 bg-transparent text-[#26251e] text-[14px] font-normal hover:bg-black/5 transition-colors shadow-none">
            Read the Full Doctrine
          </a>
        </div>
      </div>
    </section>
  );
}
