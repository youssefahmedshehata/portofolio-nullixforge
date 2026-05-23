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
          className="w-full max-w-5xl mb-[96px] grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-6 min-h-[440px]"
        >
          {/* Left Card: Mesh Gradient with inner mockup */}
          <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden bg-[#3b2d35] p-8 md:p-12 lg:p-16 shadow-xl flex items-center justify-center">
            {/* Blurred shapes for gradient */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90" style={{ mixBlendMode: 'screen' }}>
              <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-[#6a3535] blur-[80px] rounded-full" />
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#393c78] blur-[100px] rounded-full" />
              <div className="absolute bottom-[-10%] -left-[10%] w-[60%] h-[60%] bg-[#392842] blur-[80px] rounded-full opacity-80" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] bg-[#d2bcad] blur-[140px] rounded-full opacity-60" />
            </div>
            
            {/* Inner Light Surface */}
            <div className="relative z-10 w-full max-w-md bg-[#ffffff] rounded-[12px] border border-black/5 p-6 shadow-2xl flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-[44px] h-[44px] bg-[#171717] rounded-md flex items-center justify-center text-white text-[22px] font-normal leading-none font-sans">
                  A
                </div>
                <h3 className="text-[#171717] text-[22px] font-medium tracking-tight font-sans">
                  Financial Analysis Agent
                </h3>
              </div>
              
              <div className="flex items-center gap-3 mb-10">
                <span className="px-3 py-[6px] border border-black/10 rounded-md text-[10px] text-neutral-500 font-mono tracking-widest uppercase bg-[#fafafa]">
                  READY
                </span>
                <span className="px-3 py-[6px] border border-black/10 rounded-md text-[10px] text-neutral-500 font-mono tracking-widest uppercase bg-[#fafafa]">
                  DATA
                </span>
                <span className="px-3 py-[6px] border border-black/10 rounded-md text-[10px] text-neutral-500 font-mono tracking-widest uppercase bg-[#fafafa]">
                  CLOUD
                </span>
              </div>
              
              <div className="flex items-center justify-between border border-black/10 rounded-[8px] p-4 bg-[#fafafa]">
                <span className="text-[15px] text-[#171717] font-normal font-sans">
                  Help me understand the Q3 revenue surplus
                </span>
                <span className="text-[#171717] text-[15px] font-medium pl-4 font-sans cursor-pointer hover:opacity-80 transition-opacity">
                  Go
                </span>
              </div>
            </div>
          </div>

          {/* Right Card: Dark Green with Coral gradient */}
          <div className="lg:col-span-4 relative rounded-[24px] overflow-hidden bg-[#1e3b38] shadow-xl min-h-[300px] lg:min-h-0">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* Blooming coral light */}
              <div className="absolute -top-[5%] -right-[10%] w-[70%] h-[70%] bg-[#ef8f7c] blur-[110px] rounded-full opacity-80 mix-blend-screen" />
              {/* Deep green shadows */}
              <div className="absolute -bottom-[20%] -left-[20%] w-[90%] h-[90%] bg-[#0e211e] blur-[80px] rounded-full" />
              {/* Mid green blend */}
              <div className="absolute top-[30%] left-[10%] w-[60%] h-[60%] bg-[#224744] blur-[90px] rounded-full opacity-60" />
            </div>
          </div>
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
