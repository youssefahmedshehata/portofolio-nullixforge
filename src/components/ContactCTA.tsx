export function ContactCTA() {
  return (
    <section id="contact" className="py-[128px] px-6 md:px-[24px] bg-[#0a0a0a] border-t border-[#212327]">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center text-center">
        <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase mb-[16px]">
          Get Started
        </span>
        <h2 className="text-[48px] md:text-[72px] leading-[1] font-normal tracking-[-1.8px] text-white mb-[48px]">
          Initialize your next run.
        </h2>
        <a href="#/contact" className="inline-flex items-center justify-center px-[24px] py-[8px] rounded-full bg-white border border-white text-[#0a0a0a] text-[14px] leading-[20px] font-normal transition-colors hover:bg-[#fafaf7]">
          Contact Operations
        </a>
      </div>
    </section>
  );
}
