import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 relative">
      {/* Vercel-style Atmospheric Mesh Gradient */}
      <div className="absolute top-[-20%] left-1/2 w-[120vw] max-w-[1400px] h-[800px] -translate-x-1/2 opacity-60 pointer-events-none select-none mix-blend-screen z-0 blur-[100px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#007cf0] via-[#7928ca] to-[#ff0080] rounded-full mix-blend-screen opacity-50 blur-[60px]" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#ff4d4d] via-[#f9cb28] to-transparent rounded-full mix-blend-screen opacity-50 blur-[80px]" />
      </div>

      {/* Bridging woven textile gradient to Intro section */}
      <div className="absolute top-[50%] left-1/2 w-[120vw] max-w-[1400px] h-[80vh] -translate-x-1/2 opacity-50 pointer-events-none select-none mix-blend-screen z-0 blur-[130px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff0080]/40 via-purple-600/50 to-pink-600/40 rounded-full mix-blend-screen opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7928ca]/40 to-transparent rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[48px] md:text-7xl lg:text-[6.5rem] leading-[1.05] font-semibold tracking-[-0.04em] text-white max-w-5xl mb-8"
        >
          Build and deploy on the AI Cloud.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-[18px] md:text-[20px] text-neutral-400 font-normal leading-relaxed mb-12"
        >
          We build robust, high-performance web systems and digital architecture for enterprises that demand absolute reliability and zero compromise.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-transparent bg-white text-black text-[16px] font-medium transition-colors text-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Start Deploying
          </a>
          <a href="#/work" className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 bg-[#171717] text-white text-[16px] font-medium hover:bg-white/10 transition-colors text-center inline-flex items-center gap-2">
            View Systems
          </a>
        </motion.div>
      </div>
    </section>
  );
}
