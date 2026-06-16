import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const identity = formData.get('identity');
    const email = formData.get('email');
    const context = formData.get('context');
    const parameters = formData.get('parameters');
    
    const subject = encodeURIComponent(`Query from ${identity} - ${context}`);
    const body = encodeURIComponent(`Identity: ${identity}\nEmail: ${email}\nContext: ${context}\n\nParameters:\n${parameters}`);
    
    const mailtoUrl = `mailto:contact@nullixforge.com?subject=${subject}&body=${body}`;
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        eyebrow="Onboarding" 
        title="Initialize Run." 
        description="We evaluate all inquiries systematically. Provide technical context around your proposed deployment."
      />

      <section className="py-[64px] px-6 md:px-[24px] bg-[#0a0a0a] min-h-[60vh]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[128px]">
          <div className="lg:w-1/2">
            <form className="space-y-[24px] flex flex-col" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[8px]">
                <label className="font-mono text-[14px] tracking-[1.4px] uppercase text-white">Full Name & Company</label>
                <input name="identity" required type="text" className="w-full bg-[#1a1c20] rounded-[8px] border border-[#212327] px-[16px] py-[12px] text-white placeholder-[#7d8187] focus:outline-none focus:border-white/50 transition-colors font-sans text-[16px]" placeholder="Name & Company" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-mono text-[14px] tracking-[1.4px] uppercase text-white">Work Email</label>
                <input name="email" required type="email" className="w-full bg-[#1a1c20] rounded-[8px] border border-[#212327] px-[16px] py-[12px] text-white placeholder-[#7d8187] focus:outline-none focus:border-white/50 transition-colors font-sans text-[16px]" placeholder="Email Address" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-mono text-[14px] tracking-[1.4px] uppercase text-white">Project Overview</label>
                <input name="context" required type="text" className="w-full bg-[#1a1c20] rounded-[8px] border border-[#212327] px-[16px] py-[12px] text-white placeholder-[#7d8187] focus:outline-none focus:border-white/50 transition-colors font-sans text-[16px]" placeholder="Project Description" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-mono text-[14px] tracking-[1.4px] uppercase text-white">Technical Constraints & Timeline</label>
                <textarea name="parameters" required rows={6} className="w-full bg-[#1a1c20] rounded-[8px] border border-[#212327] px-[16px] py-[12px] text-white placeholder-[#7d8187] focus:outline-none focus:border-white/50 transition-colors resize-none font-sans text-[16px]" placeholder="Describe the constraints and timeline..." />
              </div>
              
              <div className="pt-[16px]">
                <button type="submit" className="flex items-center justify-center px-[24px] py-[8px] rounded-[9999px] bg-white border border-white text-[#0a0a0a] text-[14px] leading-[20px] font-normal transition-colors cursor-pointer w-full sm:w-auto hover:bg-[#fafaf7]">
                  Initiate Engagement
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-1/2 space-y-[24px]">
            <div className="bg-[#191919] border border-[#212327] rounded-[8px] p-[24px]">
              <h4 className="font-mono text-[14px] tracking-[1.4px] uppercase text-white mb-[24px]">Target Engagements</h4>
              <ul className="space-y-[16px] text-[#dadbdf] font-sans text-[16px] leading-[24px]">
                <li className="flex items-start gap-4">
                  <span className="text-white mt-[8px] border border-white/20 rounded-full w-[6px] h-[6px] inline-block shrink-0 bg-white/20"></span> 
                  <span>Mission-critical system requirements.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white mt-[8px] border border-white/20 rounded-full w-[6px] h-[6px] inline-block shrink-0 bg-white/20"></span> 
                  <span>High-density data environments and operational interfaces.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white mt-[8px] border border-white/20 rounded-full w-[6px] h-[6px] inline-block shrink-0 bg-white/20"></span> 
                  <span>A strict focus on architectural precision over decorative design.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#191919] border border-[#212327] rounded-[8px] p-[24px]">
              <h4 className="font-mono text-[14px] tracking-[1.4px] uppercase text-white mb-[24px]">Engagement Protocol</h4>
              <p className="text-[#dadbdf] font-sans text-[16px] leading-[24px]">
                All inquiries are routed directly to our engineering leadership. We operate without sales intermediaries or automated marketing funnels. If your project aligns with our technical capabilities, you will receive an initial architectural assessment within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
