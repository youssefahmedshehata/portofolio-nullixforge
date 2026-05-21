import { HeroSection } from '../components/HeroSection';
import { IntroSection } from '../components/IntroSection';
import { WorkSection } from '../components/WorkSection';
import { ApproachSection } from '../components/ApproachSection';
import { ServicesSection } from '../components/ServicesSection';
import { ContactCTA } from '../components/ContactCTA';
import { motion } from 'motion/react';

export function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full flex flex-col overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <WorkSection />
      <ApproachSection />
      <ServicesSection />
      <ContactCTA />
    </motion.div>
  );
}
