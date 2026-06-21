import { motion } from 'motion/react';
import React from 'react';
import generatedHeroImage from '../assets/images/regenerated_image_1781636204277.png';

export function EnterpriseAIPage() {
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
          Operational Risk Triage Engine.
        </h1>
        <p className="mt-8 text-[18px] md:text-[24px] font-normal leading-[1.4] text-[#a1a1aa] max-w-2xl font-sans">
          Enterprise AI Architecture / Deployed System
        </p>
        <div className="mt-12 flex gap-4">
           <button 
             onClick={() => window.location.hash = '#/work/Operational-Risk-Triage-Engine/dashboard'}
             className="px-6 py-3 rounded-full border-2 border-[#ffffff] bg-transparent text-[#ffffff] text-[16px] font-medium hover:bg-[#3f3f46] transition-colors duration-200"
           >
             View Dashboard
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
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1024px] mx-auto space-y-32 md:space-y-48">
        
        {/* Intro Section - Eliminating Friction */}
        <motion.div 
          initial="idle"
          whileHover="hover"
          animate="animate"
          className="relative w-full rounded-[32px] p-8 md:p-16 overflow-hidden flex flex-col items-center text-center cursor-default group transition-all duration-700 ease-out"
        >
          <motion.div
            variants={{
              idle: { opacity: 0.3, scale: 0.98 },
              hover: { opacity: 0.6, scale: 1.02 }
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/[0.03] to-transparent pointer-events-none rounded-[32px]"
          />
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

          <motion.h2 
            variants={{
              idle: { y: 0 },
              hover: { y: -4 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 text-[36px] md:text-[60px] font-light leading-[1.1] tracking-normal text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]"
          >
            Eliminating the Friction Between Data Complexity and Decision Making
          </motion.h2>

          <motion.div 
            variants={{
              idle: { y: 0, opacity: 0.9 },
              hover: { y: -2, opacity: 1 }
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="relative z-10 mt-12 max-w-4xl flex flex-col gap-6"
          >
            <p className="text-[18px] md:text-[22px] text-[#d4d4d8] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] transition-colors duration-700 ease-out group-hover:text-[#ffffff]">
              In the AI world, many developers hide behind "clean lab data" or deceptive metrics to produce models that look perfect on paper but collapse upon their first contact with reality. In this project, we deliberately ventured into a severely distorted data environment to prove that a rigorous architecture can extract truth from the heart of chaos. Here is how our results shattered the "laboratory illusion" to reflect the reality of the "ground operations."
            </p>
            <p className="text-[16px] md:text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] transition-colors duration-700 ease-out group-hover:text-[#d4d4d8]">
              Large enterprises suffer from AI systems that output illusory accuracy (90%+) on paper, only to fail completely when colliding with real-world operating environments and messy data. The problem is not the data; it is the lack of an architecture capable of taming it.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] transition-colors duration-700 ease-out group-hover:text-[#d4d4d8]">
              This system is not merely a "predictive model"—it is an AI Architectural Pipeline designed with an engineering mindset that accepts no "limits". We do not view environmental distortions (missing information, mathematical outliers, or temporal overlaps) as "obstacles"; rather, they are raw inputs that we subjugate and completely reshape, allowing the technical interface to become a deep, natural extension of the decision maker's thought process without any friction.
            </p>
          </motion.div>
        </motion.div>

        {/* Project Architecture */}
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto border-b border-[#212327] pb-12">
            <h2 className="text-[32px] md:text-[48px] font-light leading-[1.1] tracking-[0px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
              The Project's Architecture
            </h2>
            <p className="text-[16px] md:text-[18px] font-mono uppercase tracking-widest text-[#7d8187]">
              How We Control the Operating Environment
            </p>
            <p className="text-[18px] md:text-[20px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] pt-4">
              This operational pipeline processes the most complex classification tasks, transforming scattered data into a Risk Triage System:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Surgical Feature Engineering",
                desc: "Incomplete data does not bind us. The system transforms \"Missingness\" into a golden signal driving the prediction. It tames outliers, isolating them through mathematical rules, and eliminates any \"Data Leakage\" that might deceptively inflate model accuracy."
              },
              {
                title: "Leakage-Safe Vaults",
                desc: "The infrastructure is armed with Strict QA Gates preventing data contamination at any stage. We enforce \"Blind Refit\" and \"Frozen Test Set\" methodologies to ensure that the final outputs reflect actual reality, not a statistical illusion."
              },
              {
                title: "SHAP Interpretation",
                desc: "We completely reject the \"Black Box\" approach. The system is equipped with a diagnostic engine that dissects the model's brain, mapping out with exact precision why every predictive decision was made. This grants management absolute confidence in the system's directives."
              },
              {
                title: "Hyper-Targeted Tuning",
                desc: "Machine learning algorithms operate at a profound level; they are hyper-targeted to focus on critical and rare classes under extreme Class Imbalance, finely tuning the balance between the model's capacity and preventing Overfitting."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial="idle"
                whileHover="hover"
                className="relative group p-8 md:p-10 bg-[#0a0a0a] rounded-[24px] shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-700 ease-out"
              >
                 <motion.div
                   variants={{
                     idle: { opacity: 0 },
                     hover: { opacity: 1 }
                   }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/[0.04] to-transparent rounded-[24px] pointer-events-none"
                 />
                <h3 className="relative z-10 text-[22px] font-normal leading-[1.2] tracking-[0.36px] text-[#ffffff] mb-4 [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">{item.title}</h3>
                <p className="relative z-10 text-[16px] md:text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#ffffff] transition-colors duration-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 text-center bg-[#050505] p-8 md:p-12 rounded-[24px] border border-[#1e1e21] shadow-[0_1px_2px_rgba(255,255,255,0.05)]">
            <p className="text-[18px] md:text-[20px] text-[#d4d4d8] font-normal leading-[1.6]">
              An integrated intelligence system that makes no claims of false perfection, but instead provides an authentic diagnostic triage of risks, accompanied by an Audit Log documenting every architectural transformation applied to the data environment.
            </p>
            <div className="mt-8 pt-8 border-t border-[#1e1e21] flex justify-center gap-4 text-[12px] font-mono uppercase tracking-widest text-[#7d8187] flex-wrap items-center">
              <span>Raw Data Molded</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e1e21]" />
              <span>Hidden Risks Triaged</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e1e21]" />
              <span>Complete Operational Certainty</span>
            </div>
          </div>
        </div>

        {/* 1. Interrogating Voids */}
        <motion.div 
          initial="idle"
          whileHover="hover"
          animate="animate"
          className="space-y-12 group relative"
        >
          <motion.div
             variants={{
               idle: { opacity: 0.05, filter: 'blur(80px)' },
               hover: { opacity: 0.1, filter: 'blur(100px)' }
             }}
             transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ef4444]/20 rounded-full pointer-events-none"
          />

          <div className="relative z-10 text-center space-y-4">
             <span className="text-[13px] font-mono text-[#ef4444] uppercase tracking-widest block font-bold">1 — Intelligence from Silence</span>
             <h2 className="text-[32px] md:text-[48px] font-light leading-[1.0] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
               Interrogating "Voids" as the Ultimate Early Warning System
             </h2>
          </div>
          
          <motion.div 
            variants={{
              idle: { backgroundColor: "rgba(10, 10, 10, 1)" },
              hover: { backgroundColor: "rgba(18, 18, 18, 1)" }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 rounded-[24px] p-8 md:p-12 shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-[18px] font-medium text-white font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ef4444] block" />
                The Grim Reality of the Database
              </h3>
              <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#d4d4d8] transition-colors duration-700">
                We confronted a deteriorated database missing up to 36% of values in critical columns (e.g., <code className="text-[#ef4444] font-mono text-sm px-1.5 py-0.5 rounded bg-[#ef4444]/10">Casualty_class</code>, <code className="text-[#ef4444] font-mono text-sm px-1.5 py-0.5 rounded bg-[#ef4444]/10">Age_band</code>) and 32% in vehicle specifics. In a test environment, amateurs often use basic "Imputation" to fill these voids with mathematical averages merely to get the model running, destroying the physical truth of the event.
              </p>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-[#1e1e21]">
              <h3 className="text-[18px] font-medium text-white font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] block" />
                Transforming "Nothingness" into a Golden Signal
              </h3>
              <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#d4d4d8] transition-colors duration-700">
                The system proved that the absolute absence of information (<code className="text-[#10b981] font-mono text-sm px-1.5 py-0.5 rounded bg-[#10b981]/10">__MISSING__</code>, with SHAP impacts exceeding <span className="font-mono text-white">0.3900</span>) is the most critical threat indicator of a <span className="text-white font-bold">Fatal injury</span>. In reality, a dying driver cannot answer a centralized police questionnaire; the system comprehended this stark human reality, transforming the "blank paper" into a red alert rather than falsifying it in the lab.
              </p>
            </div>

            <div className="bg-[#111113] border border-[#212327] rounded-xl p-6 mt-8">
              <span className="block text-[11px] font-mono uppercase text-[#7d8187] mb-3 tracking-widest border-b border-[#212327] pb-3">On the Ground Operational Impact</span>
              <p className="text-[16px] text-[#d4d4d8] font-normal leading-[1.6]">
                 Work environments are chaotic. Field officers might be physically unable to log complete reports during disasters. Thanks to this architecture, organizations are protected from standard human errors and report deficits. The system triggers maximum threat alerts based on "Data Silence," granting you the intelligence needed to deploy emergency interventions even when the paperwork is completely empty.
              </p>
            </div>
          </motion.div>
        </motion.div>


        {/* 2. Taming Catastrophic Imbalance */}
        <motion.div 
          initial="idle"
          whileHover="hover"
          animate="animate"
          className="space-y-12 group relative"
        >
          <motion.div
             variants={{
               idle: { opacity: 0.05, filter: 'blur(80px)' },
               hover: { opacity: 0.1, filter: 'blur(100px)' }
             }}
             transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#3b82f6]/20 rounded-full pointer-events-none"
          />

          <div className="relative z-10 text-center space-y-4">
             <span className="text-[13px] font-mono text-[#3b82f6] uppercase tracking-widest block font-bold">2 — Taming Catastrophic Imbalance</span>
             <h2 className="text-[32px] md:text-[48px] font-light leading-[1.0] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
               Radar Dominance Over Rare Catastrophes
             </h2>
          </div>
          
          <motion.div 
            variants={{
              idle: { backgroundColor: "rgba(10, 10, 10, 1)" },
              hover: { backgroundColor: "rgba(18, 18, 18, 1)" }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 rounded-[24px] p-8 md:p-12 shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-[18px] font-medium text-white font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6] block" />
                Reading the Data
              </h3>
              <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#d4d4d8] transition-colors duration-700">
                The statistical reality determines that <span className="text-white font-medium">Fatal Injury</span> events constitute a mere 1% (roughly 158 cases), compared to 85% routine <span className="text-white font-medium">Slight</span> accidents.
              </p>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-[#1e1e21]">
              <h3 className="text-[18px] font-medium text-white font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] block" />
                The Impact in the Logs
              </h3>
              <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#d4d4d8] transition-colors duration-700">
                A conventional system would ignore this 1% margin completely. However, our logs confirm that we subjected the pipeline to rigorous Cross-Validation (CV) Stability cycles, weaponized specifically to hunt this precise sub-class (<code className="text-[#3b82f6] font-mono text-sm px-1.5 py-0.5 rounded bg-[#3b82f6]/10">recall__Fatal injury = 0.4166</code>), freezing the test set to guarantee zero statistical cheating. In standard field deployments, intercepting 4 out of 10 fatal accidents relying heavily on incomplete administrative paperwork and absolute zero physical metrics (like collision speed) is an immense intelligence victory that directs ambulances to the proper location.
              </p>
            </div>

            <div className="bg-[#111113] border border-[#212327] rounded-xl p-6 mt-8">
              <span className="block text-[11px] font-mono uppercase text-[#7d8187] mb-3 tracking-widest border-b border-[#212327] pb-3">On the Ground Operational Impact</span>
              <p className="text-[16px] text-[#d4d4d8] font-normal leading-[1.6]">
                 We are deploying an "ultra-sensitive radar" for your organization. Your enterprise will no longer waste its energy, ambulances, or emergency response teams on the 85% of routine scenarios. Our architecture guarantees that your most valuable resources are directed exclusively toward the 1% representing an actual existential threat to life or enterprise—with absolute certainty and without false alarms draining your operational budget.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. Surgical Time Engineering */}
        <motion.div 
          initial="idle"
          whileHover="hover"
          animate="animate"
          className="space-y-12 group relative"
        >
          <motion.div
             variants={{
               idle: { opacity: 0.05, filter: 'blur(80px)' },
               hover: { opacity: 0.1, filter: 'blur(100px)' }
             }}
             transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#f59e0b]/20 rounded-full pointer-events-none"
          />

          <div className="relative z-10 text-center space-y-4">
             <span className="text-[13px] font-mono text-[#f59e0b] uppercase tracking-widest block font-bold">3 — Surgical Time Engineering</span>
             <h2 className="text-[32px] md:text-[48px] font-light leading-[1.0] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
               Transforming "Raw Time" into a Behavioral Field Map
             </h2>
          </div>
          
          <motion.div 
            variants={{
              idle: { backgroundColor: "rgba(10, 10, 10, 1)" },
              hover: { backgroundColor: "rgba(18, 18, 18, 1)" }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 rounded-[24px] p-8 md:p-12 shadow-[0_1px_2px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-[18px] font-medium text-white font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] block" />
                Reading the Temporal Data
              </h3>
              <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#d4d4d8] transition-colors duration-700">
                Temporal data logged was highly complex (1,074 unique timestamps) lacking definitive dates.
              </p>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-[#1e1e21]">
              <h3 className="text-[18px] font-medium text-white font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] block" />
                Neutralizing Administrative Deception
              </h3>
              <p className="text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#d4d4d8] transition-colors duration-700">
                The system cleared random interventions and isolated <code className="text-[#f59e0b] font-mono text-sm px-1.5 py-0.5 rounded bg-[#f59e0b]/10">Feature_001__hour</code> as the 3rd most critical decision-driving feature, actively dismissing the "administrative deception" correlated with logging minutes. We realized that the "37th minute" is rarely the true cause of death; it is simply physical proof of a delayed ambulance. We understand the physics of Operations. We immediately recognized that police and emergency teams arrive later at fatal crashes—creating higher documentation accuracy for the standard minutes slot. Intervening at the engineering layer, we removed this deceptive feature entirely from the training. The outcomes you see today rely entirely on pure field realities (like the specific <code className="text-[#f59e0b] font-mono text-sm px-1.5 py-0.5 rounded bg-[#f59e0b]/10">Time_Bucket</code>), stripped of administrative noise that deceives the standard decision maker.
              </p>
            </div>

            <div className="bg-[#111113] border border-[#212327] rounded-xl p-6 mt-8">
              <span className="block text-[11px] font-mono uppercase text-[#7d8187] mb-3 tracking-widest border-b border-[#212327] pb-3">On the Ground Operational Impact</span>
              <p className="text-[16px] text-[#d4d4d8] font-normal leading-[1.6]">
                 This reflects an absolute awareness of our environment. The system now maps a precise daily behavioral tracker forecasting threats by the exact hour. You, as a decision-maker, can recalibrate your patrols, emergency teams, and logistical operations to operate at maximum vigilance during the precise hours isolated by the system—preventing catastrophic losses before they materialize.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Closing Statements */}
        <div className="space-y-16 lg:space-y-24 border-t border-[#1e1e21] pt-16">
           <div className="text-center space-y-8 max-w-4xl mx-auto">
             <h2 className="text-[32px] md:text-[40px] font-light leading-[1.2] tracking-[0px] text-[#ffffff] [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">
              Engineering a Reality-Resilient Future
            </h2>
            <div className="space-y-6 text-[18px] md:text-[20px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif]">
              <p>
                We guarantee that the instrumentation you receive is unbreakable. The operational impact is a complete safeguard for your technical investments; the system will operate inside your live enterprise environment with the exact same stability and efficiency as it operated inside our laboratories, ensuring absolute Business Continuity without the need for expensive maintenance interventions or catastrophic downtimes.
              </p>
            </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              {
                title: "Confronting the Unwritten",
                desc: "We purposefully confronted a database that does not tell the story of the crash, but rather the story of \"what was not logged\"—where the inability of an officer to interview a dying driver (a blank box) was mathematically transformed into the ultimate early-warning signal."
              },
              {
                title: "Overcoming Statistical Blindness",
                desc: "The dataset suffered from statistical blindness; 85% of logs were base-level Slight Injury reports, while Fatal Injury occurrences were a drop in the ocean at exactly 1% (158 isolated cases out of 12,316)."
              },
              {
                title: "Beyond Administrative Tracking",
                desc: "The available data simply constituted \"Post-Event Administrative Tracking\"—never the \"Causal Dynamics of the Event\". The logs recount routine info (Weather 82% normal, Road 92% dry asphalt, Driver 93% male)."
              },
              {
                title: "No Physical Metrics",
                desc: "There was not a single column tracking physical metrics like \"vehicle speed,\" \"collision angle,\" or \"braking force\" yet the system managed to extract truth and pinpoint threat probabilities with extreme precision."
              }
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
                 <h3 className="relative z-10 text-[22px] font-normal leading-[1.2] tracking-[0px] text-[#ffffff] mb-6 [font-family:'Helvetica_Now_Display',Helvetica,Arial,sans-serif]">{item.title}</h3>
                 <p className="relative z-10 text-[16px] md:text-[18px] text-[#a1a1aa] font-normal leading-[1.6] [font-family:'Inter_Variable',Inter,sans-serif] group-hover:text-[#ffffff] transition-colors duration-500">{item.desc}</p>
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
