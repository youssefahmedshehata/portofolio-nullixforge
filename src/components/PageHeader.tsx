import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-48 pb-24 px-6 md:px-12 border-b border-black/5 bg-[#fafafa] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader eyebrow={eyebrow} title={title}>
          {description}
        </SectionHeader>
      </div>
    </section>
  );
}
