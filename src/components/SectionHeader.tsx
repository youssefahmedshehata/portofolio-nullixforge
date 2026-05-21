import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeader({ eyebrow, title, children }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-24 max-w-3xl"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono font-medium text-[12px] text-[#a1a1a1]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-sans text-[32px] md:text-[40px] leading-tight font-semibold tracking-[-0.04em] text-white mb-6">
        {title}
      </h2>
      {children && (
        <div className="font-sans font-normal text-[16px] text-[#a1a1a1] leading-relaxed">
          {children}
        </div>
      )}
    </motion.div>
  );
}
