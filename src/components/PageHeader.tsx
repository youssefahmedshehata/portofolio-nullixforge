import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-6 bg-[#0a0a0a] border-b border-[#212327]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow={eyebrow} title={title}>
          {description}
        </SectionHeader>
      </div>
    </section>
  );
}
