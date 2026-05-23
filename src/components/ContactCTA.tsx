export function ContactCTA() {
  return (
    <section id="contact" className="py-[128px] px-6 md:px-[24px] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center text-center">
        <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase mb-[16px]">
          Contact Section
        </span>
        <h2 className="text-[48px] md:text-[72px] leading-[1] font-normal tracking-[-1.8px] text-white mb-[24px] max-w-[800px]">
          Initiate your next system.
        </h2>
        <p className="text-[18px] leading-[28px] text-[#dadbdf] font-normal mb-[48px] max-w-[600px]">
          Whether your technical requirements are fully scoped or still evolving, Nullix provides the engineering expertise to transition complex ideas into scalable, production-ready systems.
        </p>
        <a href="#/contact" className="inline-flex items-center justify-center px-[32px] py-[12px] rounded-full bg-white border border-white text-[#0a0a0a] text-[16px] leading-[24px] font-normal transition-colors hover:bg-[#fafaf7] mb-[24px]">
          Initiate Project
        </a>
        <span className="text-[14px] leading-[20px] text-[#7d8187] font-normal">
          Building the infrastructure of tomorrow, from the ground up.
        </span>
      </div>
    </section>
  );
}
