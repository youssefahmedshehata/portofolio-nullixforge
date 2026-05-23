import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';

export function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHeader 
        eyebrow="Onboarding" 
        title="Initialize Run." 
        description="We evaluate all inquiries systematically. Provide technical context around your proposed deployment."
      />

      <section className="py-24 px-6 md:px-12 bg-[#fafafa] min-h-[60vh]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/2">
            <form className="space-y-8 flex flex-col">
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] text-neutral-500">Identity</label>
                <input type="text" className="w-full bg-white rounded-md border border-black/5 p-3 text-[#171717] placeholder-neutral-400 focus:outline-none focus:border-black/20 transition-colors" placeholder="Name or Alias" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] text-neutral-500">Transmission Vector</label>
                <input type="email" className="w-full bg-white rounded-md border border-black/5 p-3 text-[#171717] placeholder-neutral-400 focus:outline-none focus:border-black/20 transition-colors" placeholder="Email Address" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] text-neutral-500">System Context</label>
                <input type="text" className="w-full bg-white rounded-md border border-black/5 p-3 text-[#171717] placeholder-neutral-400 focus:outline-none focus:border-black/20 transition-colors" placeholder="Company or Project" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] text-neutral-500">Parameters</label>
                <textarea rows={6} className="w-full bg-white rounded-md border border-black/5 p-3 text-[#171717] placeholder-neutral-400 focus:outline-none focus:border-black/20 transition-colors resize-none" placeholder="Describe the constraints and objectives..." />
              </div>
              
              <button disabled type="button" className="group self-start flex items-center gap-2 px-8 py-3 bg-[#171717] text-white rounded-md font-medium text-[14px] transition-colors opacity-50 cursor-not-allowed">
                <span>Submit Query</span>
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 space-y-16">
            <div>
              <h4 className="font-mono text-[12px] text-neutral-500 mb-6 pb-4 border-b border-black/5">Project Fit Checklist</h4>
              <ul className="space-y-4 text-neutral-500 font-normal list-disc list-inside">
                <li>Mission-critical operational requirements.</li>
                <li>Data-dense visual interfaces.</li>
                <li>Preference for precision over decoration.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-[12px] text-neutral-500 mb-6 pb-4 border-b border-black/5">Response Expectation</h4>
              <p className="text-neutral-500 font-normal leading-relaxed">
                All communications are routed directly to engineering. No sales teams. No automated engagement funnels. If the project matches our constraints, you will receive an architectural questionnaire within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
