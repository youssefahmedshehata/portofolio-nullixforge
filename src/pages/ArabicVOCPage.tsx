import { motion } from 'motion/react';
import React from 'react';
import generatedHeroImage from '../assets/images/regenerated_image_1781636204277.png';

export function ArabicVOCPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="bg-[#000000] min-h-screen text-[#ffffff] font-sans [font-feature-settings:'ss03']"
    >


      {/* Cinematic Hero */}
      <section className="pt-32 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col items-center text-center">
        <h1 className="text-[56px] md:text-[96px] font-light leading-[1.0] tracking-[2.4px] text-white max-w-5xl [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
          Arabic Voice-of-Customer Analyzer.
        </h1>
        <p className="mt-8 text-[18px] md:text-[24px] font-normal leading-[1.4] text-[#a1a1aa] max-w-2xl font-sans">
          Diagnostic Report / POC
        </p>
        <div className="mt-12 flex gap-4">
           <button 
             onClick={() => window.location.hash = '#/work/arabic-voice-of-customer-analyzer/poc-demo'}
             className="px-6 py-3 rounded-full border-2 border-[#ffffff] bg-transparent text-[#ffffff] text-[16px] font-medium hover:bg-[#3f3f46] transition-colors duration-200"
           >
             View Demo
           </button>
        </div>
      </section>

      {/* Full-bleed Photo Layer */}
      <section className="w-full h-[60vh] md:h-[80vh] bg-[#0a0a0a] rounded-t-[20px] overflow-hidden relative">
         {/* Smooth fade to black at the top */}
         <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#000000] to-transparent z-10 pointer-events-none" />
         {/* Smooth fade to black at the bottom */}
         <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#000000] to-transparent z-10 pointer-events-none" />
         <img 
           src={generatedHeroImage} 
           alt="Data intelligence" 
           className="w-full h-full object-cover opacity-100" 
         />
      </section>

      {/* Main Content Area */}
      <section className="py-32 px-6 md:px-12 max-w-[1024px] mx-auto space-y-48">
        
        {/* Section 1 - Life-Infused Interactive Frame */}
        <motion.div 
          initial="idle"
          whileHover="hover"
          animate="animate"
          className="relative w-full rounded-[32px] p-10 md:p-16 overflow-hidden flex flex-col items-center text-center cursor-default group transition-all duration-700 ease-out"
        >
          {/* Unconditional continuous giving: A breathing, living ambient aura that acts before being asked */}
          <motion.div
            variants={{
              idle: { opacity: 0.3, scale: 0.98 },
              hover: { opacity: 0.6, scale: 1.02 }
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/[0.03] to-transparent pointer-events-none rounded-[32px]"
          />
          {/* Subtle heartbeat / life rhythm */}
          <motion.div
            variants={{
              idle: { opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1], filter: 'blur(50px)' },
              hover: { opacity: [0.3, 0.4, 0.3], scale: [1.05, 1.1, 1.05], filter: 'blur(60px)' }
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-full max-h-[400px] bg-[#fbfbf5]/10 rounded-[100%] pointer-events-none"
          />

          {/* Sensory openness & self-confidence: No rigid borders, pure unconstrained typography */}
          <motion.h2 
            variants={{
              idle: { y: 0 },
              hover: { y: -4 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 text-[48px] md:text-[70px] font-light leading-[1.0] tracking-normal text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]"
          >
            Operational Intelligence System
          </motion.h2>

          <motion.div 
            variants={{
              idle: { y: 0, opacity: 0.9 },
              hover: { y: -2, opacity: 1 }
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="relative z-10 mt-12 max-w-4xl"
          >
            {/* The Embrace: Text responds sensorily to the user, growing brighter and clearer */}
            <p className="text-[20px] md:text-[24px] text-[#d4d4d8] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] transition-colors duration-700 ease-out group-hover:text-[#ffffff]">
              We do not sell superficial "sentiment analysis" or generic AI reports. We forge a precise operational map that instantly informs your management: Exactly why are your customers angry? Which specific product is failing? Across which channel? And what is the immediate, urgent action required to resolve the crisis? By stripping away the noise, we expose the absolute truth of your operations.
            </p>
          </motion.div>
        </motion.div>

        {/* Target Audience - Expansive & Welcoming */}
        <div className="space-y-16 lg:space-y-24 flex flex-col items-center text-center">
          <div className="space-y-8 max-w-4xl flex flex-col items-center">
            <h2 className="text-[48px] md:text-[70px] font-light leading-[1.0] tracking-[2.4px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
              Target Audience
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] max-w-3xl">
              This system is architected exclusively for enterprises managing massive volumes of customer interactions, suffering from fragmented data and the inability to extract decisive operational actions.
            </p>
          </div>
          
          <div className="flex flex-col gap-y-12 w-full max-w-5xl items-center">
            {[
              {
                title: "E-commerce in KSA",
                desc: "Active storefronts (on platforms like Salla, Zid, and Shopify) receiving thousands of reviews, support tickets, and WhatsApp messages monthly."
              },
              {
                title: "Neutralizing Threats",
                desc: "We isolate and expose the exact root causes of customer churn and plummeting ratings, allowing your team to execute immediate, targeted interventions to resolve critical issues."
              },
              {
                title: "Maximizing Productivity",
                desc: "Simultaneously, we extract and highlight verified positive feedback and peak-performing areas, empowering your management to confidently scale winning strategies, double down on successful products, and drive maximum operational productivity with zero wasted effort."
              },
              {
                title: "Education Sector in Dubai",
                desc: "Private schools and training institutes that require rigorous, bias-free analysis of parent surveys, registration complaints, and recurring inquiries regarding fees and policies."
              },
              {
                title: "B2B Agencies in the Gulf",
                desc: "Firms seeking to provide profound, white-label analytical reports to their clients to forge unparalleled operational value from raw data."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="idle"
                animate={{ opacity: 1, y: 0 }}
                whileHover="hover"
                className="relative group w-full p-10 md:p-16 rounded-[32px] bg-[#000000] shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden cursor-default transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col items-center text-center"
              >
                {/* Organic unconditional breathing layer / the giving presence */}
                <motion.div
                  variants={{
                    idle: { opacity: 0.0, scale: 0.8, filter: 'blur(40px)' },
                    hover: { opacity: 0.15, scale: 1.1, filter: 'blur(60px)' }
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#ffffff] pointer-events-none rounded-full w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                
                <motion.div 
                  variants={{ idle: { scale: 1 }, hover: { scale: 1.02 } }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <motion.h3 
                    variants={{ idle: { y: 0, opacity: 0.9 }, hover: { y: -4, opacity: 1 } }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-[28px] md:text-[32px] font-light leading-[1.14] tracking-[0.36px] text-[#ffffff] mb-6 [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    variants={{ idle: { opacity: 0.8 }, hover: { opacity: 1, y: -2 } }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                    className="text-[18px] md:text-[20px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#ffffff] transition-colors duration-[800ms] max-w-3xl"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
                
                {/* Visual anchor point that blooms on interaction - representing care and focus */}
                <motion.div
                  variants={{
                    idle: { scale: 0, opacity: 0 },
                    hover: { scale: 1, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ffffff] shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Fragmentation Problem - Ambient, Alive Container */}
        <motion.div 
          initial="idle"
          whileHover="hover"
          animate="animate"
          className="space-y-16 lg:space-y-24 group relative"
        >
          {/* Subtle atmospheric glow showing presence without asking */}
          <motion.div
             variants={{
               idle: { opacity: 0.1, filter: 'blur(80px)' },
               hover: { opacity: 0.15, filter: 'blur(100px)' }
             }}
             transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ffffff]/10 rounded-full pointer-events-none"
          />

          <h2 className="relative z-10 text-[48px] md:text-[70px] font-light leading-[1.0] tracking-[0px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
            The Fragmentation Problem
          </h2>
          
          <motion.div 
            variants={{
              idle: { backgroundColor: "rgba(10, 10, 10, 1)" },
              hover: { backgroundColor: "rgba(18, 18, 18, 1)" }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 rounded-[24px] p-10 md:p-16 shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden"
          >
            <p className="text-[20px] md:text-[24px] text-[#a1a1aa] font-normal leading-[1.6] mb-12 [font-family:'Inter_Variable',Inter,sans-serif] transition-colors duration-700 group-hover:text-[#d4d4d8]">
              Enterprises accumulate thousands of fragmented records across product reviews, tickets, WhatsApp transcripts, and NPS surveys. Manual analysis to extract root causes from this volume is practically impossible and inherently wasteful.
            </p>
            <div className="pt-10 border-t border-[#ffffff]/10">
              <h3 className="text-[24px] font-normal leading-[1.14] tracking-[0.36px] text-[#ffffff] mb-6 [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">Batch Processing & Intent Mapping</h3>
              <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.56] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#ffffff] transition-colors duration-500">
                Our system processes this data in unified batches via an architecture natively designed for Arabic. We deconstruct every comment, comprehend the intent, and map the root issue directly to the accountable team.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Capabilities */}
        <div className="space-y-16 lg:space-y-24">
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-[48px] md:text-[70px] font-light leading-[1.0] tracking-[0px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
              Core Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              {
                title: "Arabic-First NLP",
                desc: "Engineered specifically to comprehend Arabic dialects (Gulf, Saudi, Egyptian, MSA) and code-switching (Arabizi), capturing the true operational context."
              },
              {
                title: "Aspect-Based Intelligence",
                desc: "The system rejects basic \"positive/negative\" tagging. It dissects sentences to isolate both operational wins and critical failures simultaneously."
              },
              {
                title: "E-Commerce Taxonomy",
                desc: "Complaints are systematically routed into precise retail subcategories, such as delivery delays, payment gateway failures, sizing inconsistencies, packaging flaws, and neglected customer support."
              },
              {
                title: "Automated Action Mapping",
                desc: "Every detected anomaly is immediately assigned to the relevant department (Operations, Tech, Marketing, or Support). The system provides an intervention priority level backed by undeniable evidence."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial="idle"
                whileHover="hover"
                className="relative group p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-700 ease-out"
              >
                 <motion.div
                   variants={{
                     idle: { opacity: 0 },
                     hover: { opacity: 1 }
                   }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/[0.04] to-transparent rounded-[24px] pointer-events-none"
                 />
                <h3 className="relative z-10 text-[24px] font-normal leading-[1.14] tracking-[0.36px] text-[#ffffff] mb-6 [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">{item.title}</h3>
                <p className="relative z-10 text-[18px] text-[#a1a1aa] font-normal leading-[1.56] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#ffffff] transition-colors duration-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operational Deliverables */}
        <div className="space-y-16 lg:space-y-24">
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-[48px] md:text-[70px] font-light leading-[1.0] tracking-[0px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
              Deliverables
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif]">
               Following the batch processing of your CSV/Excel files, we deliver a cohesive operational package:
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: "Executive Dashboard", desc: "Instant, reliable visibility into overall satisfaction rates, sentiment distribution, rapidly escalating problems, and the specific products or channels driving customer friction." },
              { title: "Diagnostic PDF Report", desc: "A grounded executive summary that pinpoints root causes, compares performance, and clearly flags critical cases requiring immediate escalation." },
              { title: "Action Items Ledger", desc: "A precise, no-nonsense directive specifying: What is the exact problem? How many customers are affected? Who is the accountable team? What is the immediate corrective action?" },
              { title: "Enriched Data Architecture", desc: "Your original data returned with over 30 rigorous analytical columns, including intent classification, severity scoring, aspect-level sentiment, and extracted entities." },
              { title: "Data Integrity Report", desc: "An objective audit of your raw input data, exposing gaps, redundancies, and invalid texts to optimize your future data collection strategies." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial="idle"
                whileHover="hover"
                className="group relative bg-[#0a0a0a] rounded-[24px] p-8 md:p-12 shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] flex flex-col md:flex-row gap-8 md:items-start transition-all duration-700 ease-out"
              >
                 <motion.div
                   variants={{
                     idle: { opacity: 0, x: -10 },
                     hover: { opacity: 1, x: 0 }
                   }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="absolute left-0 top-0 bottom-0 w-1 bg-[#ffffff]/20 rounded-l-[24px] pointer-events-none"
                 />
                 <div className="md:w-1/3 relative z-10">
                   <h3 className="text-[24px] font-normal leading-[1.14] tracking-[0.36px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">{item.title}</h3>
                 </div>
                 <div className="md:w-2/3 relative z-10">
                   <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.56] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#ffffff] transition-colors duration-500">{item.desc}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operational ROI */}
        <div className="space-y-16 lg:space-y-24">
           <div className="space-y-8 max-w-4xl">
             <h2 className="text-[48px] md:text-[70px] font-light leading-[1.0] tracking-[0px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
              Operational ROI
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif]">
              We do not provide superficial sentiment analysis. We deliver a precise operational map, converting thousands of unstructured interactions into clear administrative decisions that reduce costs and halt customer churn.
            </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              { title: "Identifying True Root Causes", desc: "Move beyond ambiguous metrics like a \"3.2 average rating.\" The system pinpoints exact failures, providing clarity such as: \"Ratings dropped by 41% specifically due to shipping delays, not product quality.\"" },
              { title: "Product-Level Diagnostics", desc: "Precisely isolate defects at the product level. Conversely, the system actively highlights verified positive feedback, validating successful product features and operational strengths. This allows your team to confidently scale production." },
              { title: "Channel Congestion Mapping", desc: "Identify exactly where customer friction peaks (e.g., recognizing that WhatsApp harbors the highest rate of customer frustration, while app reviews reveal the most technical bugs)." },
              { title: "Trend Analysis & Early Warnings", desc: "Alert management to escalating operational issues before they disrupt business stability (e.g., \"Payment gateway failures increased from 4% to 13% over two weeks\")." },
              { title: "Automated Action Mapping", desc: "The system acts as an operational guide, immediately routing the isolated issue to the accountable team—whether Operations, Technical Support, Pricing, or IT—for targeted resolution." },
              { title: "Evidence-Backed Decision Making", desc: "Every conclusion or recommendation is anchored by direct, verbatim customer quotes. This provides management with the necessary validation to act decisively and confidently." },
              { title: "Immediate Intervention", desc: "Automatically extract and prioritize high-risk complaints that require urgent attention, such as order cancellation threats, formal escalations, or VIP customer friction." },
              { title: "Data Integrity & Spam Detection", desc: "Protect your operational metrics from inflation. The system detects duplicate comments, copied texts, and logical contradictions, ensuring your statistics remain stable and trustworthy." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial="idle"
                whileHover="hover"
                className="relative group bg-[#0a0a0a] rounded-[24px] p-8 md:p-12 shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden transition-all duration-700 ease-out"
              >
                 <motion.div
                   variants={{
                     idle: { opacity: 0, scale: 0.9 },
                     hover: { opacity: 1, scale: 1 }
                   }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="absolute -top-32 -right-32 w-64 h-64 bg-[#ffffff]/[0.03] rounded-full blur-3xl pointer-events-none"
                 />
                 <h3 className="relative z-10 text-[24px] font-normal leading-[1.14] tracking-[0.36px] text-[#ffffff] mb-6 [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">{item.title}</h3>
                 <p className="relative z-10 text-[18px] text-[#a1a1aa] font-normal leading-[1.56] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#ffffff] transition-colors duration-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Footer / CTA cinematic */}
      <section className="bg-[#000000] pt-64 pb-48 px-6 md:px-12 text-center flex flex-col items-center relative overflow-hidden group">
        <motion.div
           animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1], filter: 'blur(120px)' }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-[#ffffff]/10 rounded-full pointer-events-none"
        />
        <h2 className="relative z-10 text-[70px] md:text-[96px] font-light leading-[1.0] tracking-[2.4px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif] mb-16">
          Ready to diagnose?
        </h2>
        <motion.button 
          onClick={() => window.location.hash = '#/contact'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10 px-8 py-4 rounded-[9999px] border-2 border-[#ffffff] bg-[#000000] text-[#ffffff] text-[16px] md:text-[18px] font-medium hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-300 [font-family:'Inter_Variable',Inter,sans-serif]"
        >
           Start Diagnostics
        </motion.button>
      </section>
      

    </motion.div>
  );
}
